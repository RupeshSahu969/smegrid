import { FaDollarSign, FaShieldAlt, FaClock, FaChartLine, FaHandHoldingHeart } from "react-icons/fa";

function WhyPartner() {
  const features = [
    {
      icon: <FaDollarSign className="text-blue-500 text-5xl md:text-6xl mb-4" />,
      title: "Competitive Pricing",
      description: "Our volume-based approach and strategic partnerships ensure you get the best rates in the industry.",
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-5xl md:text-6xl mb-4" />,
      title: "Assured Quality & Compliance",
      description: "All our processes and materials meet rigorous quality standards and regulatory requirements.",
    },
    {
      icon: <FaClock className="text-blue-500 text-5xl md:text-6xl mb-4" />,
      title: "Speedy Execution",
      description: "We understand time is money - our streamlined operations ensure quick turnaround on all services.",
    },
    {
      icon: <FaChartLine className="text-blue-500 text-5xl md:text-6xl mb-4" />,
      title: "Transparent Processes",
      description: "Complete visibility into pricing, sourcing, and logistics through our detailed reporting.",
    },
    {
      icon: <FaHandHoldingHeart className="text-blue-500 text-5xl md:text-6xl mb-4" />,
      title: "Customer-Centric Service",
      description: "Our dedicated account managers ensure your unique requirements are met at every stage.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Partner with SMEGRID?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our unique approach to industrial services delivers measurable value to manufacturing businesses of all sizes.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-white hover:shadow-md rounded-2xl">
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyPartner;
