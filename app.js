var express = require('express');
var app = express();
var nunjucks = require('nunjucks');


var locals = {
  title: 'An example',
  people: [
        { name: 'Us'},
        { name: 'Them'},
        { name: 'The Others'}
  ]
};

nunjucks.configure('views', {noCache: true});

// nunjucks.configure('views');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.get('/', function(req, res){
  console.log("inside nunjucks render");
  res.render('index.html', locals, function(err, output){
    res.send(output);
  })
});



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
