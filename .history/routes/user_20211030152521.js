var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('users/index',{User:true})
});

router.get('/about', function(req, res, next) {
  res.render('users/about')
 });
 router.get('/contact', function(req, res, next) {
  res.render('users/contact')
 });
 router.get('/services', function(req, res, next) {
  res.render('uservices')
 });

module.exports = router;
