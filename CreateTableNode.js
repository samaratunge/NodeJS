var mysql = require('mysql2');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'udara',
    password : 'udara',
    database : 'employee'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('Database Connected');
    var sql = "CREATE TABLE Employee (EmpID varchar(10),  EmpName varchar(20), EmpAddress varchar(30))";
    connection.query(sql, function(err, result){
        if(err) throw err;
        console.log('Table Employee Created.');
    });
});
