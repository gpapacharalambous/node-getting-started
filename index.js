const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Yes sir, Yes sir, three bags full!');
})

app.listen(8080, function () {
  console.log('Starting bah-bah-charlie-have-you-any-wool ...');
})
