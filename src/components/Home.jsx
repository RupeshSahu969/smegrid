// src/components/Home.jsx
import React from 'react';
import Carousel from './Carousel';
import About from './About';
import Services from './Service';
import WhyPartner from './WhyPartner';
import ImpactSection from './ImpactSection';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Carousel />
      <About />
      <Services />
      <WhyPartner />
      <ImpactSection />
      <Contact />
      
    </div>
  );
};

export default Home;