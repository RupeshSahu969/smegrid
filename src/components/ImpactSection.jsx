import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaQuoteLeft, FaUserTie, FaIndustry, FaTools, FaChartLine } from "react-icons/fa";

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      mirror: false,
      easing: 'ease-in-out' 
    });
  }, []);

  const testimonials = [
    {
      stars: 5,
      text: "SMEGRID helped us reduce our procurement costs by 18% while ensuring consistent quality. Their team goes above and beyond to meet our manufacturing deadlines.",
      name: "Rajesh Kumar",
      role: "Operations Director, Precision Manufacturing Ltd.",
      icon: <FaUserTie className="text-orange-500 text-xl" />,
      bgColor: "from-orange-50 to-white",
      iconBg: "bg-orange-100",
    },
    {
      stars: 5,
      text: "Their scrap management service has transformed what was once a cost center into a revenue stream. The pickup schedule is always on time and the reporting is excellent.",
      name: "Priya Sharma",
      role: "Plant Manager, MetaTech Industries",
      icon: <FaIndustry className="text-orange-500 text-xl" />,
      bgColor: "from-orange-100 to-orange-50",
      iconBg: "bg-orange-200",
    },
    {
      stars: 5,
      text: "When we needed to quickly scale our workforce for a major project, SMEGRID delivered skilled workers who were ready to contribute from day one.",
      name: "Vikram Singh",
      role: "1st Manager, Apex Engineering",
      icon: <FaTools className="text-orange-500 text-xl" />,
      bgColor: "from-orange-50 to-white",
      iconBg: "bg-orange-100",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
     
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 
          className="text-2xl font-bold text-gray-800 mb-3"
          data-aos="fade-down"
        >
          Our Impact in Action
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
          Don't just take our word for it. See what our clients have to say about working with SMEGRID.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-delay={idx * 100}
            className={`p-8 rounded-2xl shadow-xl border hover:shadow-2xl transform 
              hover:-translate-y-2 transition-all duration-500 hover:border-blue-500 
              transition-colors relative overflow-hidden`}
            
         >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40  opacity-20 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40  opacity-10 rounded-full"></div>
            
            <div className="relative">
              {/* Stars */}
              <div className="flex text-orange-500 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <FaQuoteLeft className="text-orange-300 text-2xl mb-2" />
                <p className="text-gray-700 leading-relaxed">{`"${t.text}"`}</p>
              </div>

              {/* Name & Role */}
              <div className="flex items-center mt-6 pt-4 border-t border-orange-100">
                <div className={`w-12 h-12 ${t.iconBg} rounded-full flex items-center justify-center mr-4`}>
                  {t.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Stats Section */}
      

    </div>
  );
};

export default ImpactSection;
