var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'app')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'app', 'index.html'));
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});