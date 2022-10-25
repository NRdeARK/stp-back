var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Buddy", address: "0223" };
  dbo.collection("admin").insertOne(myobj, function(err, res) {
    console.log(res.insertedCount)
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});