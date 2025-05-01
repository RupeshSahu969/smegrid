const express = require('express');
const router = express.Router();
const serviceUpload = require('../middleware/serviceUploadMiddleware');
const { 
  getServices, 
  getService, 
  createService, 
  updateService, 
  deleteService 
} = require('../controllers/serviceController');

// Routes for /api/services
router.route('/')
  .get(getServices)
  .post(serviceUpload.single('image'), createService);

// Routes for /api/services/:id
router.route('/:id')
  .get(getService)
  .put(serviceUpload.single('image'), updateService)
  .delete(deleteService);

module.exports = router;
