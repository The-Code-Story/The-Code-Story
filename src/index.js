import ropsten from "./Web3.js";
import abi from "./abi/abi.json" assert { type: "json" };

// contract CodeSensei.sol deployed at Ropsten Testnet at 0x5f7d6843cd2455BD49C2edc764B220bb59f408c0

const button = document.querySelector("#mint");
button.addEventListener("click", mintNFT);

function mintNFT() {
  console.log("run mint nft");
  localStorage.setItem("isMInt", true);
  let level = 1; //forced variable...

  if (typeof window.ethereum == "undefined") {
    ("You should install Metamask");
  }
  let web3 = new Web3(window.ethereum);
  let contract = new web3.eth.Contract(
    abi,
    "0x5f7d6843cd2455BD49C2edc764B220bb59f408c0"
  );

  web3.eth.requestAccounts().then((accounts) => {
    contract.methods
      .mintNFT(level)
      .send({ from: accounts[0] })
      .then(() => {
        console.log("NFT is created");
      });
  });
}

//using ropsten promise
//this promise after resolving return an object { levelCleared: data } data is uint array
ropsten.then((result) => {
  console.log(result);
  // can show level cleared on top
});
