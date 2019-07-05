const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");
const fs = require("fs");
let data = fs.readFileSync("./data.json");
let temp = JSON.parse(data);

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDJYTNE96GInhrGn3dzbWjup2GWh6sQWxo",
  authDomain: "lyrx-project.firebaseapp.com",
  projectId: "lyrx-project"
});

var db = firebase.firestore();

for (key of Object.keys(temp)) {
  let t = temp[key];
  db.collection("Lyr-X-data")
    .doc(key)
    .set({ ...t }, { merge: true });
}
