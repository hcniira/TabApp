var provider = new firebase.auth.GoogleAuthProvider();
var user;

$(document).ready(function(){
  //$("#welcome").hide();
  $("#bs-example-navbar-collapse-1").addClass('hidden');
  $("#welcome").addClass('hidden');
//  $("#signOut").addClass('hidden');
});

function signIn(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    showWelcomeContainer();

  // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};

function signOut(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.

  showLogin();
}).catch(function(error) {
  // An error happened.
});
};

function showWelcomeContainer(){
  $("#login").addClass('hidden');
  $("#welcome").removeClass('hidden');
  //$("#signOut").removeClass('hidden');
  $("#bs-example-navbar-collapse-1").removeClass('hidden');
  $("#welcomeText").html("Hei, " + user.displayName);
};

function showLogin(){
  $("#login").removeClass('hidden');
  $("#welcome").addClass('hidden');
  //$("#signOut").removeClass('hidden');
  $("#bs-example-navbar-collapse-1").addClass('hidden');

};
