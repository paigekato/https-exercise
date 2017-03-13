
var https = require('https');


function getAndPrintHTMLChunks() {
  var output = ' ';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {
    console.log("[--DATA OF LENGTH " + data.length + "--]" + "\n");
    console.log(data.toString());
     })
    response.on("end", function() {
    console.log("Complete");
    });
  });
}

getAndPrintHTMLChunks();






