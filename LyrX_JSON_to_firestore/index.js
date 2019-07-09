const firebase = require("firebase");

firebase.initializeApp({
  apiKey: "AIzaSyBoTxoYqKOpLd4CBzxau1G8tHvQOlF9kGY",
  authDomain: "lyrx-app.firebaseapp.com",
  databaseURL: "https://lyrx-app.firebaseio.com",
  projectId: "lyrx-app",
  storageBucket: "lyrx-app.appspot.com",
  messagingSenderId: "104087623318",
  appId: "1:104087623318:web:e69d843653905449"
});

data = [];

var db = firebase.database(); //ovjde

let temp = require("./data.json");

for (let key of Object.keys(temp)) {
  for (song of Object.keys(temp[key])) data.push({ song, author: key });
}

return firebase
  .database()
  .ref("/data")
  .once("value")
  .then(function(snapshot) {
    var username = snapshot.val();
    console.log(username);
    // ...
  });

