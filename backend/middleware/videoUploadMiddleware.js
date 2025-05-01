const multer = require('multer');
const path = require('path');

// Set storage engine for video uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/videos/');
  },
  filename: function(req, file, cb) {
    cb(null, `video-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Check file type
const fileFilter = (req, file, cb) => {
  // Allow only video files
  const filetypes = /mp4|webm|mov|avi|mkv/;
  const mimetype = /video\/.*/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const isVideoMimetype = mimetype.test(file.mimetype);

  if (isVideoMimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Error: Videos Only! (mp4, webm, mov, avi, mkv)'));
  }
};

// Initialize upload
const videoUpload = multer({
  storage: storage,
  limits: { fileSize: 50000000 }, // 50MB max file size for videos
  fileFilter: fileFilter
});

module.exports = videoUpload;
