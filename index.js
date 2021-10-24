const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from spaceX!');
})

app.listen(8080, function () {
  console.log('Starting hellas-space-x ...');
})
