var https = require('https');

function getHTML(options, callback) {
  var output = ' ';

  https.get(options, function(response) {

    response.setEncoding("utf8");
    response.on("data", function(data) {
      output += data;
    });
    response.on("end", function() {
      console.log(output);
    });

  })
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML(html) {
  console.log(html);
};

getHTML(requestOptions, printHTML);
