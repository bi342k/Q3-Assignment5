//This assignment is to create transaction 
//by Muhammad Irfan PIAIC1337739
require('dotenv').config()

var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3');
const rpcURL = process.env.myRpcURL
const web3 = new Web3(rpcURL)

const account1 = process.env.MyAccount1
const myProvateKey = process.env.PRIVATE_KEY_1

const privateKey1 = Buffer.from(myProvateKey, 'hex')

const contractAddress = process.env.newContractAddress

const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "NewBalance",
				"type": "uint256"
			}
		],
		"name": "Balance",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "myBal",
				"type": "uint256"
			}
		],
		"name": "setBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contractEvent = async ()=>{
    try{
        const contract = new web3.eth.Contract(ABI, contractAddress)
        // console.log("All events are :", getAllEvents)
        let getAllEvents = await contract.getPastEvents("Allevents", {
            fromBlock: 0,
            toBlock: 'latest'
        })
        console.log("Following are the events: ", getAllEvents)
    } 
    catch (error){
        console.log ("There is error :", error)
    }
}
contractEvent()

 
    //just for practice and not part of assignments
    //  web3.eth.getBlockNumber().then(console.log); //Get block no. 
    // web3.eth.getBlock('latest').then(console.log); // Get all block data

