var mongoose = require('mongoose');
var moment = require('moment');

var serviceSchema = new mongoose.Schema({
  title:        { type: String },
  description:  { type: String },
  duration:     { type: String },
  createdBy:    { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  createdOn:    { type: Date, default: Date.now }
});

serviceSchema.methods.showDate = function(){
  var dateA = moment().subtract('days', this.createdOn);
  return dateA.fromNow();
}

var Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
