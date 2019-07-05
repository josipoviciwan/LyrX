const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBoTxoYqKOpLd4CBzxau1G8tHvQOlF9kGY",
  authDomain: "lyrx-app.firebaseapp.com",
  projectId: "lyrx-app"
});

var db = firebase.firestore();


for (key of Object.keys(temp.songs)) {
  let data = temp.songs[key];
  db.collection("LyrX-data")
    .doc(data.author)
    .set({ [data.song]: data.tekst }, { merge: true });
  console.log(key);
}
