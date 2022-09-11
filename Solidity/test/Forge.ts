import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import chai from "chai";
import { ethers, waffle } from "hardhat";
import { FakeContract, MockContract, smock } from "@defi-wonderland/smock";
import { Forge, Forge__factory, SampleERC1155 } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
chai.should();
chai.use(smock.matchers);
describe("Forge", function () {
  let forge: MockContract<Forge>;
  let fakeSampleERC1155: FakeContract<SampleERC1155>;
  let mainAccount: SignerWithAddress;
  beforeEach(async () => {
    [mainAccount] = await ethers.getSigners();
    fakeSampleERC1155 = await smock.fake<SampleERC1155>("SampleERC1155");
    const Forge = await smock.mock<Forge__factory>("Forge");
    forge = await Forge.deploy(fakeSampleERC1155.address);
  });
  describe("forge", () => {
    describe("when the combination is not valid", async () => {
      it("reverts", async () => {
        await chai
          .expect(forge.forge([0]))
          .to.be.revertedWith("Invalid combination");
      });
    });
    describe("when the combination is valid", async () => {
      const tokensToForge = [0, 1, 2];

      beforeEach(async () => {
        await forge.forge(tokensToForge);
      });

      it("burns the tokens from the combination", async () => {
        for (let i = 0; i < tokensToForge.length; i++) {
          await chai
            .expect(fakeSampleERC1155.burn.atCall(i))
            .to.have.been.calledWith(mainAccount.address, tokensToForge[i], 1);
        }
      });

      it("mints the new forged token", async () => {
        chai
          .expect(fakeSampleERC1155.mint)
          .to.have.been.calledWith(
            mainAccount.address,
            await forge.forgeCombinations(";0;1;2"),
            1,
            "0x"
          );
      });
    });
  });
  describe("trade", () => {
    const offeredTokenId = 0;
    describe("when the item wanted is not tradeable", async () => {
      it("reverts", async () => {
        await chai
          .expect(forge.trade(offeredTokenId, await forge.IRON_AXE()))
          .to.be.revertedWith("Wanted item is not tradeable");
      });
    });

    describe("when the item wanted is tradeable", async () => {
      beforeEach(async () => {
        await forge.trade(offeredTokenId, await forge.WOODEN_SWORD());
      });
      it("burns the offered item", async () => {
        await chai
          .expect(fakeSampleERC1155.burn)
          .to.have.been.calledWith(mainAccount.address, offeredTokenId, 1);
      });
      it("mints the wanted item", async () => {
        await chai
          .expect(fakeSampleERC1155.mint)
          .to.have.been.calledWith(
            mainAccount.address,
            await forge.WOODEN_SWORD(),
            1,
            "0x"
          );
      });
    });
  });
});
