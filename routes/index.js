var path = require('path');
var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res, next){
	var tweets = tweetBank.list();
	res.render('index', {tweets: tweets});
});

router.use(express.static('public'));

router.get('/users/:name', function(req, res) {
  var name = req.params.name;

  var list = tweetBank.find({name: name} );

  var tweets = list;
  res.render( 'index', { tweets: tweets } );
});

//dl-ed npm path in order to do above alternatively
// router.get('/stylesheets/style.css', function(req, res, next) {
// 	res.sendFile(path.resolve(__dirname + '/../public/stylesheets/style.css'), function (err) {
// 		if (err) {
// 			console.log(err);
// 			res.status(err.status).end();
// 		}
// 		else {
// 			console.log('Sent:', fileName);
// 		}
// 	});
// });


module.exports = router;
