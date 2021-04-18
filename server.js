const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = name => {
    res.sendFile(path.join(__dirname, `/views/${name}.html`));
  };
  next();
});

app.get('/', (req, res) => {
  res.show('index');
});

app.get('/about', (req, res) => {
  res.show('about');
});

app.get('/contact', (req, res) => {
  res.show('contact');
});

app.get('/info', (req, res) => {
  res.show('info');
});

app.get('/history', (req, res) => {
  res.show('history');
});

app.use((req, res) => {
  res.status(404).send('<h1>404 - page not found...</h1>');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000: http://localhost:8000');
});
