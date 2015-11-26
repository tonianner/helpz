var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Service  = require('../models/service')

module.exports = function (app) {
  app.use('/', router);
};


function authenticatedUser(req, res, next){
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    console.log("authenticated")
    return next();
  } else {
    console.log("not authenticated")
    return res.status(401).redirect('/signin');
  }
}

// INDEX
router.get('/', function (req, res, next) {
  res.render('index');
});

// List services
router.get('/services', function (req, res, next) {
  res.render('services');
});

// Sort services

// Create new service
router.get('/services/new', authenticatedUser, function (req, res, next) {
  res.render('services/new');
});

// Edit service
router.get('/services/:id/edit', authenticatedUser, function (req, res, next) {
  res.render('services/edit');
});

 // Show one service
router.get('/services/:id', function (req, res, next) {
  res.render('services/show');
});
