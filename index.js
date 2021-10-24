const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello world from GP!');
})

app.listen(8080, function () {
  console.log('Starting hellas-world server ...');
})
