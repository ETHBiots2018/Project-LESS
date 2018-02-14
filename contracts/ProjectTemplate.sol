pragma solidity ^0.4.17; 

contract Project00000 {
    mapping (address => uint256) public balanceOf;
    mapping (address => bool) mapped;
    mapping (uint256 => address) public shareholders;

    int8 public state; // 1:funding, 2: building, 3: service, 4: terminated
    address private admin; //EWZ
    address private meter;
    address private owner; //Guy with roof
    address private PTBank; //Power token contract
    uint256 private missing;
    uint256 private index;
    uint256 private bonus;
    uint256 private CHFtoWei;
    uint256 private CHFtoCollect;
    uint256 private balance;
    
    function Project00000() public{
    index = 0;
    admin = msg.sender;
    state=1;
    meter = 0x14723a09acff6d2a60dcdf7aa4aff308fddc160c;
    owner = 0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db;
    PTBank = 0x9240ddc345d7084cc775eb65f91f7194dbbb48d8;
    CHFtoWei = 1121300000000000; //Current ETH(wei) to CHF rate
    CHFtoCollect = 100000;
    missing=(CHFtoCollect * CHFtoWei) ;
    bonus = missing / 8 ;
    balanceOf[owner]+=bonus;
    balanceOf[admin]+=bonus;
    }
    
    function addHolder(address holder) private{
        if(mapped[holder] == false){
            mapped[holder]=true;
            shareholders[index]=holder;
            index+=1;
        }
    }
    
    function transfer_int(address from, address to, uint256 amount) private{
        if(from==owner || from==admin){
            require(balanceOf[from]-bonus>=amount); //lock bonus. Bonus can not be sold.
        }
        require(balanceOf[from]>=amount);
        addHolder(to);
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
    }
    
    function transfer(address to, uint256 amount) public{
        transfer_int(msg.sender, to, amount);
    }
    
    function buyTokens() public payable{
        require(state==1);
        addHolder(msg.sender);
        if (this.balance + msg.value>= CHFtoCollect * CHFtoWei){
            msg.sender.transfer(this.balance + msg.value - (CHFtoCollect * CHFtoWei)); //send too much money back.
            finalizeICO(); // finalize ICO, send coins to admin.
            missing=0;
            return;
        }
        transfer_int(0,msg.sender,msg.value);
    }
    
    function finalizeICO() private{
        require(state==1);
        admin.transfer(this.balance);
        state = 2;
    }
    
    function cancelICO() public{
        require(state==1);
        require(msg.sender==admin);
        state=4;
        distributeETH();
    }
    
    function generateDividend(uint256 amount, uint128 time) public{
        require(msg.sender==meter);
        require(state==3);
        for(uint256 i = 0; i < index; i ++){
            PTBank.call(bytes4(keccak256("distribute(address, uint256)")), shareholders[i],balanceOf[shareholders[i]]/(CHFtoCollect * CHFtoWei));
        }

    }
    
    function terminateProject() public payable{
        require(state==2 || state == 3);
        require(msg.sender==admin);
        state=4;
        distributeETH();
    }
    
    function distributeETH() private{
        balanceOf[owner]-= bonus; //destroy bonus
        balanceOf[admin]-= bonus; //destroy bonus
        
        balance = this.balance;
        for(uint256 i = 0; i < index; i ++){
            shareholders[i].transfer((balance * balanceOf[shareholders[i]])/((CHFtoCollect * CHFtoWei)-missing));
        }
    }
    
    function setMeter(address met) public{
        require(state==2 || state==3);
        require(msg.sender==admin);
        meter=met;
        
    }
    
}

