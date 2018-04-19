
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.


var http = require("http");
var port1 = 7000;
var port2 = 7500;


var server1 = http.createServer();
var server2 = http.createServer();

//nice server
server1.listen(port1, function () {
console.log("You is smart, you is kind, you is important");
});

//mean server
server2.listen(port2, function () {
console.log("you is stupid");
});

