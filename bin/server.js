var http = require('http');
http.createServer(function (request,response){
    response.writeHeader(200,{'Content-Type':'text/plain'});
    response.end('Hello world\n');
}).listen(8888);