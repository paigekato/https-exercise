module.exports = function getHTML (options, callback) {

  var https = require('https');
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
function printHTML(html) {
  console.log(html);
};


