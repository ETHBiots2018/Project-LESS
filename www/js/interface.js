function loggedIn(){ // returns true if the user is logged in MetaMask
//if (typeof window.web3 !== 'undefined') {
if(window.web3.eth.accounts.length != 0){
return true;
}
return false;
}


var index=0;
function getProjects(){ // gets all projects running and their information and puts it in an array
//var projects=[][]; // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: collected money, [3]: BC-address, [4]: chftowei
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
var PTBank = getPTBankInst();    
var q=0;
for (i=0;i<index;i++){
    PTBank.projects_addr.call(i, function(error, res) {
        if (error) {
            console.log(error);
            return;
        }
        projects[q]=["name", "goal", "collected", res];
                q+=1;

    }
    );  
}
setTimeout(function() { afterWait2(); }, 1000);


}

function afterWait2(){
var projInst=[];
for (i=0;i<index;i++){
    projInst[i] = getProjectInst(projects[i][3]);    
}
console.log(projInst)

for (i=0;i<index;i++){

    inst = projInst[i];
    
    func='inst.name.call(function(error, res) { if (error) { console.log(error); return; } projects[vvvv][0]=res;});';
    func=func.replace(/vvvv/g, i);
    eval(func);
    
}

for (i=0;i<index;i++){

    inst = projInst[i];
    
    func='inst.CHFtoCollect.call(function(error, res) { if (error) { console.log(error); return; } projects[vvvv][1]=res;});';
    func=func.replace(/vvvv/g, i);
    eval(func);
    
}

for (i=0;i<index;i++){

    inst = projInst[i];
    
    func='inst.CHFtoWei.call(function(error, res) { if (error) { console.log(error); return; } projects[vvvv][4]=res;});';
    func=func.replace(/vvvv/g, i);
    eval(func);
    }

for (i=0;i<index;i++){

    inst = projInst[i];
    
    func='inst.missing.call(function(error, res) { if (error) { console.log(error); return;} projects[vvvv][2]=res;});';
    func=func.replace(/vvvv/g, i);
    eval(func);


}
// total_shares
for (i=0;i<index;i++){

    inst = projInst[i];
    
    func='inst.totalShares.call(function(error, res) { if (error) { console.log(error); return;} projects[vvvv][5]=res;});';
    func=func.replace(/vvvv/g, i);
    eval(func);
}

//myShares
for (i=0;i<index;i++){

    inst = projInst[i];
    func='inst.balanceOf.call("uuuu", function(error, res) { if (error) { console.log(error); return;} projects[vvvv][6]=res;});';
    func=func.replace(/vvvv/g, i);
    func=func.replace(/uuuu/g, ""+web3.eth.accounts[0]);
    eval(func);
}

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
  for (i=0;i<index;i++){
    projects[i][0]=projects[i][0];
    projects[i][1]=projects[i][5]/projects[i][4];
    projects[i][2]=projects[i][6]/projects[i][4];
    projects[i][3]=projects[i][3];
    projects[i][4]=projects[i][4];
    projects[i][5]=projects[i][5];
    projects[i][6]=projects[i][6];
  }
//   var max = index;
//    for (i=0;i<max;i++){
//      if(projects[i][6]==0){
//      projects = projects.splice(i, 1);
//      i--;
//      max--;
//      }
//    }
  
  //projects=projectsfinal;
  return projects;
}

function getPTBankInst(){ // get Power Token contract address
    //var ptbankaddr="0x9f56cd2756c2d0a06130c947cfeedd6065549e34";
    var ptbankaddr="0x5e50619a95c6e95362f17b3d295cece02fcc04c3";
    return web3.eth.contract(PowerTokenContractAbi).at(ptbankaddr);
}

function getProjectInst(ptbankaddr){ // get project contract address
    return web3.eth.contract(ProjectContractAbi).at(ptbankaddr);
}

