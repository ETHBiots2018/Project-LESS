pragma solidity ^0.4.17; 

contract PowerToken {
    mapping (address => uint256) public balanceOf;
    mapping (address => uint8) public projects;
    
    address public admin;
    address public oraclize;

    uint256 public buyBackRate = 1; //1 Token = 1 Rp.

    function PowerToken() public{
    admin = msg.sender;
    oraclize = 0;
    }
    
    function sellTokens(uint256 amount) public{
        balanceOf[msg.sender] -= amount;
        msg.sender.transfer(amount*buyBackRate);
    }
    
    function setRate(uint256 rate) public {
        require(msg.sender == oraclize);
        buyBackRate = rate;
    }
    
    function setOraclize(address oc) public {
        require(msg.sender == admin);
        oraclize = oc;
    }
    
    function pay() public payable {
    }
    
    function transfer(address to, uint256 amount) public{
        require(balanceOf[msg.sender]>=amount);
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
    
    function addProject(address pc) public{
        require(msg.sender == admin);
        projects[pc] = 1;
    }
    
    function distribute(address to, uint256 amount) public{
        require(projects[msg.sender] == 1);
        balanceOf[to] += amount;
    }
    
}
