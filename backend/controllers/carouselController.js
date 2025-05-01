const Carousel = require('../models/Carousel');

// Get all carousel slides
exports.getCarouselSlides = async (req, res) => {
  try {
    const slides = await Carousel.find().sort({ order: 1 });
    res.status(200).json({
      success: true,
      count: slides.length,
      data: slides
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single carousel slide
exports.getCarouselSlide = async (req, res) => {
  try {
    const slide = await Carousel.findById(req.params.id);
    
    if (!slide) {
      return res.status(404).json({
        success: false,
        error: 'Carousel slide not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: slide
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new carousel slide
exports.createCarouselSlide = async (req, res) => {
  try {
    const slideData = { ...req.body };
    
    // Check if we're handling an image or video upload
    if (req.file) {
      const routePath = req.route.path;
      
      if (routePath === '/upload/image') {
        slideData.img = `/uploads/carousel/${req.file.filename}`;
        slideData.mediaType = 'image';
        slideData.video = null;
      } else if (routePath === '/upload/video') {
        slideData.video = `/uploads/videos/${req.file.filename}`;
        slideData.mediaType = 'video';
        slideData.img = null;
      }
    }
    
    const slide = await Carousel.create(slideData);
    
    res.status(201).json({
      success: true,
      data: slide
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// Update carousel slide
exports.updateCarouselSlide = async (req, res) => {
  try {
    const slideData = { ...req.body };
    
    // Check if we're handling an image or video update
    if (req.file) {
      const routePath = req.route.path;
      
      if (routePath === '/:id/update/image') {
        slideData.img = `/uploads/carousel/${req.file.filename}`;
        slideData.mediaType = 'image';
        slideData.video = null;
      } else if (routePath === '/:id/update/video') {
        slideData.video = `/uploads/videos/${req.file.filename}`;
        slideData.mediaType = 'video';
        slideData.img = null;
      }
    }
    
    const slide = await Carousel.findByIdAndUpdate(
      req.params.id,
      slideData,
      { new: true, runValidators: true }
    );
    
    if (!slide) {
      return res.status(404).json({
        success: false,
        error: 'Carousel slide not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: slide
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete carousel slide
exports.deleteCarouselSlide = async (req, res) => {
  try {
    const slide = await Carousel.findById(req.params.id);
    
    if (!slide) {
      return res.status(404).json({
        success: false,
        error: 'Carousel slide not found'
      });
    }
    
    await slide.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
