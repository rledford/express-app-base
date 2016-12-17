//load dotenv
require('dotenv').load();

var express = require('./config/express'),
  mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();

var port = process.env.PORT || 3000;

console.log('listening on port: '+port);
app.listen(port);
