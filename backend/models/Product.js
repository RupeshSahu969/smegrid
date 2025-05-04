const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  image: {
    type: String,
    default: null
  },
  details: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);
