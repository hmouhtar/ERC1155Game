Summary
 - [uninitialized-local](#uninitialized-local) (4 results) (Medium)
 - [unused-return](#unused-return) (2 results) (Medium)
 - [calls-loop](#calls-loop) (1 results) (Low)
 - [variable-scope](#variable-scope) (4 results) (Low)
 - [assembly](#assembly) (2 results) (Informational)
 - [pragma](#pragma) (1 results) (Informational)
 - [solc-version](#solc-version) (18 results) (Informational)
 - [low-level-calls](#low-level-calls) (4 results) (Informational)
 - [naming-convention](#naming-convention) (1 results) (Informational)
 - [too-many-digits](#too-many-digits) (1 results) (Informational)
 - [external-function](#external-function) (11 results) (Optimization)
## uninitialized-local
Impact: Medium
Confidence: Medium
 - [ ] ID-0
[ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).response](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L498) is a local variable never initialized

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L498


 - [ ] ID-1
[ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).reason](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L480) is a local variable never initialized

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L480


 - [ ] ID-2
[ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).reason](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L503) is a local variable never initialized

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L503


 - [ ] ID-3
[ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).response](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L476) is a local variable never initialized

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L476


## unused-return
Impact: Medium
Confidence: Medium
 - [ ] ID-4
[ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L488-L509) ignores return value by [IERC1155Receiver(to).onERC1155BatchReceived(operator,from,ids,amounts,data)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L497-L507)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L488-L509


 - [ ] ID-5
[ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L467-L486) ignores return value by [IERC1155Receiver(to).onERC1155Received(operator,from,id,amount,data)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L476-L484)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L467-L486


## calls-loop
Impact: Low
Confidence: Medium
 - [ ] ID-6
[Forge.forge(uint256[])](contracts/Forge.sol#L22-L42) has external calls inside a loop: [sampleERC1155.burn(msg.sender,tokensToForge[i],1)](contracts/Forge.sol#L30)

contracts/Forge.sol#L22-L42


## variable-scope
Impact: Low
Confidence: High
 - [ ] ID-7
Variable '[ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).reason](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L480)' in [ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L467-L486) potentially used before declaration: [revert(string)(reason)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L481)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L480


 - [ ] ID-8
Variable '[ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).response](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L498)' in [ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L488-L509) potentially used before declaration: [response != IERC1155Receiver.onERC1155BatchReceived.selector](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L500)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L498


 - [ ] ID-9
Variable '[ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).reason](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L503)' in [ERC1155._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L488-L509) potentially used before declaration: [revert(string)(reason)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L504)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L503


 - [ ] ID-10
Variable '[ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).response](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L476)' in [ERC1155._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L467-L486) potentially used before declaration: [response != IERC1155Receiver.onERC1155Received.selector](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L477)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L476


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-11
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-12
[console._sendLogPayload(bytes)](node_modules/hardhat/console.sol#L7-L14) uses assembly
	- [INLINE ASM](node_modules/hardhat/console.sol#L10-L13)

node_modules/hardhat/console.sol#L7-L14


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-13
Different versions of Solidity are used:
	- Version used: ['0.8.16', '>=0.4.22<0.9.0', '^0.8.0', '^0.8.1']
	- [^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/security/Pausable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4)
	- [^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Strings.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4)
	- [0.8.16](contracts/Forge.sol#L3)
	- [0.8.16](contracts/Items.sol#L3)
	- [0.8.16](contracts/SampleERC1155.sol#L3)
	- [>=0.4.22<0.9.0](node_modules/hardhat/console.sol#L2)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-14
solc-0.8.16 is not recommended for deployment

 - [ ] ID-15
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol#L4


 - [ ] ID-16
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-17
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Strings.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Strings.sol#L4


 - [ ] ID-18
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4


 - [ ] ID-19
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L4


 - [ ] ID-20
Pragma version[^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-21
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4


 - [ ] ID-22
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4


 - [ ] ID-23
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L4


 - [ ] ID-24
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/security/Pausable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/security/Pausable.sol#L4


 - [ ] ID-25
Pragma version[0.8.16](contracts/SampleERC1155.sol#L3) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.7

contracts/SampleERC1155.sol#L3


 - [ ] ID-26
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-27
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4


 - [ ] ID-28
Pragma version[0.8.16](contracts/Items.sol#L3) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.7

contracts/Items.sol#L3


 - [ ] ID-29
Pragma version[0.8.16](contracts/Forge.sol#L3) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.7

contracts/Forge.sol#L3


 - [ ] ID-30
Pragma version[>=0.4.22<0.9.0](node_modules/hardhat/console.sol#L2) is too complex

node_modules/hardhat/console.sol#L2


 - [ ] ID-31
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4


## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-32
Low level call in [Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-33
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-34
Low level call in [Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-35
Low level call in [Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-36
Contract [console](node_modules/hardhat/console.sol#L4-L1532) is not in CapWords

node_modules/hardhat/console.sol#L4-L1532


## too-many-digits
Impact: Informational
Confidence: Medium
 - [ ] ID-37
[console.slitherConstructorConstantVariables()](node_modules/hardhat/console.sol#L4-L1532) uses literals with too many digits:
	- [CONSOLE_ADDRESS = address(0x000000000000000000636F6e736F6c652e6c6f67)](node_modules/hardhat/console.sol#L5)

node_modules/hardhat/console.sol#L4-L1532


## external-function
Impact: Optimization
Confidence: High
 - [ ] ID-38
burn(address,uint256,uint256) should be declared external:
	- [ERC1155Burnable.burn(address,uint256,uint256)](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L15-L26)

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L15-L26


 - [ ] ID-39
renounceOwnership() should be declared external:
	- [Ownable.renounceOwnership()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63


 - [ ] ID-40
mintBatch(address,uint256[],uint256[],bytes) should be declared external:
	- [SampleERC1155.mintBatch(address,uint256[],uint256[],bytes)](contracts/SampleERC1155.sol#L79-L86)

contracts/SampleERC1155.sol#L79-L86


 - [ ] ID-41
burn(address,uint256,uint256) should be declared external:
	- [SampleERC1155.burn(address,uint256,uint256)](contracts/SampleERC1155.sol#L25-L38)

contracts/SampleERC1155.sol#L25-L38


 - [ ] ID-42
safeTransferFrom(address,address,uint256,uint256,bytes) should be declared external:
	- [ERC1155.safeTransferFrom(address,address,uint256,uint256,bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L117-L129)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L117-L129


 - [ ] ID-43
safeBatchTransferFrom(address,address,uint256[],uint256[],bytes) should be declared external:
	- [ERC1155.safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L134-L146)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L134-L146


 - [ ] ID-44
uri(uint256) should be declared external:
	- [ERC1155.uri(uint256)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L59-L61)
	- [SampleERC1155.uri(uint256)](contracts/SampleERC1155.sol#L40-L52)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L59-L61


 - [ ] ID-45
transferOwnership(address) should be declared external:
	- [Ownable.transferOwnership(address)](node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72


 - [ ] ID-46
balanceOfBatch(address[],uint256[]) should be declared external:
	- [ERC1155.balanceOfBatch(address[],uint256[])](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L82-L98)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L82-L98


 - [ ] ID-47
burnBatch(address,uint256[],uint256[]) should be declared external:
	- [ERC1155Burnable.burnBatch(address,uint256[],uint256[])](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L28-L39)

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol#L28-L39


 - [ ] ID-48
setApprovalForAll(address,bool) should be declared external:
	- [ERC1155.setApprovalForAll(address,bool)](node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L103-L105)

node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol#L103-L105


