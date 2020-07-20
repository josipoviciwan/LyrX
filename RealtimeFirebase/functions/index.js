var crypto = require("crypto");
var name = "braitsch";
//CRAWLER AND PARSER
var Crawler = require("js-crawler");
var Parser = require("node-html-parser");
//firebase
const functions = require("firebase-functions");
var firebase = require("firebase");
const firebaseConfig = {
  secret: "db info",
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
let ref = database.ref("songs");

var data = {};

new Crawler().configure({ depth: 2 }).crawl(
  "http://www.tekstovi.net/",
  function onSuccess(page) {
    const root = Parser.parse(page.body);

    infoList = root.querySelectorAll(".lyricCapt");

    if (infoList.length > 1) {
      var author = String(infoList[0].firstChild.rawText);
      var song = String(infoList[1].firstChild.rawText);

      tekstList = root.querySelectorAll(".lyric");

      if (tekstList.length) {
        tekstList = tekstList.map((node) => {
          return node.text;
        });
        var tekst = tekstList.join("");
      }
      ref
        .child(
          crypto
            .createHash("md5")
            .update(song + author)
            .digest("hex")
        )
        .set({
          author,
          song,
          tekst,
        });
    }
  },
  null,
  function onAllFinished(crawledUrls) {
    console.log("DONE!!!");
  }
);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
