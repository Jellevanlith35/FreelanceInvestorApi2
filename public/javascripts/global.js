$(document).ready(function() {
  var login = {
    emailaddress: "jelle_van2_lith@hotmail.com",
    password: "test12345"
  }
  $.ajax({
          type: 'POST',
          data: login,
          url: 'api/accounts/validate/login',
          dataType: 'JSON'
      }).done(function (response) {
          console.log(response);
      });
});
