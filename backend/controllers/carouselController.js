const Carousel = require('../models/Carousel');

// Get all carousel slides
exports.getCarouselSlides = async (req, res) => {
  try {
    // Find all active slides and sort by order
    const slides = await Carousel.find({ isActive: true }).sort({ order: 1 });
    
    // Format the response to match the frontend structure
    const formattedSlides = slides.map(slide => ({
      title: slide.title,
      description: slide.description,
      cta1: slide.cta1,
      img: slide.mediaType === 'image' ? 
        `${process.env.BASE_URL || ''}${slide.img}` : 
        null,
      video: slide.mediaType === 'video' ? 
        `${process.env.BASE_URL || ''}${slide.video}` : 
        null,
      mediaType: slide.mediaType,
      _id: slide._id
    }));
    
    res.status(200).json({
      success: true,
      count: slides.length,
      data: formattedSlides
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
    
    // Format the response to match the frontend structure
    const formattedSlide = {
      title: slide.title,
      description: slide.description,
      cta1: slide.cta1,
      img: slide.mediaType === 'image' ? 
        `${process.env.BASE_URL || ''}${slide.img}` : 
        null,
      video: slide.mediaType === 'video' ? 
        `${process.env.BASE_URL || ''}${slide.video}` : 
        null,
      mediaType: slide.mediaType,
      order: slide.order,
      isActive: slide.isActive,
      _id: slide._id
    };
    
    res.status(200).json({
      success: true,
      data: formattedSlide
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
    
    // Ensure required fields are present
    if (!slideData.title || !slideData.description || !slideData.cta1) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title, description, and call-to-action text'
      });
    }
    
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
    } else {
      // If no file is uploaded, ensure we have a default mediaType
      if (!slideData.mediaType) {
        slideData.mediaType = 'image';
      }
    }
    
    // Create the slide
    const slide = await Carousel.create(slideData);
    
    // Format the response to match the frontend structure
    const formattedSlide = {
      title: slide.title,
      description: slide.description,
      cta1: slide.cta1,
      img: slide.mediaType === 'image' ? 
        `${process.env.BASE_URL || ''}${slide.img}` : 
        null,
      video: slide.mediaType === 'video' ? 
        `${process.env.BASE_URL || ''}${slide.video}` : 
        null,
      mediaType: slide.mediaType,
      order: slide.order,
      isActive: slide.isActive,
      _id: slide._id
    };
    
    res.status(201).json({
      success: true,
      data: formattedSlide
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
        error: 'Server Error',
        message: error.message
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
      
      if (routePath.includes('/update/image')) {
        slideData.img = `/uploads/carousel/${req.file.filename}`;
        slideData.mediaType = 'image';
        slideData.video = null;
      } else if (routePath.includes('/update/video')) {
        slideData.video = `/uploads/videos/${req.file.filename}`;
        slideData.mediaType = 'video';
        slideData.img = null;
      }
    }
    
    // Update the slide
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
    
    // Format the response to match the frontend structure
    const formattedSlide = {
      title: slide.title,
      description: slide.description,
      cta1: slide.cta1,
      img: slide.mediaType === 'image' ? 
        `${process.env.BASE_URL || ''}${slide.img}` : 
        null,
      video: slide.mediaType === 'video' ? 
        `${process.env.BASE_URL || ''}${slide.video}` : 
        null,
      mediaType: slide.mediaType,
      order: slide.order,
      isActive: slide.isActive,
      _id: slide._id
    };
    
    res.status(200).json({
      success: true,
      data: formattedSlide
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
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
