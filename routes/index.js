var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {layout: false});
});

router.get('/dashboard', function (req, res) {
  res.render('dashboard');
});

router.get('/cars', function (req, res) {
  res.render('cars');
});

router.get('/carsAdd', function (req, res) {
  res.render('carsAdd');
});



module.exports = router;
