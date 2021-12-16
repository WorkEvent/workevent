const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/inscription.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});




MongoClient.connect(uri, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  let dbo = db.db("devlab15");

  if ( !err){
    console.log('It Works !')
  }

  app.use(bodyParser.urlencoded({extended : false }));
  app.use(bodyParser.json());



  dbo.collection("event").find({}).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);

  });





});



