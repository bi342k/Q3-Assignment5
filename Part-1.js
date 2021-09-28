/*to install web3 use following command
npm install web3 
we also require infura RPC URL
This assignment related to check the account balance
**/
//require web3.js file
const Web3 = require("web3");
//to access web3 connection
const rpcURL = "https://ropsten.infura.io/v3/47e99eb7de984e72a7acf42beeee9dea";
//make a live connetion
const web3 = new Web3(rpcURL);
//Select account to get balance
const account = "0x75732A04bA76d782b62cA432c3279F82a4754939";
// to get balance web3.eth.gerbalance() command is used
web3.eth.getBalance(account, (err, wei)=>{
    balance = web3.utils.fromWei(wei, 'ether');
    //display balance on command line
    console.log("Your account balance is ", balance)
})


