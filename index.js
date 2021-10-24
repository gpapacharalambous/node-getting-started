const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from hellas-space-academy');
})

app.listen(8080, function () {
  console.log('Starting hellas-space-academy ...');
})
