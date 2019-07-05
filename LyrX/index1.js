const fs = require("fs");
let data = fs.readFileSync("./lyrx-app-export.json");
let temp = JSON.parse(data);
console.log(Object.keys(temp.songs).length);

var fixed = {};
for (let key of Object.keys(temp.songs)) {
  obj = temp.songs[key];
  if (obj.author in fixed) fixed[obj.author][obj.song] = obj.tekst;
  else fixed[obj.author] = {};
}

fs.writeFile("./test.txt", "Hey there!", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

setInterval(() => {
  console.log(Object.keys(fixed).length);
}, 1000);

setTimeout(() => {
  fs.writeFile("./data.json", JSON.stringify(fixed), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}, 2000);
