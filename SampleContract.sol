//SPDX-License-Identifier: MIT
pragma solidity >0.7.0 <0.9.0;
contract SampleContract {
    uint256 private myBalance;
    function setBalance(uint256 myBal) public {
        myBalance = myBal;
    }
    function getBalance() public view returns(uint256) {
        return myBalance;
    }
}