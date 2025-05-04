const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads/products');
if (!fs.existsSync(uploadDir)) {
  // Create directory recursively
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created uploads directory: ${uploadDir}`);
}

// Set up storage for product images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `product-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Check file type
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|webp/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5000000 } // 5MB limit
});

// Error handling middleware for multer
const handleUpload = (req, res, next) => {
  const uploadSingle = upload.single('image');
  
  uploadSingle(req, res, (err) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(400).json({
        success: false,
        error: err.message || 'File upload failed'
      });
    }
    next();
  });
};

// Routes for /api/products
router.route('/')
  .get(getProducts)
  .post(handleUpload, createProduct);

// Routes for /api/products/:id
router.route('/:id')
  .get(getProduct)
  .put(handleUpload, updateProduct)
  .delete(deleteProduct);

module.exports = router;
