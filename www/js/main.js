window.addEventListener('load', function() {

  // Check if Web3 has been injected by the browser:
  if (typeof web3 !== 'undefined') {

    // You have a web3 browser! Continue below!
    startApp(web3);

  } else {

    $("#popup-no-metamask").removeClass("d-none")

     }

     if(loggedIn()){
       $('#status-login').addClass('badge-success');
       $('#status-login').removeClass('badge-danger');
     }

if($('#table-all-projects').length){
    putProjectList('#table-all-projects');
}


})


$('#popup-buy').on('click', function(e) {
  if (e.target !== this)
    return;
  $("#popup-buy").toggleClass("d-none");

});

function getProjects(){
  var projects= [][];
  projects[1]= ["SP Bern",]

}

function putProjectList(id){
  var projects= getProjects();

    var htmlSource = '<tr>
        <th scope="row" class="name"></th>
        <td class="goal"></td>
        <td>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%"></div>
            </div>
        </td>
        <td><button class="btn btn-primary btn-sm" role="button" value="">Co-found it!</button></td>
    </tr>';

    var tree = $("<div>" + htmlSource + "</div>");

    if(projects.length==0){

    }

  for(var i=0;i<projects.length;i++){

    var row=tree;
    row.find(".name").val(projects[i][0]);
    row.find(".name").val(projects[i][1]);
    var progress= Math.round(projects[i][2]/projects[i][1]*100);
    row.find(".progress-bar").css("width":progress);
    row.find("button").attr("value",projects[i][3]);

    if(i>0){
      $(id).val(row.html())
    }
    $(id).append(row.html());

}
}
