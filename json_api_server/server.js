var express = require('express');
var app = express();
var port = 3000;

app.use('/', function(req, res){
  res.send({
    people: [
      {
        name: "John Smith", 
        age: "700"
      },
      {
        name: "Sarah Jane Smith",
        age: "60"
      },
      {
        name: "Billy Kid",
        age: "15"
      },
      {
        name: "Nancy Tatooine",
        age: "10"
      }
    ]
  })
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server is running and listening at %s:%s', host, port);
});
