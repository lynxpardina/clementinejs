// jQuery version.   Needchanges in script section in index.html to include it

$(document).ready(function () {

  var appUrl = window.location.origin,
      apiUrl = appUrl+'/api/:id/clicks',
      apiUser= appUrl+'/api/:id';

  $(document).apiRequest("GET", apiUser, showUser);

  getData();

  $(".btn-add").click(function(event){
    $(document).apiRequest("POST", apiUrl, getData);
    // $.post( apiUrl, getData ); // this also works passing data to getData
  })

  $(".btn-delete").click(function(event){
    $(document).apiRequest("DELETE", apiUrl, getData);
  })

  function getData(data){
    // console.log("Data received: ",data);
    $(document).apiRequest("GET", apiUrl, showNumber);
    // $.getJSON(apiUrl, showNumber); //this one also works passing data to showNumber
  }

  function showNumber (data){
      $("#click-nbr").html(data.clicks);
  }

  function showUser (data){
      $("#display-name").html(data.displayName);
  }

}); //end document
