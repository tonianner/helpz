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
      res.json({message: 'Could not find any Services b/c: ' + err});
    } else {
      res.json(services);
    }
  });
})

// SHOW
router.get('/api/helpz/:id', function (req, res){
  Service.findById(req.params.id, function (err, service){
    if (err) {
      res.json({message: 'Could not find Service b/c:' + err});
    } else {
      res.send({service: service});
    }
  });
})

// CREATE
router.post('/api/helpz', authenticatedUser, function (req, res){
  // get user params to save in createdBy.
  var serviceParams = req.body.service;
  serviceParams.createdBy = req.user._id;

  Service.create(req.body.service, function (err, service){
    if (err) {
      res.status(422).json({message: 'Could not create Service b/c:' + err});
    } else {
      res.send(service);
    }
  });
})

//UPDATE
router.put('/api/helpz/:id', authenticatedUser, function (req, res) {
  var currentUser = req.user.id;

  Service.findById(req.params.id, function (err, service){

    if(err) res.status(422).json({message: 'Could not find Services b/c:' + err});

    if (currentUser !=  service.createdBy){
      res.json({message: "You are not the Seller of this post"})
    } else {
      if(req.body.service.title) service.title = req.body.service.title;
      if(req.body.service.description) service.description = req.body.service.description;
      if(req.body.service.duration) service.duration = req.body.service.duration;

      service.save(function(){
      if (err) res.json({messsage: 'Could not update Service b/c:' + error});
        res.json({message: "service updated!"});
      })
    }
  })
});

// DELETE
router.delete('/api/helpz/:id', authenticatedUser,function (req, res, next) {

  var currentUser = req.user.id;

  Service.findById(req.params.id, function (err , service){
    if (err) res.json({message: 'Could not delete Service b/c:' + err})
    if (currentUser !=  service.createdBy) {
      res.json({message: "You are not the creator!"});
    } else {
      service.remove(function(err){
      if (err) res.json({message: err})
      res.json({message: "Serivce has been removed"})
      });
    }
  })
})
