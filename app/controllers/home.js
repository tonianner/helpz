var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

// INDEX
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Generator-Express MVC'
  });
});

// Helpz
router.get('/helpz', function (req, res, next) {
  res.redirect('helpz/index');
});
