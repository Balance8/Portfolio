var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function (req, res) {
  request(
    'https://jsonplaceholder.typicode.com/posts',
    function (err, response, body) {
      res.render('posts', { title: 'Posts', postsData: JSON.parse(body) });
    }
  );
});


module.exports = router;
