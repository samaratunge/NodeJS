var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, 'Content-Type', 'text/html');
    res.write(("Hello World in upper case").toUpperCase());
    res.end();
}).listen(8080);