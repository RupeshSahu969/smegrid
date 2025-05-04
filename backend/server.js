const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables
dotenv.config();

// Import routes
const serviceRoutes = require('./routes/serviceRoutes');
const carouselRoutes = require('./routes/carouselRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/products');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log(`Created main uploads directory: ${uploadsDir}`);
}

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smegrid')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/carousel', carouselRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('SMEgrid API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
