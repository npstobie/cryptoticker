var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 3000,
    autobahn = require('autobahn'),
    wsuri = "wss://api.poloniex.com",
    connection = new autobahn.Connection({
      url: wsuri,
      realm: "realm1"
    }),
    onopen = require('./apicalls/on-open.js'),
    onclose = require('./apicalls/on-close.js');

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'app')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'app', 'js', 'client', 'index.html'));
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

connection.onopen = onopen;
 
connection.onclose = onclose;
                       
connection.open();
