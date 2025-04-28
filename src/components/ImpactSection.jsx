import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaQuoteLeft, FaUserTie, FaIndustry, FaTools } from "react-icons/fa";

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      stars: 5,
      text: "SMEGRID helped us reduce our procurement costs by 18% while ensuring consistent quality. Their team goes above and beyond to meet our manufacturing deadlines.",
      name: "Rajesh Kumar",
      role: "Operations Director, Precision Manufacturing Ltd.",
      icon: <FaUserTie className="text-gray-400 text-lg" />,
    },
    {
      stars: 5,
      text: "Their scrap management service has transformed what was once a cost center into a revenue stream. The pickup schedule is always on time and the reporting is excellent.",
      name: "Priya Sharma",
      role: "Plant Manager, MetaTech Industries",
      icon: <FaIndustry className="text-gray-400 text-lg" />,
    },
    {
      stars: 5,
      text: "When we needed to quickly scale our workforce for a major project, SMEGRID delivered skilled workers who were ready to contribute from day one.",
      name: "Vikram Singh",
      role: "1st Manager, Apex Engineering",
      icon: <FaTools className="text-gray-400 text-lg" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <section className="text-center mb-10 sm:mb-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Impact in Action
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. See what our clients have to say about working with SMEGRID.
        </p>
      </section>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            data-aos="fade-right"
            data-aos-delay={idx * 200}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex text-yellow-400 mb-3">
              {[...Array(t.stars)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
              ))}
            </div>

            {/* Quote */}
            <div className="flex items-start mb-4">
              <FaQuoteLeft className="text-gray-300 mr-2 mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-gray-600 italic">{`"${t.text}"`}</p>
            </div>

            {/* Name & Role */}
            <div className="flex items-center mt-4">
              <div className="mr-3">{t.icon}</div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800">{t.name}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
