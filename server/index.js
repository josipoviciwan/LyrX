var Crawler = require("js-crawler");
var Parser = require("node-html-parser");

var data = {};

new Crawler()
  .configure({ depth: 2 })
  .crawl("http://www.tekstovi.net/", function onSuccess(page) {
    const root = Parser.parse(page.body);
    infoList = root.querySelectorAll(".lyricCapt");

    if (infoList.length) console.log(infoList[0].firstChild.rawText);
  });
