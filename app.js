//require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

//mongodb configs
var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'chapters';

//We need to insert these chapters into mongoDB
var chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
},{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}];

MongoClient.connect(connectionUrl, function(err, db) {

    if(!err) {
       console.log("Connected correctly to server ");
    } else {
      console.log("Some error was encountered!" + err );
    }
 

  // Get some collection
  var collection = db.collection(sampleCollection);

  collection.insert(chapters,function(error,result){
    //here result will contain an array of records inserted
    if(!error) {
      console.log("Success :"+result.ops.length+" chapters inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  });
});