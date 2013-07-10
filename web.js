var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index = fs.readFileSync('index.html');

var indexstring = buf.toString('utf8', 0, 'index');

app.get('/', function(request, response) {
  response.send(indexstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});