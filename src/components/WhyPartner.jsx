import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDollarSign,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaHandHoldingHeart,
} from "react-icons/fa";

function WhyPartner() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-in-out'
    });
  }, []);

  const features = [
    {
      icon: <FaDollarSign  className="w-10 h-10"/>,
      title: "Competitive Pricing",
      description: "Our volume-based approach and strategic partnerships ensure you get the best rates in the industry.",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10"/>,
      title: "Assured Quality & Compliance",
      description: "All our processes and materials meet rigorous quality standards and regulatory requirements.",
    },
    {
      icon: <FaClock className="w-10 h-10"/>,
      title: "Speedy Execution",
      description: "We understand time is money - our streamlined operations ensure quick turnaround on all services.",
    },
    {
      icon: <FaChartLine className="w-10 h-10"/>,
      title: "Transparent Processes",
      description: "Complete visibility into pricing, sourcing, and logistics through our detailed reporting.",
    },
    {
      icon: <FaHandHoldingHeart className="w-10 h-10"/>,
      title: "Customer-Centric Service",
      description: "Our dedicated account managers ensure your unique requirements are met at every stage.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 
          className="text-2xl font-bold text-gray-800 mb-3"
          data-aos="fade-down"
        >
          Why Partner with SMEGRID?
        </h2>
        <div 
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <p 
          className="text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our unique approach to industrial services delivers measurable value to manufacturing businesses of all sizes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-orange-400 transition-all duration-300 group relative overflow-hidden"
          >
           
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full opacity-30"></div>
      
            <div className="flex justify-center items-center mb-6 relative z-10">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                <div className="text-blue-800 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center relative z-10">
              {feature.title}
            </h3>
            
            <div className="w-12 h-1 bg-orange-300 mx-auto mb-4"></div>
            
            <p className="text-gray-600 text-center relative z-10">
              {feature.description}
            </p>
            
            {/* Hover indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      <div 
        className="max-w-7xl mx-auto mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Manufacturing Operations?</h3>
        <p className="mb-6 text-white/90">Join hundreds of businesses that trust SMEGRID for their industrial service needs.</p>
        <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:shadow-lg">
          Get Started Today
        </button>
      </div>
    </section>
  );
}

export default WhyPartner;
