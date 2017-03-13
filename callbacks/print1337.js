var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
function password(html) {
  var output = "";

  for (var i = 0; i < html.length; i++) {
    var letter = html[i];
    if(letter == "a") { //4
      letter = 4;
    } else if (letter == "e") { //3
      letter = 3;
    } else if (letter == "o") { //0
      letter = 0;
    } else if (letter == "l") { //1
      letter = 1;
    }
    output += letter;
  }
  console.log(output);

}

getHTML(requestOptions, password);