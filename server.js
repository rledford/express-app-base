//load dotenv
require('dotenv').load();

var express = require('./config/express');

var app = express();

var port = process.env.PORT || 3000;

console.log('listening on port: '+port);
app.listen(port);
