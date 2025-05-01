const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  points: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
