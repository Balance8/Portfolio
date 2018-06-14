var express = require('express');
var router = express.Router();
var request = require('request');

const rootURL = 'https://jsonplaceholder.typicode.com/posts';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test 3' });
});



module.exports = router;
