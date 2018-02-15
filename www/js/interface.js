function loggedIn(){ // returns true if the user is logged in MetaMask
if (typeof window.web3 !== 'undefined') {
return true;
}
return false;
}


var index=0;
function getProjects(){ // gets all projects running and their information and puts it in an array
//var projects=[][]; // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: collected money, [3]: BC-address
    var PTBank = getPTBankInst(); //PTBank instance
    
    
    PTBank.index.call(function(error, res) {
        if (error) {
            console.log(error);
            return;
        }
        index=res;
    }
    );    


setTimeout(function() { afterWait1(); }, 1000);

/*
    
var projects = 
[
["Project00000",100000,23,"0x370097e3e12ad7eae334fc0f718ac71f70714dc3"],
["Project00001",100000,23,"0x370097e3e12ad7eae334fc0f718ac71f70714dc3"]
]*/


  return;
}

function afterWait1(){
    
    
for (i=0;i<index;i++){
    console.log("a");
}

projects[0]=["asdf"];

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
    var ptbankaddr="0x9f56cd2756c2d0a06130c947cfeedd6065549e34";
    return web3.eth.contract(PowerTokenContractAbi).at(ptbankaddr);
}

