//Assignment to read function from deployed contracts
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/47e99eb7de984e72a7acf42beeee9dea'
const web3 = new Web3(rpcURL)

//Set your contract address
const address = '0x2c6dd3ee125d69f4940c65bc952d9a6928159ee8'
//past your abi code here
const abi = [
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

//create your contract instance
const contract = new web3.eth.Contract(abi, address)

//now we can call our contract function through contract.methods.YourFunctionName()
contract.methods.getBalance().call((err, result) => { 
    if(!err){
		console.log(result) 
	}
})
