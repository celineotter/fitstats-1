 'use strict';
//
// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;
//
// var DailyDataSchema = new Schema({
//   'date': ;
//   'data': ;
//   'user_id': Schema.ObjectId
// });
//

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FitnessDataSchema = new Schema({
  'date': String,
  'userId': Schema.ObjectId,
  'weight': Number,
  'bf': Number,
  'hr': Number,
  'bps': Number,
  'bpd': Number,
  'calories': Number,
  'protein': Number,
  'carbs': Number,
  'fat': Number
});

// FitnessDataSchema
// 	.pre('save', function(next) {
// 		next();
// 	})

module.exports = mongoose.model('FitnessData', FitnessDataSchema);
