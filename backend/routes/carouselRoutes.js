const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const videoUpload = require('../middleware/videoUploadMiddleware');
const { 
  getCarouselSlides, 
  getCarouselSlide, 
  createCarouselSlide, 
  updateCarouselSlide, 
  deleteCarouselSlide 
} = require('../controllers/carouselController');

// Routes for /api/carousel
router.route('/')
  .get(getCarouselSlides);

// Route for image upload
router.route('/upload/image')
  .post(upload.single('image'), createCarouselSlide);

// Route for video upload
router.route('/upload/video')
  .post(videoUpload.single('video'), createCarouselSlide);

// Routes for /api/carousel/:id
router.route('/:id')
  .get(getCarouselSlide)
  .delete(deleteCarouselSlide);

// Route for updating with image
router.route('/:id/update/image')
  .put(upload.single('image'), updateCarouselSlide);

// Route for updating with video
router.route('/:id/update/video')
  .put(videoUpload.single('video'), updateCarouselSlide);

module.exports = router;
