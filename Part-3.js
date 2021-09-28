//This assignment is to create transaction 
//by Muhammad Irfan PIAIC1337739
//first of all install following for creating a transaction
//npm install ethereumjs-tx

//environmental variables
require('dotenv').config()

//export your private keys to safe env
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')

//import transaction library
var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const rpcURL = process.env.myRpcURL
const web3 = new Web3(rpcURL)

const account1 = process.env.myAccount1;
const account2 = process.env.myAccount2;

//Steps to use
//1. Build a transaction object
//2. Sign the transaction
//3. Broadcast the transaction to the network

//1. Build a transaction object
web3.eth.getTransactionCount(account1, (err, txCount)=>{
    console.log("Transaction nonce is :", txCount);
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.1','ether')),
        gasLimit: web3.utils.toHex(300000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    }
    //2. Sign the Transaction
    const tx = new Tx(txObject, {chain: 'ropsten', hardfork: 'petersburg'})
    tx.sign(privateKey1)
    const serializTx = tx.serialize()
    const raw = '0x' + serializTx.toString('hex')

    //3. Broadcast the transaction to the network
    web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
        console.log('txHash :', txHash)
    })
})


