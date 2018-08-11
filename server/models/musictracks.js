var mongoose = require('mongoose');

var MusicTracksSchema = new mongoose.Schema({
  mid: {
    type: Number,
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
  audioURL: {
    type: String,
    default: null
  },
  genres: {
    type: String,
    default: null
  }
});

MusicTracksSchema.index({mid: 1},{unique: true});

var MusicTracks = mongoose.model('MusicTracks', MusicTracksSchema);


module.exports = {MusicTracks};
