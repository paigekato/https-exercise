var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {
  var output = ' ';

  https.get(options, function(response) {

    response.setEncoding("utf8");
    response.on("data", function(data) {
      output += data;
    });
    response.on("end", function(){
      console.log(output);
    });
  })
};

getAndPrintHTML(requestOptions);