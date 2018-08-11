var mongoose = require('mongoose');

var MusicSchema = new mongoose.Schema({
  listid: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  imageURL: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  },
  type: {
    type: String,
    default: null
  },
  artist: {
    type: String,
    default: null
  },
  year: {
    type: String,
    default: null
  },
  duration: {
    type: String,
    default: null
  },
  userrating: {
    type: Number,
    default: null
  },
  genres: {
    type: String,
    default: null
  }
});

MusicSchema.index({listid: 1},{unique: true});

var Music = mongoose.model('Music', MusicSchema);


module.exports = {Music};
