const Service = require('../models/Service');

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    
    // Format the response to match the frontend structure
    const formattedServices = services.map(service => ({
      _id: service._id,
      title: service.title,
      description: service.description,
      image: service.image ? `${process.env.BASE_URL || ''}${service.image}` : null,
      icon: service.icon,
      points: service.points
    }));
    
    res.status(200).json({
      success: true,
      count: services.length,
      data: formattedServices
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single service
exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }
    
    // Format the response to match the frontend structure
    const formattedService = {
      _id: service._id,
      title: service.title,
      description: service.description,
      image: service.image ? `${process.env.BASE_URL || ''}${service.image}` : null,
      icon: service.icon,
      points: service.points
    };
    
    res.status(200).json({
      success: true,
      data: formattedService
    });
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new service
exports.createService = async (req, res) => {
  try {
    const serviceData = { ...req.body };
    
    // Ensure required fields are present
    if (!serviceData.title || !serviceData.description) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title and description'
      });
    }
    
    // If points is passed as a string, convert it to an array
    if (serviceData.points && typeof serviceData.points === 'string') {
      try {
        serviceData.points = JSON.parse(serviceData.points);
      } catch (e) {
        serviceData.points = serviceData.points.split(',').map(point => point.trim());
      }
    }
    
    // If file was uploaded, set the image path
    if (req.file) {
      serviceData.image = `/uploads/services/${req.file.filename}`;
    }
    
    const service = await Service.create(serviceData);
    
    // Format the response to match the frontend structure
    const formattedService = {
      _id: service._id,
      title: service.title,
      description: service.description,
      image: service.image ? `${process.env.BASE_URL || ''}${service.image}` : null,
      icon: service.icon,
      points: service.points
    };
    
    res.status(201).json({
      success: true,
      data: formattedService
    });
  } catch (error) {
    console.error('Error creating service:', error);
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

// Update service
exports.updateService = async (req, res) => {
  try {
    const serviceData = { ...req.body };
    
    // If points is passed as a string, convert it to an array
    if (serviceData.points && typeof serviceData.points === 'string') {
      try {
        serviceData.points = JSON.parse(serviceData.points);
      } catch (e) {
        serviceData.points = serviceData.points.split(',').map(point => point.trim());
      }
    }
    
    // If file was uploaded, set the image path
    if (req.file) {
      serviceData.image = `/uploads/services/${req.file.filename}`;
    }
    
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      serviceData,
      { new: true, runValidators: true }
    );
    
    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }
    
    // Format the response to match the frontend structure
    const formattedService = {
      _id: service._id,
      title: service.title,
      description: service.description,
      image: service.image ? `${process.env.BASE_URL || ''}${service.image}` : null,
      icon: service.icon,
      points: service.points
    };
    
    res.status(200).json({
      success: true,
      data: formattedService
    });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
    });
  }
};

// Delete service
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }
    
    await service.deleteOne();
    
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
