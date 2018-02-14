pragma solidity ^0.4.17; 

contract PowerToken {
    mapping (address => uint256) public balanceOf;
    mapping (address => uint8) public projects;
    
    address public admin;
    uint256 public buyBackRate = 1; //1 Token = 1 Rp.

    function PowerToken() public{
    admin = msg.sender;
    }
    
   /* function sellTokens(uint256 amount){
        balanceOf[msg.sender] -= amount;
        msg.sender.transfer(amount*buyBackRate);
        
    }*/
    
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
