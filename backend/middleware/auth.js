const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes
exports.protect = async (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key');

      // Find the user by id
      // If you don't have a User model or don't need to fetch the user, you can comment this out
      // and just set req.user = decoded;
      try {
        const user = await User.findById(decoded.id).select('-password');
        if (user) {
          req.user = user;
        } else {
          req.user = decoded;
        }
      } catch (err) {
        // If there's an error finding the user (e.g., User model doesn't exist),
        // just use the decoded token
        req.user = decoded;
      }

      next();
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(401).json({
        success: false,
        error: 'Not authorized, token failed'
      });
    }
  } else if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized, no token'
    });
  }
};
