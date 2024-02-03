var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
  next();
});

router.get('/about', function(req, res, next) {
  res.render('about.ejs');
  next();
});

router.get('/work', function(req, res, next) {
  res.render('work.ejs');
  next();
});

router.get('/category', function(req, res, next) {
  res.render('category.ejs');
  next();
});

module.exports = router;
