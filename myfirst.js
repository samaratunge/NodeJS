var http = require('http');
var dt = require('./udaradatemodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  
  res.write("The date time are currently = " + dt.myDateTime());
  res.write(req.url);
  res.end();
}).listen(8080);