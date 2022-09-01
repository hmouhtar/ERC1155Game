import { ethers, network } from "hardhat";

async function main() {
  const SampleERC1155 = await ethers.getContractFactory("SampleERC1155");
  const sampleErc1155 = await SampleERC1155.deploy(
    "ipfs://QmQsrxb2MSVZSJfC61ukoJm9dkPJD3z2aCzyHmq4Pz3Nm8/"
  );

  const Forge = await ethers.getContractFactory("Forge");
  const forge = await Forge.deploy(sampleErc1155.address);

  await sampleErc1155.transferOwnership(forge.address);

  await network.provider.send("hardhat_setBalance", [
    "0x2F90BC521F9683B402eaB1710944EBD1a1598c6D",
    "0x1000000000000000",
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
