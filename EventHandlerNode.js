var http = require('http');
var events = require('events');
var eventEmmiter = new events.EventEmitter();

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var myEventHandler = function (){
        res.write('I hear a Scream!!!');
    };
    eventEmmiter.on('scream', myEventHandler);
    eventEmmiter.emit('scream');
    res.end();
}).listen(8080);