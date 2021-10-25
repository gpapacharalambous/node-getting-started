const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('New deployment is up for george!');
})

app.listen(8080, function () {
  console.log('Starting bah-bah-charlie-have-you-any-wool ...');
})
