var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('usrsindex')
});

router.get('/about', function(req, res, next) {
  res.render('about')
 });
 router.get('/contact', function(req, res, next) {
  res.render('contact')
 });
 router.get('/services', function(req, res, next) {
  res.render('services')
 });

module.exports = router;
