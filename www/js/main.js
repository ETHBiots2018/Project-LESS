/*****  test functions  ******/


// function getProjects(){ // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: collected money, [3]: BC-address
//   var projects=[];
//   projects[0]= ["SP Bern","100000","30000","BC1234567890"];
//   projects[1]= ["wasserkraftwerk Aargau","150000","30000","BC2234567890"];
//   projects[2]= ["SP Bern","50000","45000","BC2222222290"];
//
//   return projects;
// }

function getProjectsUser() { // First Bracket: # of incr. ID, second bracket: [0]: Name , [1]: founding goal, [2]: invested money, [3]: produced energy tokens
    var projects = [];
    projects[0] = ["SP Bern", "100000", "30000", "12346"];
    projects[1] = ["wasserkraftwerk Aargau", "150000", "30000", "123567"];
    projects[2] = ["SP Bern", "50000", "45000", "1200"];

    return projects;
}

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

    }

    if (loggedIn()) {
        $('#status-login').addClass('badge-success');
        $('#status-login').html('Logged in');
        $('#status-login').removeClass('badge-danger');
    }

    if ($('#table-all-projects').length) {
        getProjects();
        setTimeout(function() { putProjectList('#table-all-projects');console.log("building"); }, 5000);
        

    }

    if ($('#table-user-projects').length) {
        putProjectListUser('#table-user-projects');
        putMoneyUser('#money-user');
        putEnergyTokenUser('#energy-token-user');

    }

});


$('#popup-buy').on('click', function(e) {
    if (e.target !== this)
        return;
    $("#popup-buy").toggleClass("d-none");

});



function putProjectList(id) {
    console.log(projects);
    for(i=0;i<projects.length;i++){
        projects[i][2]=projects[i][1]-projects[i][2]
    }
    
    $("#gif-loading").addClass("d-none");

    var htmlSrc = '<tr><th scope="row" class="name">%name%</th><td class="goal">%goal%</td><td><div class="progress"><div class="progress-bar" role="progressbar" style="width: %width%%"></div></div></td><td><button class="btn btn-primary btn-sm" role="button" value="%key%">Co-found it!</button></td></tr>';



    if (!projects.length) {
        console.log("No element in projects")
        $("#table-all-projects").html("<h4>no projects available</h4>");
    }

    for (var i = 0; i < projects.length; i++) {

        var row = htmlSrc;
        var progress = Math.round(projects[i][2] / projects[i][1] * 100);

        row = row.replace("%name%", projects[i][0]);
        row = row.replace("%goal%", projects[i][1]);
        row = row.replace("%width%", progress);
        row = row.replace("%key%", projects[i][3]);

        $(id).append(row);
    }
}


function putProjectListUser(id) {
    var projects = getProjectsUser();
    $("#gif-loading").addClass("d-none");

    var htmlSrc = '<tr><th scope="row">%name%</th><td>%goal%</td>%share%<td>%</td><td>%etoken%</td></tr>';

    if (!projects.length) {
        console.log("No element in projects")
        $("#table-all-projects").html("<h4>no projects available</h4>");
    }

    for (var i = 0; i < projects.length; i++) {

        var row = htmlSrc;
        var progress = Math.round(projects[i][2] / projects[i][1] * 100);

        row = row.replace("%name%", projects[i][0]);
        row = row.replace("%goal%", projects[i][1]);
        row = row.replace("%share%", progress);
        row = row.replace("%etoken%", projects[i][3]);

        $(id).append(row);
    }
}

function putMoneyUser(id){

  id.html(getMoneyInvested());
}

function putEnergyTokenUser(id){

  id.html(getEnergyTokens());
}
