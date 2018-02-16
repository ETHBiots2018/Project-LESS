/*****  test functions  ******/


// function getProjects(){ // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: collected money, [3]: BC-address
//   var projects=[];
//   projects[0]= ["SP Bern","100000","30000","BC1234567890"];
//   projects[1]= ["wasserkraftwerk Aargau","150000","30000","BC2234567890"];
//   projects[2]= ["SP Bern","50000","45000","BC2222222290"];
//
//   return projects;
// }

// function getProjectsUser() { // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: invested money, [3]: produced energy tokens
//     var projects = [];
//     projects[0] = ["SP Bern", "100000", "30000", "12346"];
//     projects[1] = ["wasserkraftwerk Aargau", "150000", "30000", "123567"];
//     projects[2] = ["SP Bern", "50000", "45000", "1200"];
//
//     return projects;
// }

//
// function loggedIn(){
//
//   return true;
// }

var projects = [];
/*****  other functions  ******/
window.addEventListener('load', function() {

    // Check if Web3 has been injected by the browser:
    if (typeof web3 !== 'undefined') {

    } else {

        $("#popup-no-metamask").removeClass("d-none");
        console.log("There is no MetaMask in this browser.");

    }

    if (loggedIn()) {
        $('#status-login').addClass('badge-success');
        $('#status-login').html('Logged in');
        $('#status-login').removeClass('badge-danger');
    }

    // if (loggedIn()==false && /login.html/.test(window.location.href)==false){
    //     window.location.replace("login.html");
    // }

//     if (loggedIn()==true && /login.html/.test(window.location.href)==true){
//         window.location.replace("index.html");
//     }

    if ($('#table-all-projects').length) {
        getProjects();

        setTimeout(function() { putProjectList('#table-all-projects');console.log("building"); }, 5000);

    }

    if ($('#table-user-projects').length) {
        getProjects();
        setTimeout(function() { getProjectsUser();}, 4000);
        setTimeout(function() { putProjectListUser('#table-user-projects');console.log("building"); }, 5000);
        putMoneyUser('#money-user');
        putEnergyTokenUser('#energy-token-user');

    }

});


/*****  element listener  ******/

$('#popup-buy').on('click', function(e) {
    if (e.target !== this)
        return;
    $("#popup-buy").addClass("d-none");
});

$('#popup-no-metamask').on('click', function(e) {
    if (e.target !== this)
        return;
    if(typeof web3 !== 'undefined')
    $("#popup-no-metamask").addClass("d-none");
});




/*****  functions  ******/

function putPopupBuy(e){
 //console.log("click on a button-founding");
 var tRow=$(e).parent();
 while(!tRow.is("tr")){
   tRow=tRow.parent();
   if(tRow.is("html")){
     console.log("no tr found!");
     break;
   }
 }

 $('#name-buy').html(tRow.find('.name').html());
 $('#progress-bar-buy').css('width',tRow.find('.progress-bar').css('width'));
 $('#progress-buy').html(tRow.find('.progress-bar').attr('value')+" is already funded.");
  $('#key-buy').attr('value' , $(e).attr('value'));
 $('#popup-buy').removeClass("d-none");
}

function putProjectList(id) {
    console.log(projects);
    for(i=0;i<projects.length;i++){

        projects[i][2]=projects[i][1]-(projects[i][2]/projects[i][4]);
        if (isNaN(projects[i][2])){
            projects[i][2]=0;
        }
    }

    $("#gif-loading").addClass("d-none");

    var htmlSrc = '<tr><th scope="row" class="name">%name%</th><td class="goal">%goal%</td><td><div class="progress"><div class="progress-bar" role="progressbar" style="width: %width%%" value="%width%%"></div></div></td><td><button class="btn btn-primary btn-sm button-founding" onclick="putPopupBuy(this)" role="button" value="%key%" enabled="1">Co-found it!</button></td></tr>';



    if (!projects.length) {
        console.log("No element in projects");
        $("#table-all-projects").html("<h4>no projects available</h4>");
    }

    for (var i = 0; i < projects.length; i++) {

        var row = htmlSrc;
        var progress = Math.round(projects[i][2] / projects[i][1] * 100);

        row = row.replace("%name%", projects[i][0]);
        row = row.replace("%goal%", projects[i][1]);
        row = row.replace(new RegExp('%width%', 'g'), progress);
        if(progress!=100){
            row = row.replace("%key%", projects[i][3]);
        }
        else{
            row = row.replace("Co-found it!", "Funded!");
            row = row.replace("enabled=\"1\"", "disabled");
        }

        $(id).append(row);
    }
}
var moneyInvested=0;

function putProjectListUser(id) {
    var projects = getProjectsUser();
    $("#gif-loading").addClass("d-none");

    var htmlSrc = '<tr><th scope="row">%name%</th><td>%goal%</td><td>%share%%</td></tr>';

    if (!projects.length) {
        console.log("No element in projects");
        $("#table-user-projects").html("<h4>no projects available</h4>");
    }

    for (var i = 0; i < projects.length; i++) {

        var row = htmlSrc;
        var progress = Math.round(projects[i][2] / projects[i][1] * 100);

        row = row.replace("%name%", projects[i][0]);
        row = row.replace("%goal%", projects[i][2]);
        row = row.replace('%share%', progress);
        if(projects[i][6]!=0){
        $(id).append(row);
        moneyInvested+=projects[i][2];
        $('#money-user').text(''+ moneyInvested);
        }
    }
}

function putMoneyUser(id){

  id.html(getMoneyInvested());
}

function putEnergyTokenUser(id){

  id.html(getEnergyTokens());
}
