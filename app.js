var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var routes = require('./routes/');

//all requests get sent to the routes folder
app.use('/', routes);

//all requests get sent here first logging out  the Verb, url & status code
app.use('/', function(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  // res.sendStatus(200);
  console.log(res.statusCode);
  next();
});

//configure nunjucks to render html templates
var locals = {
  title: 'An example',
  people: [
        { name: 'Us'},
        { name: 'Them'},
        { name: 'The Others'}
  ]
};

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.get('/', function(req, res){
  console.log("inside nunjucks render");
  res.render('index.html', locals, function(err, output){
    res.send(output);
  })
});



//set up server at port 300
app.listen(3000, function() {
  console.log('listening...');
});

//error handling middleware
app.use(function(error, req, res, next) {
  console.log(error);
  res.send('uh oh');
});
