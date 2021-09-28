//This assignment is to Inspecting Blocks with Web3.js
//by Muhammad Irfan PIAIC1337739

require('dotenv').config()

var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3');
const rpcURL = process.env.myRpcURL
const web3 = new Web3(rpcURL)

const hash =   '0x0c91c0918e712f2f16c2c44680d73c88d2fd41faf7ac2c92fbe3ef82955fdffa'

web3.eth.getBlockNumber().then(console.log)
web3.eth.getBlock('latest').then(console.log)

web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 3; i++){
        web3.eth.getBlock(latest - i).then(console.log)
    }
})

web3.eth.getTransactionFromBlock(hash,2).then(console.log)


