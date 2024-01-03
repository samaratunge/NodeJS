var mysql = require('mysql2');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'udara',
    password : 'udara'
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected !");
    con.query('create database employee', function(err,result){
        if(err) throw err;
        console.log('Database created.');
    });
});