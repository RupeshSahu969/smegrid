import { FaStar, FaQuoteLeft, FaUserTie, FaIndustry, FaTools } from 'react-icons/fa';

const ImpactSection = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn">
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
            ))}
          </div>
          <div className="flex items-start mb-4">
            <FaQuoteLeft className="text-gray-300 mr-2 mt-1 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "SMEGRID helped us reduce our procurement costs by 18% while ensuring consistent quality. Their team goes above and beyond to meet our manufacturing deadlines."
            </p>
          </div>
          <div className="flex items-center">
            <FaUserTie className="text-gray-400 mr-3 text-lg" />
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800">Rajesh Kumar</h4>
              <p className="text-xs sm:text-sm text-gray-500">Operations Director, Precision Manufacturing Ltd.</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
            ))}
          </div>
          <div className="flex items-start mb-4">
            <FaQuoteLeft className="text-gray-300 mr-2 mt-1 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "Their scrap management service has transformed what was once a cost center into a revenue stream. The pickup schedule is always on time and the reporting is excellent."
            </p>
          </div>
          <div className="flex items-center">
            <FaIndustry className="text-gray-400 mr-3 text-lg" />
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800">Priya Sharma</h4>
              <p className="text-xs sm:text-sm text-gray-500">Plant Manager, MetaTech Industries</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
            ))}
          </div>
          <div className="flex items-start mb-4">
            <FaQuoteLeft className="text-gray-300 mr-2 mt-1 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "When we needed to quickly scale our workforce for a major project, SMEGRID delivered skilled workers who were ready to contribute from day one."
            </p>
          </div>
          <div className="flex items-center">
            <FaTools className="text-gray-400 mr-3 text-lg" />
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800">Vikram Singh</h4>
              <p className="text-xs sm:text-sm text-gray-500">1st Manager, Apex Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
