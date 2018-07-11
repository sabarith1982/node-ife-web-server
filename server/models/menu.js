var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
  menuID: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  iconURL: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  },
  type: {
    type: String,
    default: null
  },
  targetURL: {
    type: String,
    default: null
  }
});

var Menu = mongoose.model('Menu', MenuSchema);


module.exports = {Menu};
