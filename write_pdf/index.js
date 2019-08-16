const pdf = require("pdfkit")
const fs = require("fs")

var myPdf = new pdf

myPdf.pipe(fs.createWriteStream("node.pdf"))

myPdf.font("Times-Roman")
      .fontSize(48)
      .text("NodeJS PDF Document", 100, 100)

myPdf.end()
