import { FaTruck, FaRecycle, FaUsers } from "react-icons/fa"; // React Icons

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
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Services</h2>
        <p className="text-gray-600 mt-4">
          Comprehensive solutions tailored to optimize your manufacturing operations, from raw
        </p>
        <p className="text-gray-600 mt-4">
        material procurement to resource management.
            </p>
       
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow hover:shadow-2xl hover:border-orange-400 border border-transparent transition-all duration-300 flex flex-col items-start text-left cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="text-gray-600 mb-6 space-y-2 list-inside list-disc">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              onClick={() => handleLearnMore(service.title)}
              className="mt-auto bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-white  border-none hover:text-white font-semibold py-2 px-6 rounded-full"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
