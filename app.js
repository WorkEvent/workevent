const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

MongoClient.connect(uri, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  if ( !err){
    console.log('It Works !')
  }
});



