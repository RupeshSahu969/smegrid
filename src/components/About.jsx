import { useState } from 'react';
import smsgridImage from '../assets/Web-banner.jpg'; // Your image path

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Hero Section */}
      <section className="text-center mb-8 sm:mb-10 animate__animated animate__fadeIn">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          About SMEGRID
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are on a mission to empower manufacturers and industrial businesses with smarter procurement,
          efficient waste management, and skilled workforce solutions. Driven by speed, transparency, and 
          reliability, we provide comprehensive solutions that optimize your operations and boost your 
          bottom line.
        </p>
        <div className="flex justify-center mb-4 sm:mb-6 mt-4">
  <div className="w-[700px]  height-[200px] rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
    <img
      src={smsgridImage}
      alt="SMEGRID"
      className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>
      </section>

      {/* Expandable Section */}
      <section className="text-center animate__animated animate__fadeIn animate__delay-1s">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-5 sm:px-6 py-2 bg-[#ef7713] hover:bg-[#d4690f] text-white hover:text-white border-none  font-medium rounded-md shadow-sm hover:shadow transition-all duration-200 mb-4 sm:mb-6 text-xs sm:text-sm"
        >
          {showMore ? 'Show Less' : 'Learn More About Us'}
        </button>

        {showMore && (
          <div className="max-w-2xl mx-auto text-left bg-white p-4 sm:p-6 rounded-lg shadow-xs animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Our Story</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Founded in 2015, SMEGRID began as a small metal procurement service and has grown into
              a comprehensive industrial solutions provider.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Our Values</h3>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-start">
                <span className="text-[#ef7713] mr-1 mt-0.5 text-sm">✓</span>
                <span className="text-xs sm:text-sm text-gray-600">Transparency in all transactions</span>
              </li>
              {/* Other list items */}
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Our Team</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              With over 200 professionals across 12 locations, our team brings decades of experience.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
