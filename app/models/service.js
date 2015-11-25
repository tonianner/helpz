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
