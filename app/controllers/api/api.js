var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var Service = require("../../models/service");

module.exports = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.json({message: "Please Login"});
  }
}

router.get('/secret', authenticatedUser, function (req, res, next) {
  res.json({message: "secret"});
});

// INDEX
router.get('/api/helpz', function (req, res){
  Service.find({}, function (err, services) {
    if (err) {
      res.json({message: err});
    } else {
      res.send(services);
    }
  });
})

// SHOW
router.get('/api/helpz/:id', function (req, res){
  Service.findById(req.params.id, function (err, service){
    if (err) {
       res.json({message: err});
    } else {
      res.send(service);
    }
  });
})

// CREATE
router.post('/api/helpz', authenticatedUser, function (req, res){
  Service.create(req.body.service, function (err, service){
    if (err) {
      res.json({message: err});
    } else {
      res.json({message: "Service created"});
    }
  });
})

//UPDATE
router.put('/api/helpz/:id', authenticatedUser, function (req, res) {
  Service.findByIdAndUpdate(req.params.id, req.body.service, function (err, service){
    if (err){
      res.json({message: err});
    } else {
      res.json({message: "service updated!"});
    }
  })
});

// DELETE
router.get('/api/helpz/:id/delete', authenticatedUser, function (req, res) {
  Service.findByIdAndRemove(req.params.id, function (err, service) {
     console.log(req.params)
     if (err) {
        res.json({message: err})
     } else {
      res.json({message: 'Succesfully deleted'})
     }
  })
});
