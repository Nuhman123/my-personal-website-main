var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admi', function(req, res, next) {
  res.render('index');
});

module.exports = router;
