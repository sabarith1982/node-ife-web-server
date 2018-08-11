var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  mid: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1
  },
  posterImageURL: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  },
  synopsisImageURL: {
    type: String,
    default: null,
    trim: true,
    minlength: 1
  },
  videoURL: {
    type: String,
    trim: true,
    default: null,
    minlength: 1
  },
  title: {
    type: String,
    default: null,
    trim: true,
    minlength: 1
  },
  year: {
    type: Number,
    default: null
  },
  rating: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  audiotracks: {
    type: String,
    default: null
  },
  closedcaption: {
    type: String,
    default: null
  },
  subtitles: {
    type: String,
    default: null
  },
  trailormid: {
    type: Number,
    default: null
  },
  duration: {
    type: Number,
    default: null
  },
  director: {
    type: String,
    default: null
  },
  cast: {
    type: String,
    default: null
  },
  userrating: {
    type: String,
    default: null
  },
  genres: {
    type: String,
    default: null
  }

});

MovieSchema.index({mid:1},{unique: true});

var Movie = mongoose.model('Movie', MovieSchema);


module.exports = {Movie};
