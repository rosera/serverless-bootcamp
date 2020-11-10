const fs = require('fs');
const pdfparse = require('pdf-parse');

const pdfInputFilename = fs.readFileSync('test2.pdf');

// Get the PDF information
pdfparse(pdfInputFilename).then(function (data) {
  console.log(data.numpages);
  console.log(data.info);
  console.log(data.text);
})

