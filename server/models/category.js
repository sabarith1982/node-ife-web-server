var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  cid: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1
  },
  name: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  }
});

CategorySchema.index({cid:1},{unique: true});

var Category = mongoose.model('Category', CategorySchema);


module.exports = {Category};
