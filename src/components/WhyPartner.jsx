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
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <FaDollarSign />,
      title: "Competitive Pricing",
      description: "Our volume-based approach and strategic partnerships ensure you get the best rates in the industry.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Assured Quality & Compliance",
      description: "All our processes and materials meet rigorous quality standards and regulatory requirements.",
    },
    {
      icon: <FaClock />,
      title: "Speedy Execution",
      description: "We understand time is money - our streamlined operations ensure quick turnaround on all services.",
    },
    {
      icon: <FaChartLine />,
      title: "Transparent Processes",
      description: "Complete visibility into pricing, sourcing, and logistics through our detailed reporting.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Customer-Centric Service",
      description: "Our dedicated account managers ensure your unique requirements are met at every stage.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Partner with SMEGRID?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our unique approach to industrial services delivers measurable value to manufacturing businesses of all sizes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="text-blue-500 text-4xl md:text-5xl lg:text-6xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyPartner;
