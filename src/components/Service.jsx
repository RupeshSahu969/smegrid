import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchServices } from '../api';
// Keeping imports for fallback data
import imag1 from "../assets/image1.jpg";
import imag2 from "../assets/image2.jpg";
import imag3 from "../assets/image3.jpg";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  // Fetch services from API
  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        const response = await fetchServices();
        if (response.data && response.data.data && response.data.data.length > 0) {
          setServices(response.data.data);
        } else {
          // Use fallback data if API returns empty
          setServices(fallbackServicesData);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services');
        setServices(fallbackServicesData);
        setLoading(false);
      }
    };
    
    getServices();
  }, []);

  const handleLearnMore = (serviceTitle) => {
    alert(`Learn more about ${serviceTitle}`);
  };

  // Fallback data in case API fails
  const fallbackServicesData = [
    {
      image: imag1,
      title: "Metal Procurement",
      description:
        "Strategic sourcing of metals and raw materials tailored to your manufacturing needs.",
    },
    {
      image: imag2,
      title: "Scrap Trading & Management",
      description:
        "Turn your manufacturing waste into value with our comprehensive scrap management solutions.",
    },
    {
      image: imag3,
      title: "Skilled Labour Supply",
      description:
        "Access trained manpower for your manufacturing operations when you need it most.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Core Services
        </h1>
        <div
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <p className="text-gray-600 mt-4">
          Comprehensive solutions tailored to optimize your manufacturing operations, from raw
        </p>
        <p className="text-gray-600 mt-1">
          material procurement to resource management.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-600">Loading services...</p>
          </div>
        ) : error ? (
          <div className="col-span-3 text-center py-8">
            <p className="text-red-500">{error}</p>
          </div>
        ) : services.length === 0 ? (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-600">No services found.</p>
          </div>
        ) : (
          services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group bg-white p-2 rounded-2xl shadow hover:shadow-2xl hover:border-blue-200 border border-transparent transition-all duration-300 text-center"
          >
            <div className="mb-4">
              <img
                src={service.image ? (service.image.startsWith('/') ? `http://localhost:5000${service.image}` : service.image) : (service.icon === 'FaTruck' ? imag1 : service.icon === 'FaRecycle' ? imag2 : imag3)}
                alt={service.title}
                className="mx-auto h-48 w-full rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            {/* <button
              onClick={() => handleLearnMore(service.title)}
              className="mt-auto inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
            >
              Learn More
            </button> */}
          </div>
        )))}
      </div>
    </section>
  );
}

export default Services;
