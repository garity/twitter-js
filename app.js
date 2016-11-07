var express = require('express');
var app = express();

app.use('/', function(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  // res.sendStatus(200);
  console.log(res.statusCode);
  next();
});

app.get('/', function(req, res) {
  res.send('welcome');
});

app.get('/news', function(req,res) {
  res.send('welcome news et al');
});

app.listen(3000, function() {
  console.log('listening...');
});











app.use(function(error, req, res, next) {
  console.log(error);
  res.send('uh oh');
});
