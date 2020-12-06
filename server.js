const express = require('express');
const path = require('path');

const app = express();

app.get('/' || '/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});


app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });