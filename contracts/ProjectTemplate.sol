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
    
    uint256 maxPower;
    uint256 dayprice;
    uint256 nightprice;
    bool dayTime;
    
    function Project00000() public{
    dayTime=false;
    dayprice = 20;
    nightprice = 10;
    index = 0;
    admin = msg.sender;
    state=1;
    meter = 0x14723a09acff6d2a60dcdf7aa4aff308fddc160c;
    owner = 0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db;
    PTBank = 0x8609a0806279c94bcc5432e36b57281b3d524b9b;
    CHFtoWei = 1121300000000000; //Current ETH(wei) to CHF rate
    CHFtoCollect = 100000;
    missing=(CHFtoCollect * CHFtoWei) ;
    bonus = missing / 8 ;
    balanceOf[owner]+=bonus;
    balanceOf[admin]+=bonus;
    addHolder(owner);
    addHolder(admin);
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
        if (this.balance >= CHFtoCollect * CHFtoWei){
            balanceOf[msg.sender]+=msg.value-(this.balance - (CHFtoCollect * CHFtoWei));
            msg.sender.transfer(this.balance - (CHFtoCollect * CHFtoWei)); //send too much money back.
            finalizeICO(); // finalize ICO, send coins to admin.
            missing=0;
            return;
        }
        missing -= msg.value;
        balanceOf[msg.sender]+=msg.value;
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
        balance = this.balance;
        distributeETH();
    }
    
    function setTariff(bool tariffstate) public{
        require(msg.sender==admin);
        dayTime = tariffstate;
    }
    
    
    function generateDividend(uint256 energy_In_mWh, uint128 timeStamp) public{
        require(msg.sender==meter);
        require(state==3);
        require(timeStamp + 10000 > block.timestamp && timeStamp - 10000 < block.timestamp);
        require(energy_In_mWh <= maxPower);
        uint256 numPowerTokens; 
        if (dayTime){
            numPowerTokens = energy_In_mWh*dayprice;
        } else {
            numPowerTokens = energy_In_mWh*nightprice;
        }
        
        for(uint256 i = 0; i < index; i ++){
            PTBank.call(bytes4(keccak256("distribute(address,uint256)")), shareholders[i],(8 * numPowerTokens * balanceOf[shareholders[i]])/((CHFtoCollect * CHFtoWei * 10 )));

        }

    }
    
    function terminateProject() public payable{
        require(state==2 || state == 3);
        require(msg.sender==admin);
        require(msg.value >= (CHFtoCollect * CHFtoWei));
        state=4;
        balance = this.balance;
        distributeETH();
    }
    
    function distributeETH() private{
        balanceOf[owner]-= bonus; //destroy bonus
        balanceOf[admin]-= bonus; //destroy bonus
        
        for(uint256 i = 0; i < index; i ++){
            shareholders[i].transfer((balance * balanceOf[shareholders[i]])/((CHFtoCollect * CHFtoWei)-missing));
        }
    }
    
    function setMeter(address met) public{
        require(state==2 || state==3);
        require(msg.sender==admin);
        state=3;
        meter=met;
        
    }
    
}

