pragma solidity ^0.4.17; 

contract Project00000 {
   
    // Just change the names of the functions as needed
    mapping (address => uint256) public balanceOf;
    mapping (address => bool) public isShareholder;
    mapping (uint => address) public shareholders;
    uint numShareholders;

    address public admin; //EWZ
    address public meter;
    address public owner; //Guy with roof
    
    // This is new
    address public tokenbankAdr;
    
    bool terminated;
    uint256 totalAmount;
    uint256 missing;

    // These are new
    uint256 maxPower;
    uint256 dayprice;
    uint256 nightprice;
    
    
    function Project00000() public{
    admin = msg.sender;
    meter = 0x0;
    owner = 0x0;
    terminated = false;
    totalAmount = 100000;
    balanceOf[owner]= totalAmount / 10;  // give owner 10% for providing his roof
    missing = totalAmount * 9 /10;
    }
    
    function transfer(address to, uint256 amount) public{
        require(balanceOf[msg.sender]>=amount);
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
    
    //helper function to calculate daytime from timestamp
    function dayTime(uint32 timestamp) returns(bool b){
        int time_of_day = timestamp % 86400;
        return (time_of_day >= 21600) && (time_of_day <= 64800); // Is 6:00 <= time of day <= 18:00 ?
    }
    
    function generateDividend(uint256 energy_In_mWh, uint32 timeStamp) public {
        require(msg.sender == meter);
        require(timeStamp + 10000 > block.timestamp && timeStamp - 10000 < block.timestamp);
        require(energy_In_mWh <= maxPower);
        
        //iterates over all shareholders
        for (uint i = 0; i<numShareholders; i++) {
            address holderAdress = shareholders[i];
            uint share = balanceOf[holderAdress];
            uint256 numPowerTokens;           
            if ( dayTime(timeStamp) ){
                //call the transfer to Tokenbank here with dayprice
                numPowerTokens = share*energy_In_mWh*dayprice;
            } else {
                //call the transfer to Tokenbank here with nightprice
                numPowerTokens = share*energy_In_mWh*nightprice;
            }
            /* vvvvvvvvv   Adjust this function call   vvvvvvvvv   */
            tokenbankAdr.call(keccak256("transferfunction(uint256,address)"), numPowerTokens, holderAdress); 

        }
    }
    
    
}

