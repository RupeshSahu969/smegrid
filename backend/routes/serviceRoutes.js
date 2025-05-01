const express = require('express');
const router = express.Router();
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
  .post(createService);

// Routes for /api/services/:id
router.route('/:id')
  .get(getService)
  .put(updateService)
  .delete(deleteService);

module.exports = router;
