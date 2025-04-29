import { FaTruck, FaRecycle, FaUsers, FaIndustry, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from './animations';
import { useState } from 'react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };
  const closeModal = () => {
    setSelectedService(null);
  };

  const servicesData = [
    {
      icon: <FaTruck className="text-orange-500 text-7xl w-12 h-12" />,
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
      icon: <FaRecycle className="text-orange-500 text-7xl w-12 h-12" />,
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
      icon: <FaUsers className="text-orange-500 text-7xl w-12 h-12" />,
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

  return (
    <motion.section 
      className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="max-w-screen-xl mx-auto text-center mb-16"
        variants={fadeInUp}
      >
        <motion.p 
          className="text-orange-500 text-2xl font-semibold mb-2"
          variants={fadeInUp}
        >
          OUR SOLUTIONS
        </motion.p>
        <motion.h2 
          className="text-2xl font-bold text-gray-900 mb-4"
          variants={fadeInUp}
        >
          Optimizing Your Manufacturing Ecosystem
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-orange-500 mx-auto mb-6"
          variants={scaleIn}
        />
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
          variants={fadeInUp}
        >
          Comprehensive solutions tailored to optimize your manufacturing operations, from raw
          material procurement to resource management.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-400 border-2 border-transparent transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative "
            variants={scaleIn}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
   
            <div className="absolute -top-10 right-0 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-orange-100 rounded-full opacity-30 overflow-hidden pointer-events-none"></div>
            

            <motion.div 
              className="mb-6 mt-4 bg-orange-50 p-4 rounded-full flex items-center justify-center relative z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold mb-4 text-gray-800"
              variants={fadeInUp}
            >
              {service.title}
            </motion.h3>
            
            {/* Hide description in the card */}
            
            <motion.ul 
              className="text-gray-600 mb-8 space-y-2 list-none"
              variants={staggerContainer}
            >
              {service.points.slice(0, 2).map((point, i) => (
                <motion.li 
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center justify-center"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 inline-block"></span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
            
            <div className="flex w-full justify-center mt-4">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLearnMore(service)}
              >
                Learn More
              </motion.button>
            </div>
            
            {/* Add padding at the bottom to ensure the fixed button doesn't cover content on mobile */}
            <div className="h-16 md:h-4"></div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Modal with improved design */}
      {selectedService && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal} />
          <motion.div 
            className="relative w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl z-10 flex flex-col items-center px-6 py-8 sm:px-8 border-b-4 border-orange-500 max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 focus:outline-none z-20"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Mobile close button at the bottom */}
            <button
              onClick={closeModal}
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg md:hidden z-30"
            >
              Close
            </button>
            
            <div className="flex flex-col items-center w-full">
              {/* Larger icon in modal */}
              <div className="mb-6 bg-orange-50 p-6 sm:p-8 rounded-full">
                <div className="text-6xl sm:text-7xl text-orange-500">
                  {selectedService.icon}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {selectedService.title}
              </h2>
              
              <div className="w-24 h-1 bg-orange-400 rounded-full mb-4 sm:mb-6" />
              
              {/* Description shown in modal */}
              <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed text-center">
                {selectedService.description}
              </p>
              
              <div className="bg-orange-50 p-6 rounded-xl w-full">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                  {selectedService.points.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            
              
              {/* Add padding at the bottom for mobile to ensure the fixed button doesn't cover content */}
              <div className="h-16 md:h-0"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

export default Services;