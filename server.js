require('dotenv').config();
const express = require('express')
const app = express()
const http = require('http');
const cors = require('cors');


// set port from env
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'))

app.use(cors())
// for routes
app.use(require('./app/routes/route'))

module.exports = app // for testings





