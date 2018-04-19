
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.


var http = require("http");
var port1 = 7000;
var port2 = 7500;


var server1 = http.createServer(function (request, response){
    response.end("You is smart, you is kind, you is important");
});
var server2 = http.createServer(function (request, response){
    response.end("You is stupid");
});

//nice server
server1.listen(port1, function () {
console.log("port1 listening");
});

//mean server
server2.listen(port2, function () {
console.log("port2 listening");
});

