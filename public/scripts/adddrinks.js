var Mydatabase = firebase.database();
var startammount = 0;

function AddCoffee(){
  var rootRef = firebase.database().ref();
  var usersRef = rootRef.child('Users/' + user.uid);
  usersRef.set({name: user.displayName,email: user.email});
  var kahviRef = usersRef.child('Kahvit');
  kahviRef.set({juodutkahvit: startammount});
  //kahviRef.updateChildValues([juodutkahvit: startammount+1]);

/*  var updates = {};
  updates['/posts/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);*/

  //.set({name: user.displayName,email: user.email,});
  //personRef.child("juodut sumpit").set("moi");

};
/*
function AddTea(){
  firebase.database().ref('Users/' + user.uid).set({
    username: name,
    email: email,
    drink: "Tee"
  });

};*/
