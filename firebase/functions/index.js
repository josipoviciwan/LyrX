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

let temp = {
  songs: {
    akskjdja: {
      ime: "alskjdas",
      prezime: "alksdakl"
    },
    "druga pesma": {
      ime: "asdada",
      prezime: "drugo"
    }
  }
};

// db.collection()
//   .doc("data")
//   .set(temp.songs);

// menu.forEach(function(obj) {
//   db.collection("menu")
//     .add({
//       id: obj.id,
//       name: obj.name,
//       description: obj.description,
//       price: obj.price,
//       type: obj.type
//     })
//     .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//       console.error("Error adding document: ", error);
//     });

// });

// //CRAWLER AND PARSER
// var Crawler = require("js-crawler");
// var Parser = require("node-html-parser");
// //EXPRESS
// const express = require("express");
// const app = express();
// //FIREBASE
// const functions = require("firebase-functions");
// var admin = require("firebase-admin");
// var serviceAccount = require("./lyrx-app-firebase-adminsdk-u0civ-f80971564a.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://lyrx-app.firebaseio.com"
// });
// var db = admin.database();
// //LOGISTICS
// var data = {};

// var ref = db.ref("server");
// var usersRef = ref.child("songs");

// new Crawler().configure({ depth: 2 }).crawl(
//   "http://www.tekstovi.net/",
//   function onSuccess(page) {
//     const root = Parser.parse(page.body);

//     infoList = root.querySelectorAll(".lyricCapt");

//     if (infoList.length > 1) {
//       var author = String(infoList[0].firstChild.rawText);
//       var song = String(infoList[1].firstChild.rawText);
//       data[author] = {};
//       console.log(author, "-", song);

//       tekstList = root.querySelectorAll(".lyric");

//       if (tekstList.length) {
//         tekstList = tekstList.map(node => {
//           return node.text;
//         });
//         var tekst = tekstList.join("");
//       }
//       data[author][song] = tekst;
//       usersRef.push({
//         author: author,
//         song: song,
//         text: tekst
//       });
//     }
//   },
//   null,
//   function onAllFinished(crawledUrls) {
//     console.log("All crawling finished");

//     for (var key of Object.keys(data)) {
//       console.log(key);
//     }
//   }
// );

// // As an admin, the app has access to read and write all data, regardless of Security Rules

// // Attach an asynchronous callback to read the data at our posts reference
// ref.on(
//   "value",
//   function(snapshot) {
//     console.log(snapshot.val());
//   },
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   }
// );

// app.get("/", (req, res) => {
//   //res.set("Cache-Control", "public, max-age=3000, s-maxage=6000");
//   res.send({ express: data }); //{ express: data });
// });

// exports.app = functions.https.onRequest(app);
