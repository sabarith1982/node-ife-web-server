var mongoose = require('mongoose');
var {Menu} = require('./menu');
var MenuItemSchema = new mongoose.Schema({
  menuitemID: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  menuID: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    ref: Menu
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

MenuItemSchema.index({menuitemID:1, menuID: -1},{unique: true});

var MenuItem = mongoose.model('MenuItem', MenuItemSchema);


module.exports = {MenuItem};
