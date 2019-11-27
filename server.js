var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/html; cherset=utf-8"});
    response.write("<h1>Hello Wokkkkkrd</h1>");
    response.end();
});

server.listen(3000);