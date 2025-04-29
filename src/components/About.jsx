import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import smsgridImage from '../assets/Web-banner.jpg'; // Your image path
import { fadeInUp, scaleIn, staggerContainer } from './animations';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState([]); // Start with all closed
  const accordionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-in-out'
    });
  }, []);

  useEffect(() => {
    if (showMore && accordionRef.current) {
      accordionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showMore]);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) =>
      prev.includes(index) ? [] : [index] // Only allow one section open at a time
    );
  };

  const handleLearnMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-3" data-aos="fade-down">
          About US
        </h1>
        <div
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-16">
        <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="100">
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 transform transition-transform duration-500 hover:scale-105">
            <img
              src={smsgridImage}
              alt="SMEGRID"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6" data-aos="fade-left" data-aos-delay="300">
          <h1 className="text-1xl font-bold text-gray-800">
            Empowering Manufacturing Excellence
          </h1>

          <p className="text-gray-600 leading-relaxed">
            We are on a mission to empower manufacturers and industrial businesses with smarter procurement,
            efficient waste management, and skilled workforce solutions. Driven by speed, transparency, and
            reliability, we provide comprehensive solutions that optimize your operations and boost your
            bottom line.
          </p>

          <div className="pt-4 flex justify-center mt-8">
            <button
              onClick={handleLearnMore}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <span>{showMore ? 'Show Less' : 'Learn More About Us'}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMore ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <AnimatePresence>
        {showMore && (
          <div ref={accordionRef} className="bg-gray-50 p-8 rounded-2xl shadow-md mb-12" data-aos="fade-up">
            {/* Accordion Item 1: Our Story */}
            <AccordionItem
              index={0}
              title="Our Story"
              isOpen={activeAccordion.includes(0)}
              onToggle={toggleAccordion}
            >
              <p className="text-gray-600 leading-relaxed">
                Founded in 2015, SMEGRID began as a small metal procurement service and has grown into
                a comprehensive industrial solutions provider. Our journey has been marked by continuous
                innovation and a commitment to excellence in every service we offer.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                From our humble beginnings with just 5 employees, we've expanded to become a trusted partner
                for over 200 manufacturing businesses across the country. Our growth story is built on strong
                relationships, technical expertise, and an unwavering focus on delivering value.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsItem value="2015" label="Founded" />
                <StatsItem value="200+" label="Clients" />
                <StatsItem value="12" label="Locations" />
              </div>
            </AccordionItem>

            {/* Accordion Item 2: Our Values */}
            <AccordionItem
              index={1}
              title="Our Values"
              isOpen={activeAccordion.includes(1)}
              onToggle={toggleAccordion}
            >
              <p className="text-gray-600 leading-relaxed mb-4">
                Our core values guide every decision we make and every service we provide. They are the foundation
                of our business and the reason our clients trust us with their most critical operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  ['Transparency', 'We believe in complete transparency in all our transactions and communications.'],
                  ['Quality', 'We never compromise on quality, ensuring the highest standards in everything we do.'],
                  ['Customer-Centric', 'Our clients\' success is our success. We tailor our solutions to meet their specific needs.'],
                  ['Innovation', 'We continuously seek better ways to serve our clients through innovation and technology.'],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{title}</h4>
                        <p className="text-gray-600 text-sm">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* Accordion Item 3: Our Team */}
            <AccordionItem
              index={2}
              title="Our Team"
              isOpen={activeAccordion.includes(2)}
              onToggle={toggleAccordion}
            >
              <p className="text-gray-600 leading-relaxed mb-4">
                With over 200 professionals across 12 locations, our team brings decades of experience
                in manufacturing, supply chain management, and industrial operations. Our experts are
                dedicated to delivering tailored solutions that drive efficiency and growth for your business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  ['Operations', 'Experts in logistics, inventory management, and process optimization'],
                  ['Technical', 'Specialized engineers and technicians with industry certifications'],
                  ['Support', 'Customer service and administrative professionals'],
                ].map(([role, desc]) => (
                  <div key={role} className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                      <div className="w-8 h-8 text-orange-500">{/* You can place SVG here */}</div>
                    </div>
                    <h4 className="font-semibold text-gray-800">{role}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccordionItem = ({ index, title, isOpen, onToggle, children }) => (
  <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={() => onToggle(index)}
      className={`w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors ${
        isOpen ? 'border-b border-gray-200' : ''
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <svg
        className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-5 bg-white border-l-4 border-orange-500">
        {children}
      </div>
    </div>
  </div>
);

const StatsItem = ({ value, label }) => (
  <div className="bg-orange-50 p-3 rounded-lg text-center">
    <div className="text-2xl font-bold text-orange-600">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

export default About;