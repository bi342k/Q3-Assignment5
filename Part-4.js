//This assignment is to create transaction 
//by Muhammad Irfan PIAIC1337739
//first of all install following for creating a transaction
//npm install ethereumjs-tx

//environmental variables
require('dotenv').config()

//export your private key and accounts to safe env
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const account1 = process.env.myAccount1;

//import transaction library
var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const rpcURL = process.env.myRpcURL
const web3 = new Web3(rpcURL)

const data = '608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806312065fe01461003b578063fb1669ca14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea26469706673582212204a5d7687c13ba99b7481d7b1e281560d94027ca6c166e8bddb67273ba13ee34464736f6c63430008070033';

const bufferData = Buffer.from(data, 'hex');

//Steps to use
//1. Build a transaction object
//2. Sign the transaction
//3. Broadcast the transaction to the network

//1. Build a transaction object
web3.eth.getTransactionCount(account1, (err, txCount)=>{
    if(err){
        console.log('There is an error :', err)
    } else{
        console.log("Transaction nonce is :", txCount);
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(300000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data: bufferData
        }
        //2. Sign the Transaction
        const tx = new Tx(txObject, {chain: 'ropsten', hardfork: 'petersburg'})
        tx.sign(privateKey1)
        const serializTx = tx.serialize()
        const raw = '0x' + serializTx.toString('hex')

        //3. Broadcast the transaction to the network
        web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
            if (err){
                console.log('There is a txHash error:', txHash)
            } else{
                console.log('Your transaction is :', txHash)
            }
            

        }).then(receipt =>{
            console.log(receipt)
        })
    
    }
    
})


