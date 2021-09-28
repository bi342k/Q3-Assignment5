//This assignment is to create transaction 
//by Muhammad Irfan PIAIC1337739
require('dotenv').config()
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/47e99eb7de984e72a7acf42beeee9dea'
const web3 = new Web3(rpcURL)
const account1 = process.env.myAccount1;

//export your private key and accounts to safe env
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')

//import transaction library
var Tx = require('ethereumjs-tx').Transaction

//Set your contract address
// const contractAddress = '0xfb37824fc45b0d388cd1306cdc8de042a4383aae'
const contractAddress = process.env.newContractAddress
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
        let txCount = await web3.eth.getTransactionCount(account1)
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            gasLimit: web3.utils.toHex(300000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data: contract.methods.setBalance(8735).encodeABI()
        }
        //2. Sign the Transaction
        const tx = new Tx(txObject, {chain: 'ropsten', hardfork: 'petersburg'})
        tx.sign(privateKey1)
        const serializTx = tx.serialize()
        const raw = '0x' + serializTx.toString('hex')
        //3. Broadcast the transaction to the network
        let signedTransaction = await web3.eth.sendSignedTransaction(raw)
        console.log("Signed Transaction : ", signedTransaction)
    } catch(error){
        console.log ("There is following error : ", error)
    }
}

contractMethodAsyc()