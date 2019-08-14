const fs = require("fs")
const csv = require("fast-csv")

var ws = fs.createWriteStream("my.csv")

csv.
  write([

    ["1","AQUA"],
    ["2","Neru"],
    ["3","Lulu"]

  ], {headers:true})
  .pipe(ws);
