// WhySmegrid.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhySmegrid() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Why SMEGRID
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          SMEGRID is not just a service provider we are your strategic industrial partner. 
          Here’s <br/> why manufacturers and businesses trust us:
        </p>
       
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🛠️ Comprehensive Solutions
          </h3>
          <p className="text-gray-600">
            From metal procurement to waste management and skilled workforce supply, we cover your end-to-end needs.
          </p>
        </div>

        {/* Point 2 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🔎 Transparent Processes
          </h3>
          <p className="text-gray-600">
            Full transparency in sourcing, pricing, and reporting — no surprises, just results you can trust.
          </p>
        </div>

        {/* Point 3 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            📈 Industry Expertise
          </h3>
          <p className="text-gray-600">
            Our team brings decades of experience in industrial operations, procurement, and logistics.
          </p>
        </div>

        {/* Point 4 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🌍 Sustainability Focus
          </h3>
          <p className="text-gray-600">
            We help you manage your scrap efficiently and support environmentally responsible practices.
          </p>
        </div>

        {/* Point 5 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🤝 Customer-Centric Approach
          </h3>
          <p className="text-gray-600">
            Your success is our priority — we offer flexible, scalable solutions customized to your growth.
          </p>
        </div>

        {/* Point 6 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🚚 Nationwide Network
          </h3>
          <p className="text-gray-600">
            With operations across 12+ locations, we ensure timely service delivery wherever you are.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhySmegrid;
