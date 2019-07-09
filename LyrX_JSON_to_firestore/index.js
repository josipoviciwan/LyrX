const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBoTxoYqKOpLd4CBzxau1G8tHvQOlF9kGY",
  authDomain: "lyrx-app.firebaseapp.com",
  projectId: "lyrx-app"
});

data = {}

var db = firebase.firestore();

let temp = require('./data.json')


db.collection("authors")
.doc("--allAuthors--")
.set({ allAuthors: Object.keys(temp) }, { merge: true });

// for (key of Object.keys(temp)) {
//   data[key] = Object.keys(temp[key]);
//   db.collection("LyrX-data")
//      .doc(data.author)
//     .set({ [data.song]: data.tekst }, { merge: true });
//   console.log(data);
// }

//setTimeout(console.log(data), 2000)