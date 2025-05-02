import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imag1 from "../assets/image1.jpg";
import imag2 from "../assets/image2.jpg";
import imag3 from "../assets/image3.jpg";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const handleLearnMore = (serviceTitle) => {
    alert(`Learn more about ${serviceTitle}`);
  };

  const servicesData = [
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
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group bg-white p-2 rounded-2xl shadow hover:shadow-2xl hover:border-blue-200 border border-transparent transition-all duration-300 text-center"
          >
            <div className="mb-4">
              <img
                src={service.image}
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
        ))}
      </div>
    </section>
  );
}

export default Services;