import { FaTruck, FaRecycle, FaUsers } from "react-icons/fa"; // React Icons
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from './animations';

function Services() {
  const handleLearnMore = (serviceTitle) => {
    alert(`Learn more about ${serviceTitle}`);
  };

  const servicesData = [
    {
      icon: <FaTruck className="text-orange-500 text-5xl transition-transform duration-300 group-hover:scale-110" />,
      title: "Metal Procurement",
      description: "Strategic sourcing of metals and raw materials tailored to your manufacturing needs.",
      points: [
        "Timely delivery with quality assurance",
        "Competitive pricing across material categories",
        "Simplified sourcing from verified suppliers",
        "Inventory management support",
      ],
    },
    {
      icon: <FaRecycle className="text-orange-500 text-5xl transition-transform duration-300 group-hover:scale-110" />,
      title: "Scrap Trading & Management",
      description: "Turn your manufacturing waste into value with our comprehensive scrap management solutions.",
      points: [
        "Compliance with environmental regulations",
        "Scheduled pickup and transport services",
        "Better rates through volume processing",
        "Detailed documentation and reporting",
      ],
    },
    {
      icon: <FaUsers className="text-orange-500 text-5xl transition-transform duration-300 group-hover:scale-110" />,
      title: "Skilled Labour Supply",
      description: "Access trained manpower for your manufacturing operations when you need it most.",
      points: [
        "Pre-vetted, trained workforce",
        "Scalable deployment based on project needs",
        "Reduce HR overhead and compliance concerns",
        "Quick ramp-up for seasonal demands",
      ],
    },
  ];

  return (
    <motion.section 
      className="py-12 px-4 bg-gray-50"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-12"
        variants={fadeInUp}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          variants={fadeInUp}
        >
          Our Core Services
        </motion.h2>
        <motion.p 
          className="text-gray-600 mt-4"
          variants={fadeInUp}
        >
          Comprehensive solutions tailored to optimize your manufacturing operations, from raw
        </motion.p>
        <motion.p 
          className="text-gray-600 mt-4"
          variants={fadeInUp}
        >
          material procurement to resource management.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow hover:shadow-2xl hover:border-orange-400 border border-transparent transition-all duration-300 flex flex-col items-start text-left cursor-pointer"
            variants={scaleIn}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              variants={fadeInUp}
            >
              {service.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-4"
              variants={fadeInUp}
            >
              {service.description}
            </motion.p>
            <motion.ul 
              className="text-gray-600 mb-6 space-y-2 list-inside list-disc"
              variants={staggerContainer}
            >
              {service.points.map((point, i) => (
                <motion.li 
                  key={i}
                  variants={fadeInUp}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              onClick={() => handleLearnMore(service.title)}
              className="mt-auto bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold py-2 px-6 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
