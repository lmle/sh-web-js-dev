'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var root = path.normalize(__dirname);

var port = process.env.PORT || 3000;
app.listen(port);

app.route('/*').get(function(req, res) {
  res.sendFile(root + '/index.html');
});

console.log('Listening on port', port);