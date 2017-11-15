
var http = require("http");

var PORTone = 7000;
var PORTtwo = 7500;

function handleRequestOne(request, response) {

  response.end("You are having a terrific hair day");
}
function handleRequestTwo(request, response) {

  response.end("You look like you need some sleep");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTone, function() {
  console.log("Server listening on: http://localhost:" + PORTone);
})

serverTwo.listen(PORTtwo, function() {
  console.log("Server listening on: http://localhost:" + PORTtwo);
});