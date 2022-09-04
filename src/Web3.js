import abi from "./abi/abi.json" assert { type: "json" };

const ropsten = new Promise((res, rej) => {
  async function meta() {
    if (typeof window.ethereum == "undefined") {
      alert("Install Metamask!!");
      rej("You should install Metamask");
    }
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(
      abi,
      "0x5f7d6843cd2455BD49C2edc764B220bb59f408c0"
    );

    let accounts = await web3.eth.requestAccounts();
    console.log("Connected account: ", accounts[0]);
    // console.log(contract.methods);

    web3.eth.requestAccounts().then((accounts) => {
      contract.methods
        .solved(accounts[0])
        .call({ from: accounts[0] })
        .then((data) => {
          // console.log(data);
          res({ levelCleared: data });
        });
    });
  }
  meta();
});

export default ropsten;
