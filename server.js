var express = require('express');
var app = express();
var path    = require("path");

app.use('/build',express.static(__dirname + '/build/'));

// handler for the /user/:id path, which renders a special page
app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname+'/src/app/index.html'));
});

//-----------------------------------------
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('[Example] Listening at http://%s:%s', host, port);
});