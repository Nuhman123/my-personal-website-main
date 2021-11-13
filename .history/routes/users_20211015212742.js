var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('index')
});

router.get('/about', function(req, res, next) {
  res.render('about')
 });
 router.get('/condact', function(req, res, next) {
  res.render('condact')
 });

module.exports = router;
