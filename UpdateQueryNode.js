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
    var sql = "Update employee set EmpAddress = 'Balummahara' where EmpID = '1361'";
    conn.query(sql,function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});