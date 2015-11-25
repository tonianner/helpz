var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

// INDEX
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/services', function (req, res, next) {
  res.render('services');
});

router.get('/services/new', function (req, res, next) {
  res.render('services/new');
});

router.get('/services/:id/edit', function (req, res, next) {
  var serviceId = req.params.id
  res.render('services/edit');
});

router.get('/services/:id', function (req, res, next) {
  res.render('services/show');
});

