//CRAWLER AND PARSER
var Crawler = require("js-crawler");
var Parser = require("node-html-parser");
var fs = require("fs");
//SERVER SIDE
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//SAVING DATA
var data = {};

new Crawler().configure({ depth: 2 }).crawl(
  "http://www.tekstovi.net/",
  function onSuccess(page) {
    const root = Parser.parse(page.body);

    infoList = root.querySelectorAll(".lyricCapt");

    if (infoList.length > 1) {
      var author = infoList[0].firstChild.rawText;
      var song = infoList[1].firstChild.rawText;
      data[author] = {};
      console.log(author, "-", song);

      tekstList = root.querySelectorAll(".lyric");

      if (tekstList.length) {
        tekstList = tekstList.map(node => {
          return node.text;
        });
        var tekst = tekstList.join("");
      }
      data[author][song] = tekst;
    }
  },
  null,
  function onAllFinished(crawledUrls) {
    console.log("All crawling finished");
    fs.writeFile("../client/src/data.json", JSON.stringify(data), function(
      err
    ) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }
);

app.get('/express_backend', (req, res) => {
  console.log("Zatrazio sam ");
  res.send({ express: data });

});

app.listen(port, () => console.log(`Listening on port ${port}`));