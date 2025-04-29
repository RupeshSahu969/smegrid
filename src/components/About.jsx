import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import smsgridImage from '../assets/Web-banner.jpg'; // Your image path
import { fadeInUp, scaleIn, staggerContainer } from './animations';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState([0, 1, 2]); // All open by default
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
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleLearnMore = () => {
    setShowMore((prev) => {
      const next = !prev;
      if (next) setActiveAccordion([0, 1, 2]);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-2xl font-bold text-gray-800 mb-3"
          data-aos="fade-down"
        >
          About US
        </h2>
        <div 
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>

      {/* Main Content - Left Image, Right Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-16">
        {/* Left Side - Image */}
        <div 
          className="order-2 md:order-1"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 transform transition-transform duration-500 hover:scale-105">
            <img
              src={smsgridImage}
              alt="SMEGRID"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div 
          className="order-1 md:order-2 space-y-6"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-bold text-gray-800">
            Empowering Manufacturing Excellence
          </h3>
          
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
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMore ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <AnimatePresence>
        {showMore && (
          <div 
            ref={accordionRef}
            className="bg-gray-50 p-8 rounded-2xl shadow-md mb-12"
            data-aos="fade-up"
          >
            {/* Accordion Item 1: Our Story */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors ${activeAccordion.includes(0) ? 'border-b border-gray-200' : ''}`}
                onClick={() => toggleAccordion(0)}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
                </div>
                <svg 
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${activeAccordion.includes(0) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeAccordion.includes(0) ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 bg-white border-l-4 border-orange-500">
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
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">2015</div>
                      <div className="text-sm text-gray-500">Founded</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">200+</div>
                      <div className="text-sm text-gray-500">Clients</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">12</div>
                      <div className="text-sm text-gray-500">Locations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion Item 2: Our Values */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors ${activeAccordion.includes(1) ? 'border-b border-gray-200' : ''}`}
                onClick={() => toggleAccordion(1)}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
                </div>
                <svg 
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${activeAccordion.includes(1) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeAccordion.includes(1) ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 bg-white border-l-4 border-orange-500">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our core values guide every decision we make and every service we provide. They are the foundation
                    of our business and the reason our clients trust us with their most critical operations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-xl">✓</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Transparency</h4>
                          <p className="text-gray-600 text-sm">We believe in complete transparency in all our transactions and communications.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-xl">✓</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Quality</h4>
                          <p className="text-gray-600 text-sm">We never compromise on quality, ensuring the highest standards in everything we do.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-xl">✓</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Customer-Centric</h4>
                          <p className="text-gray-600 text-sm">Our clients' success is our success. We tailor our solutions to meet their specific needs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-xl">✓</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Innovation</h4>
                          <p className="text-gray-600 text-sm">We continuously seek better ways to serve our clients through innovation and technology.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion Item 3: Our Team */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors ${activeAccordion.includes(2) ? 'border-b border-gray-200' : ''}`}
                onClick={() => toggleAccordion(2)}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
                </div>
                <svg 
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${activeAccordion.includes(2) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeAccordion.includes(2) ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 bg-white border-l-4 border-orange-500">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With over 200 professionals across 12 locations, our team brings decades of experience
                    in manufacturing, supply chain management, and industrial operations. Our experts are 
                    dedicated to delivering tailored solutions that drive efficiency and growth for your business.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Operations</h4>
                      <p className="text-gray-600 text-sm">Experts in logistics, inventory management, and process optimization</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Technical</h4>
                      <p className="text-gray-600 text-sm">Specialized engineers and technicians with industry certifications</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Support</h4>
                      <p className="text-gray-600 text-sm">Customer service and administrative professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
