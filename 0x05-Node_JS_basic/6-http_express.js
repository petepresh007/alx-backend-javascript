const express = require('express');

const app = express('');

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('app listening on port: 1245');
});

module.exports = app;
