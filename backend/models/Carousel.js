const mongoose = require('mongoose');

const CarouselSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  cta1: {
    type: String,
    required: [true, 'Please add a call to action text'],
    trim: true
  },
  img: {
    type: String,
    trim: true
  },
  video: {
    type: String,
    trim: true
  },
  mediaType: {
    type: String,
    enum: ['image', 'video'],
    default: 'image'
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Carousel', CarouselSchema);
