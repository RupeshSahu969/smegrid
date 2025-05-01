const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const Carousel = require('./models/Carousel');

// Import data
const carouselData = require('./data/carouselData');

// Load env vars
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smegrid');

// Initial service data based on frontend component
const services = [
  {
    icon: "FaTruck",
    title: "Metal Procurement",
    description: "Strategic sourcing of metals and raw materials tailored to your manufacturing needs. Our metal procurement service revolutionizes your supply chain with intelligent sourcing strategies that ensure just-in-time delivery while maintaining the highest quality standards.",
    points: [
      "Global network of verified suppliers",
      "Just-in-time delivery",
      "Cost optimization through bulk purchasing",
      "Custom alloy development",
      "End-to-end logistics",
      "Sustainability-focused sourcing"
    ]
  },
  {
    icon: "FaRecycle",
    title: "Scrap Trading & Management",
    description: "Turn your manufacturing waste into value with our comprehensive scrap management solutions. Our scrap management ecosystem transforms your waste streams into revenue generators while ensuring full environmental compliance.",
    points: [
      "Automated scrap collection",
      "Real-time scrap valuation",
      "Zero-landfill guarantee",
      "Automated documentation",
      "Recycling partnerships",
      "Carbon footprint reporting"
    ]
  },
  {
    icon: "FaUsers",
    title: "Skilled Labour Supply",
    description: "Access trained manpower for your manufacturing operations when you need it most. Our workforce solutions provide flexible access to pre-qualified technical talent across all manufacturing disciplines.",
    points: [
      "Specialized technicians",
      "On-site safety training",
      "Scalable workforce",
      "Comprehensive benefits",
      "Performance analytics",
      "Multilingual workforce"
    ]
  }
];

// Import data into DB
const importData = async () => {
  try {
    await Service.deleteMany();
    await Service.insertMany(services);
    
    await Carousel.deleteMany();
    await Carousel.insertMany(carouselData);
    
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Delete data from DB
const deleteData = async () => {
  try {
    await Service.deleteMany();
    await Carousel.deleteMany();
    
    console.log('Data destroyed successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Check command line arguments to determine action
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please add proper command: -i (import) or -d (delete)');
  process.exit();
}
