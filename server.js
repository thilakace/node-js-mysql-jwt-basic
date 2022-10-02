require('dotenv').config();
const express = require('express')
const app = express()
const http = require('http');


// set port from env
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'))

// for routes
app.use(require('./app/routes'))

module.exports = app // for testing



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

