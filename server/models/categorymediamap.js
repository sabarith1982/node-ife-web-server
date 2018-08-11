var mongoose = require('mongoose');
var {Category} = require('./category');

var CategoryMediaMapSchema = new mongoose.Schema({
  cid: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
    ref: Category
  },
  mid: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  }
});

var CategoryMediaMap = mongoose.model('CategoryMediaMap', CategoryMediaMapSchema);


module.exports = {CategoryMediaMap};
