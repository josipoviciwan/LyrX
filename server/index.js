var Crawler = require("js-crawler");
var Parser = require("node-html-parser");
var fs = require("fs");

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
    fs.writeFile("./test", JSON.stringify(data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }
);
