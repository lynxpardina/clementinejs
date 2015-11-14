// jQuery version.   Needchanges in script section in profile.html to include it

$(document).ready(function () {

  var appUrl = window.location.origin,
      apiUrl = appUrl+'/api/:id';

  $(document).apiRequest("GET", apiUrl, showUser);

  function showUser (data){
      $("#profile-id").html(data.id);
      $("#profile-username").html(data.username);
      $("#profile-repos").html(data.publicRepos);
      $("#display-name").html(data.displayName);
  }

}); //end document
