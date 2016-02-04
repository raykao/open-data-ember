var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');

app.use(cors());

app.use('/people', function(req, res){
  res.send({
    people: [
      {
        id: 1,
        name: "John Smith", 
        age: 700
      },
      {
        id: 2,
        name: "Sarah Jane Smith",
        age: 60
      },
      {
        id: 3,
        name: "Billy Kid",
        age: 15
      },
      {
        id: 4,
        name: "Nancy Tatooine",
        age: 10
      }
    ]
  })
});

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server is running and listening at %s:%s', host, port);
});
