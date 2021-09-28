//Assignment to read function from deployed contracts
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/47e99eb7de984e72a7acf42beeee9dea'
const web3 = new Web3(rpcURL)

//Set your contract address
// const address = '0x2c6dd3ee125d69f4940c65bc952d9a6928159ee8'
// const contractAddress = '0xfb37824fc45b0d388cd1306cdc8de042a4383aae'
const contractAddress = process.env.myContractAddress
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

const contractMethodAsyc = async ()=> {
    try{
        //create your contract instance
        const contract = new web3.eth.Contract(abi, contractAddress)
        let getBalance = await contract.methods.getBalance().call()
        console.log ("Your account balance is : ", getBalance)
    } catch(error){
        console.log ("There is following error : ", error)
    }
}

contractMethodAsyc()