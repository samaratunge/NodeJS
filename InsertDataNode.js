var mysql = require('mysql2');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'udara',
    password : 'udara',
    database : 'employee'
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Database Connected');
    var sql = "INSERT INTO Employee (id, EmpID, EmpName, EmpAddress) VALUES ?";
    var values = [[3, '2345', 'Kamal', 'Kandy'],
                  [4, '3456', 'Sunil', 'Chillaw'],
                  [5, '4567', 'Ranil', 'Jaffna']];

    conn.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});