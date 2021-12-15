const express = require('express')
const app = express()
const port = 3000
const path = require('path');



const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/inscription.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/connexion.html'));
});

app.get('/afterwork', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/afterwork.html'));
});

app.get('/poll', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/poll.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.use


MongoClient.connect(uri, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  let dbo = db.db("devlab15");


  if ( !err){
    console.log('It Works !')
  }

  dbo.collection("event").find({}).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close()

  });



});



