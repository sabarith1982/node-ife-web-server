var mongoose = require('mongoose');

var LanguageSchema = new mongoose.Schema({
  textID: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  text_EN: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  text_CH: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  }
});

LanguageSchema.index({textID: 1},{unique: true});

var Language = mongoose.model('Language', LanguageSchema);


module.exports = {Language};
