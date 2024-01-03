var mysql = require('mysql2');

var conn = mysql.createConnection({
    host :'localhost',
    user : 'udara',
    password : 'udara',
    database : 'employee'
});
conn.connect(function (err){
    if(err) throw err;
    console.log('Database Connected');
    var sql = "select * from employee";
    conn.query(sql,function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});