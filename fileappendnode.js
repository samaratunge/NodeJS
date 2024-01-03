var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.appendFile('Udara.txt','Hello Udara Content !!!',function(err){
        if(err) throw err;
        console.log("Saved.");
    });
}).listen(8080);