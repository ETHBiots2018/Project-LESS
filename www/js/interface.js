function loggedIn(){ // returns true if the user is logged in MetaMask


}

function getProjects(){ // gets all projects running and their information and puts it in an array
//var projects=[][]; // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: collected money, [3]: BC-address
var projects = 
[
["Project00000",100000,23,"0x370097e3e12ad7eae334fc0f718ac71f70714dc3"],
["Project00001",100000,23,"0x370097e3e12ad7eae334fc0f718ac71f70714dc3"]
]


  return projects;
}

function getMoneyInvested(){ // gets the total money invested in all projects by the user
  // get user key from MetaMask
  var money=0;


  return money;
}

function getEnergyTokens(){ // gets the total # energy tokens received in all projects by the user
//get user key from MetaMask
  var energyToken=0;

  return energyToken;
}

function getProjectsUser(){ // gets all projects that the user invested in and puts their information in an array
  //get user key from MetaMask
//var projects=[][]; // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: invested money, [3]: produced energy tokens
projects = getProjects();
  return projects;
}

function getPTBankInst(){ // get Power Token contract address
    var ptbankaddr="0xdbf30d5a88285aec859ed10111934b7b8ea583ab";
    return web3.eth.contract(PowerTokenContractAbi).at(ptbankaddr);
}

