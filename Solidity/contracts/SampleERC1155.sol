// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Items.sol";

contract SampleERC1155 is ERC1155, Ownable, Pausable, ERC1155Supply {
    using Strings for uint256;
    string private _baseURI;
    mapping(uint256 => bool) publicMintableTokens;

    constructor(string memory baseURI) ERC1155("") {
        _baseURI = baseURI;
        publicMintableTokens[CLUB] = true;
        publicMintableTokens[WOODEN_SWORD] = true;
        publicMintableTokens[WOODEN_AXE] = true;
    }

    function burn(
        address account,
        uint256 id,
        uint256 value
    ) public {
        require(
            msg.sender == owner() ||
                account == _msgSender() ||
                isApprovedForAll(account, _msgSender()),
            "ERC1155: caller is not token owner nor approved"
        );

        _burn(account, id, value);
    }

    function uri(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            exists(tokenId),
            "The provided tokenId hasn't been minted yet."
        );
        return
            bytes(_baseURI).length > 0
                ? string(abi.encodePacked(_baseURI, tokenId.toString()))
                : "";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function publicMint(uint256 tokenId) public {
        require(
            publicMintableTokens[tokenId] == true,
            "The provided token ID is not available for public mint."
        );
        console.log("token ID %s", tokenId);
        _mint(msg.sender, tokenId, 1, "");
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) whenNotPaused {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
