// SPDX-License-Identifier: MIT
// solhint-disable-next-line compiler-version
pragma solidity 0.8.16;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./SampleERC1155.sol";
import "./Items.sol";

contract Forge is Ownable, UsesItemsConstants {
    SampleERC1155 private sampleERC1155;
    using Strings for uint256;
    mapping(string => uint256) public forgeCombinations;

    constructor(address sampleERC1155Contract) {
        sampleERC1155 = SampleERC1155(sampleERC1155Contract);
        forgeCombinations[";0;1"] = 3;
        forgeCombinations[";1;2"] = 4;
        forgeCombinations[";0;2"] = 5;
        forgeCombinations[";0;1;2"] = 6;
    }

    function forge(uint256[] calldata tokensToForge) external {
        string memory requestForgeCombination = "";
        for (uint256 i = 0; i < tokensToForge.length; i++) {
            requestForgeCombination = string.concat(
                requestForgeCombination,
                ";",
                tokensToForge[i].toString()
            );
            sampleERC1155.burn(msg.sender, tokensToForge[i], 1);
        }
        require(
            forgeCombinations[requestForgeCombination] > 0,
            "Invalid combination"
        );
        sampleERC1155.mint(
            msg.sender,
            forgeCombinations[requestForgeCombination],
            1,
            ""
        );
    }

    function trade(uint256 offeredItem, uint256 wantedItem) external {
        require(
            wantedItem == WOODEN_SWORD ||
                wantedItem == CLUB ||
                wantedItem == WOODEN_AXE,
            "Wanted item is not tradeable"
        );
        sampleERC1155.burn(msg.sender, offeredItem, 1);
        sampleERC1155.mint(msg.sender, wantedItem, 1, "");
    }
}
