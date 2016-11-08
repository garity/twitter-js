var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var volleyball = require('volleyball');
var routes = require('./routes/');
var bodyParser = require('bod-parser');

//view configuration, not part of the pipeline/app it is express agnostic
nunjucks.configure('views', {noCache: true});
//when giving html files to res.render
app.engine('html', nunjucks.render);
//have res.render work with html files
app.set('view engine', 'html');
//end of view configuration

// #1
app.use(volleyball);

//#2
app.use(express.static(__dirname + '/public'));

//#3 if it is a put or post req w urlencoded (or JSON) it will take the payload and put it on req.body
app.use(bodyParser.urlencoded());

// #4 all requests get sent to the routes folder
app.use('/', routes);

//set up server at port 300
app.listen(3000, function() {
  console.log('listening...');
});

//error handling middleware
app.use(function(error, req, res, next) {
  console.log(error);
  res.send('uh oh');
});

// //all requests get sent here first logging out  the Verb, url & status code
// app.use('/', function(req, res, next) {
//   console.log(req.method);
//   console.log(req.url);
//   // res.sendStatus(200);
//   console.log(res.statusCode);
//   next();
// });


//configure nunjucks to render html templates
// var locals = {
//   title: 'An example',
//   people: [
//         { name: 'Us'},
//         { name: 'Them'},
//         { name: 'The Others'}
//   ]
// };

// app.get('/', function(req, res){
//   console.log("inside nunjucks render");
//   res.render('index.html', locals, function(err, output){
//     res.send(output);
//   })
// });