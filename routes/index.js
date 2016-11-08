var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res, next){
	var tweets = tweetBank.list();
	res.render('index', {tweets: tweets});
});

module.exports = router;