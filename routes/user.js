var express = require('express');
var router = express.Router();
const imagesHelpers=require('../helpers/images-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  imagesHelpers.getAllImages().then((images)=>{
    imagesHelpers.getAllStaticImages().then((staticImages)=>{
      imagesHelpers.getAllDainamicImages().then((dainamicImages)=>{
    console.log('image',images)
    res.render('users/index',{User:true,images,staticImages,dainamicImages})
  })
})
  })
});

router.get('/about', function(req, res, next) {
  res.render('users/about')
 });
 router.get('/contact', function(req, res, next) {
  res.render('users/contact')
 });
 router.get('/plans', function(req, res, next) {
  res.render('users/plans')
 });

module.exports = router;
