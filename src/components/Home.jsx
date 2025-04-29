// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import About from './About';
import Services from './Service';
import WhyPartner from './WhyPartner';
import ImpactSection from './ImpactSection';
import Contact from './Contact';
import Footer from './Footer';
import { staggerContainer, fadeInUp, pageTransition } from './animations';

const Home = () => {
  return (
    <motion.div 
      className="overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      {...pageTransition}
    >
      <motion.div variants={fadeInUp}>
        <Carousel />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <About />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <Services />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <WhyPartner />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <ImpactSection />
      </motion.div>
      
      <motion.div variants={fadeInUp}>
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;