const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>My first server!</h1>');
});

app.listen(8000, () => {
  console.log('Server is running: http://localhost:8000');
});