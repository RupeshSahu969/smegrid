import { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const ExploreServices = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('selectedService'));
    if (data) {
      setServiceData(data);
    }
  }, []);

  if (!serviceData) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-8 w-full max-w-4xl px-4">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {serviceData?.title || 'Service Details'}
            </h1>
          </motion.div>

          {serviceData?.img && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-96 overflow-hidden rounded-2xl shadow-xl mb-12"
            >
              <img
                src={serviceData.img}
                alt={serviceData.title || 'Service image'}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {serviceData?.details?.overview || 'No overview available'}
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h3>
              <ul className="space-y-4">
                {(serviceData?.details?.features || []).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-[#ef7713] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
     
    </>
  );
};

export default ExploreServices;