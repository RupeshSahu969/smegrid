import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import smsgridImage from '../assets/Web-banner.jpg'; // Your image path
import { fadeInUp, scaleIn, staggerContainer } from './animations';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-8 sm:mb-10"
        variants={fadeInUp}
      >
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          About SMEGRID
        </motion.h1>
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          We are on a mission to empower manufacturers and industrial businesses with smarter procurement,
          efficient waste management, and skilled workforce solutions. Driven by speed, transparency, and 
          reliability, we provide comprehensive solutions that optimize your operations and boost your 
          bottom line.
        </motion.p>
        <motion.div 
          className="flex justify-center mb-4 sm:mb-6 mt-4"
          variants={scaleIn}
        >
          <div className="w-[700px] height-[200px] rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
            <motion.img
              src={smsgridImage}
              alt="SMEGRID"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Expandable Section */}
      <motion.section 
        className="text-center"
        variants={fadeInUp}
      >
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="px-5 sm:px-6 py-2 bg-[#ef7713] hover:bg-[#d4690f] text-white hover:text-white border-none font-medium rounded-md shadow-sm hover:shadow transition-all duration-200 mb-4 sm:mb-6 text-xs sm:text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? 'Show Less' : 'Learn More About Us'}
        </motion.button>

        <AnimatePresence>
          {showMore && (
            <motion.div 
              className="max-w-2xl mx-auto text-left bg-white p-4 sm:p-6 rounded-lg shadow-xs"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3"
                variants={fadeInUp}
              >
                Our Story
              </motion.h3>
              <motion.p 
                className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed"
                variants={fadeInUp}
              >
                Founded in 2015, SMEGRID began as a small metal procurement service and has grown into
                a comprehensive industrial solutions provider.
              </motion.p>

              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3"
                variants={fadeInUp}
              >
                Our Values
              </motion.h3>
              <motion.ul 
                className="space-y-1 sm:space-y-2 mb-3 sm:mb-4"
                variants={staggerContainer}
              >
                <motion.li 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <span className="text-[#ef7713] mr-1 mt-0.5 text-sm">✓</span>
                  <span className="text-xs sm:text-sm text-gray-600">Transparency in all transactions</span>
                </motion.li>
              </motion.ul>

              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3"
                variants={fadeInUp}
              >
                Our Team
              </motion.h3>
              <motion.p 
                className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                With over 200 professionals across 12 locations, our team brings decades of experience.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </motion.div>
  );
};

export default About;
