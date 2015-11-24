var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
  title:        { type: String },
  description:  { type: String },
  duration:     { type: String },
  createdBy:    { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  createdOn:    { type: Date, default: Date.now }
});

var Service = mongoose.model('Service', serviceSchema);
module.exports = Service;

// var service1 = new Service({
//   title:        "I will help do this 1",
//   description:  "description 1",
//   duration:     "1 day",
//   createdBy:    "user 1"
// })

// var service2 = new Service({
//   title:        "I will help do this 2",
//   description:  "description 2",
//   duration:     "2 day",
//   createdBy:    "user 2"
// })

// service1.save(function(err) {
//   if (err) console.log(err);
//   console.log('Service1 created!');
// });

// service2.save(function(err) {
//   if (err) console.log(err);
//   console.log('Service2 created!');
// });