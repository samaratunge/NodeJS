var mysql = require('mysql2');

var connect = mysql.createConnection({
    host : 'localhost',
    user : 'udara',
    password : 'udara',
    database : 'employee'
});

connect.connect(function(err){
    if(err) throw err;
    console.log('Connected to database !!!');
    var sql = 'ALTER TABLE Employee ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    connect.query(sql,function(err, result){
        if(err) throw err;
        console.log('Table Altered');
    });
});