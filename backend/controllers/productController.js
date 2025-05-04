const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true }).sort({ order: 1 });
    
    // Format the response to match the frontend structure
    const formattedProducts = products.map(product => ({
      id: product._id,
      category: product.category,
      description: product.description,
      image: product.image ? `${process.env.BASE_URL || ''}${product.image}` : null,
      details: product.details,
      order: product.order,
      isActive: product.isActive
    }));
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: formattedProducts
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    // Format the response to match the frontend structure
    const formattedProduct = {
      id: product._id,
      category: product.category,
      description: product.description,
      image: product.image ? `${process.env.BASE_URL || ''}${product.image}` : null,
      details: product.details,
      order: product.order,
      isActive: product.isActive
    };
    
    res.status(200).json({
      success: true,
      data: formattedProduct
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new product
exports.createProduct = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('File:', req.file);
    
    const productData = { ...req.body };
    
    // Ensure required fields are present
    if (!productData.category || !productData.description) {
      return res.status(400).json({
        success: false,
        error: 'Please provide category and description'
      });
    }
    
    // Convert string "true"/"false" to boolean for isActive
    if (productData.isActive !== undefined) {
      if (productData.isActive === 'true') {
        productData.isActive = true;
      } else if (productData.isActive === 'false') {
        productData.isActive = false;
      }
    }
    
    // Convert order to number if it's a string
    if (productData.order !== undefined && typeof productData.order === 'string') {
      productData.order = parseInt(productData.order, 10) || 0;
    }
    
    // If file was uploaded, set the image path
    if (req.file) {
      productData.image = `/uploads/products/${req.file.filename}`;
    }
    
    console.log('Creating product with data:', productData);
    
    const product = await Product.create(productData);
    
    // Format the response to match the frontend structure
    const formattedProduct = {
      id: product._id,
      category: product.category,
      description: product.description,
      image: product.image ? `${process.env.BASE_URL || ''}${product.image}` : null,
      details: product.details,
      order: product.order,
      isActive: product.isActive
    };
    
    res.status(201).json({
      success: true,
      data: formattedProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
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

// Update product
exports.updateProduct = async (req, res) => {
  try {
    console.log('Update request body:', req.body);
    console.log('Update file:', req.file);
    
    const productData = { ...req.body };
    
    // Convert string "true"/"false" to boolean for isActive
    if (productData.isActive !== undefined) {
      if (productData.isActive === 'true') {
        productData.isActive = true;
      } else if (productData.isActive === 'false') {
        productData.isActive = false;
      }
    }
    
    // Convert order to number if it's a string
    if (productData.order !== undefined && typeof productData.order === 'string') {
      productData.order = parseInt(productData.order, 10) || 0;
    }
    
    // If file was uploaded, set the image path
    if (req.file) {
      productData.image = `/uploads/products/${req.file.filename}`;
    }
    
    console.log('Updating product with data:', productData);
    
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      productData,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    // Format the response to match the frontend structure
    const formattedProduct = {
      id: product._id,
      category: product.category,
      description: product.description,
      image: product.image ? `${process.env.BASE_URL || ''}${product.image}` : null,
      details: product.details,
      order: product.order,
      isActive: product.isActive
    };
    
    res.status(200).json({
      success: true,
      data: formattedProduct
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
    });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    await product.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
