pragma solidity ^0.4.17; 

contract Project00000 {
    mapping (address => uint256) public balanceOf;

    address public admin; //EWZ
    address public meter;
    address public owner; //Guy with roof
    
    bool terminated;
    uint256 totalAmount;
    uint256 missing;
    
    
    function Project00000() public{
    admin = msg.sender;
    meter = "";
    owner = "";
    terminated = false;
    totalAmount = 100000;
    balanceOf[owner]= totalAmount * 0.1;  // give owner 10% for providing his roof
    missing = totalAmount * 0.9;
    }
    
    function transfer(address to, uint256 amount) public{
        require(balanceOf[msg.sender]>=amount);
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
    
    function buyTokens
    
    finalizeICO
    
    cancelICO
    
    generateDividend
    
    terminateProject() payable
    
    
}

