var http = require('http');

http.createServer(function (request,response) {
    response.writeHeader(200,{"Content-Type":"text/plain"});
    response.write("hello world!");
    response.end();
}).listen(8888);