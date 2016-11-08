const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

// #4a
router.get('/', function(req, res, next){
	const theTweets = tweetBank.list();
	res.render('index', {tweets: theTweets});
});

router.get('/users/:userName', function(req, res) {
  const userName = req.params.userName;
  const theTweets = tweetBank.find({name: userName});
  res.render( 'index', {tweets: theTweets } );
});

router.get('/tweets/:id', function(req, res){
	const tweetId = parseInt(req.params.id);
	const theTweets = tweetBank.find({id: tweetId});
	res.render('index', {tweets: theTweets});
});

module.exports = router;

//Alt option to  express.static (in app.js) is to hard code in the path to the file:

// var path = require('path');

//used path Node module in order to make a relative path
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


