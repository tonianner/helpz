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

// Delete
// router.get('/service/:id/delete', authenticatedUser,function (req, res, next) {

//   var currentUser = req.user.id;
//   var paramsId = req.params.id
//   console.log(req.params.id)

//   Service.findById(paramsId, function (err , service){
//     if (err) res.status(422).json({message: 'Could not delete Service b/c:' + err})

//     if (!service.createdBy) {
//       res.status(403).json({message: "You are not the creator!"});
//     } else {
//       service.remove(function(err){
//         if (err) {
//           res.status(422).json({message: 'Could not remove Service b/c:' + err})
//         } else {
//           res.status(200).render('services')
//         }
//       });
//     }
//   })
// })
