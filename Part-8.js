//This assignment is to use utilities
//by Muhammad Irfan PIAIC1337739

require('dotenv').config()

var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3');
const rpcURL = process.env.myRpcURL
const web3 = new Web3(rpcURL)

//get last gas price 
web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
  })

//convert text to sha3 encoding
console.log(web3.utils.sha3('Muhammad Irfan'))

//convert text to keccak256 encoding same like sha3 encoding
console.log(web3.utils.keccak256('Muhammad Irfan'))

//Use to get 32 byte rendome hexa number. We can use 16 for 16 bytes, 8 for 8 byites and so on
console.log(web3.utils.randomHex(32))

//Create array of key pares
//I do not understand how to use this command. there is an error .each not recognized. 
//No solution found
var _ = web3.utils._
_.each({ key1: 'value1', key2: 'value2' }, (value, key) => {console.log(key)})


