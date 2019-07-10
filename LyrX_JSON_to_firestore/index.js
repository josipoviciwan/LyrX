const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBoTxoYqKOpLd4CBzxau1G8tHvQOlF9kGY",
  authDomain: "lyrx-app.firebaseapp.com",
  projectId: "lyrx-app"
});

data = {};

var db = firebase.firestore();

let temp = require("./data.json");

for (let key of Object.keys(temp)) {
  for (song of Object.keys(temp[key])) {
    let t = { song, author: key, text: temp[key][song] };
    let docName = song + " - " + key;
    console.log(t);
    db.collection("songs")
      .doc()
      .set(t);
  }
}
