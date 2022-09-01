// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./SampleERC1155.sol";
import "./Items.sol";

contract Forge is Ownable {
    SampleERC1155 private sampleERC1155;
    using Strings for uint256;
    mapping(string => uint256) private forgedIds;

    constructor(address sampleERC1155Contract) {
        sampleERC1155 = SampleERC1155(sampleERC1155Contract);
        forgedIds[";0;1"] = 3;
        forgedIds[";1;2"] = 4;
        forgedIds[";0;2"] = 5;
        forgedIds[";0;1;2"] = 6;
    }

    function forge(uint256[] calldata tokenIds) external {
        string memory forgeId = "";
        for (uint256 i = 0; i < tokenIds.length; i++) {
            forgeId = string.concat(forgeId, ";", tokenIds[i].toString());
            sampleERC1155.burn(msg.sender, tokenIds[i], 1);
        }
        require(forgedIds[forgeId] > 0);
        sampleERC1155.mint(msg.sender, forgedIds[forgeId], 1, "");
    }

    function trade(uint256 offeredItem, uint256 wantedItem) external {
        require(
            wantedItem == WOODEN_SWORD ||
                wantedItem == CLUB ||
                wantedItem == WOODEN_AXE
        );
        sampleERC1155.burn(msg.sender, offeredItem, 1);
        sampleERC1155.mint(msg.sender, wantedItem, 1, "");
    }
}
