require('dotenv').config();
const express = require('express')
const app = express()
const http = require('http');


// set port from env
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'))

// for routes
app.use(require('./app/routes/route'))

module.exports = app // for testings





