var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

// INDEX
router.get('/', function (req, res, next) {
  res.render('index', {
    // title: 'Generator-Express MVC'
  });
});

router.get('/services', function (req, res, next) {
  res.render('services/sources.ejs', { message: req.flash('signupMessage') });
});

