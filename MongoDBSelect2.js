var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/udara";

 var client = new MongoClient(url);

 client.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("udara");
  dbo.collection("employee").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});