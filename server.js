'use strict';

var http = require('http');
var express = require('express');
var sendhub = require('sendhub');

var app = express();
var port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Listening on port', port);