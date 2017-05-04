/*var btnSignin = document.getElementById("signIn");

btnSignin.onclick = function(){
  //kirpainike.innerHTML = "onnistui"
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
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
};*/

//VERSION 2
/*
const btnSignin = document.getElementById('signIn');

btnSignin.addEventListener('click', e =>){

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
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
};*

// Sets up shortcuts to Firebase features and initiate firebase auth.
TabApp.prototype.initFirebase = function() {
  //authorization
  this.auth = firebase.auth();
  //database setting
  this.database = firebase.database();
  //could storage setting
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};


/*
function TabApp(){
  this.checkSetup();

  // Shortcuts to DOM Elements.
  this.signInButton = document.getElementById('signIn');
  this.signOutButton = document.getElementById('signOut');
  this.signInSnackbar = document.getElementById('must-signin-snackbar');

  // I don't know what this does
  this.signOutButton.addEventListener('click', this.signOut.bind(this));
  this.signInButton.addEventListener('click', this.signIn.bind(this));

  this.initFirebase();
};

// Sets up shortcuts to Firebase features and initiate firebase auth.
TabApp.prototype.initFirebase = function() {
  //authorization
  this.auth = firebase.auth();
  //database setting
  this.database = firebase.database();
  //could storage setting
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};


// Signs-in TabApp.
TabApp.prototype.signIn = function() {
  //Sign in Firebase with credential from the Google user.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
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

// Signs-out of TabApp.
TabApp.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
TabApp.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.

    var userName = user.displayName;        //Get user's name.

    // Set the user's profile pic and name.

    //this.userName.textContent = userName;

    // Show user's profile and sign-out button.
    //this.userName.removeAttribute('hidden');
    this.signOutButton.removeAttribute('hidden');

    // Hide sign-in button.
    this.signInButton.setAttribute('hidden', 'true');


    // We save the Firebase Messaging Device token and enable notifications.
    //this.saveMessagingDeviceToken();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    //this.userName.setAttribute('hidden', 'true');
    this.signOutButton.setAttribute('hidden', 'true');

    // Show sign-in button.
    this.signInButton.removeAttribute('hidden');
  }
};*/
