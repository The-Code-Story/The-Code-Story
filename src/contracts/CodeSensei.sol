// // SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.7.0 <0.9.0;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// contract Asubo is ERC721URIStorage, ReentrancyGuard{

//     constructor()ERC721("CodeSensei","CODS"){

//     }

//     uint public tokenId;
//     string[] internal  tokenURIs = ["https://ipfs.filebase.io/ipfs/QmQRe7vRuSTV199MVk4dxzWHLxZsRn9di7UJVzsUjQA7Mu"]; 
    

//     mapping(address=>uint[]) public levelCleared;

//     event MintNFt(address indexed _owner,uint _level,string _tokenURI, uint _tokenID );


//     function mintNFT(uint _level) public  nonReentrant() returns(bool){
//         tokenId++;
//         string memory URI = tokenURIs[_level-1];
//         _mint(msg.sender,tokenId);
//         _setTokenURI(tokenId, URI);
//         levelCleared[msg.sender].push(_level);

//         emit MintNFt(msg.sender, _level, URI, tokenId);
//         return true;
//     }

//     function solved(address _user) public view returns(uint[] memory ){
//         return levelCleared[_user];
//     }
// }

// deployed at Ropsten Testnet at 0x5f7d6843cd2455BD49C2edc764B220bb59f408c0