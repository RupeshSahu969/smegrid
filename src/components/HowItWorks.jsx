// src/components/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: '1. You Raise a Request',
    description: `Whether it’s for raw material, scrap (buy/sell), or labor, just let us know your requirement.`,
  },
  {
    title: '2. We Assign a Dedicated Delivery Manager',
    description: `A single point of contact who takes full ownership of your request.`,
  },
  {
    title: '3. We Activate the Execution Grid',
    description: `The manager taps into SMEGRID’s own resources or leverages our verified partners to fulfill the task — from negotiating best rates to arranging logistics.`,
  },
  {
    title: '4. You Save Time & Money',
    description: `We handle the hassle, ensuring cost-effective, timely delivery — while you stay focused on your factory floor or next big order.`,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-16 text-gray-800">
      {/* Big One-Liner */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-4">
  <h1 className="text-2xl font-bold text-gray-800 mb-3">
    Simple, Seamless, and Stress-Free
  </h1>

  <div
    className="w-24 h-1 bg-orange-500 mx-auto mb-6"
    data-aos="zoom-in"
    data-aos-delay="200"
  />

  <p className="text-gray-600 mt-4">
    We act as your one-stop operational partner — taking charge of your day-to-day metal procurement, scrap transactions, and workforce needs so you can focus on growing your business.
  </p>
</div>

   


      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2 }} 
            className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="text-orange-500 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <p className="mt-16 text-center text-lg font-medium text-blue-800">
        With SMEGRID, your operations run smoother, faster, and smarter.
      </p> */}
    </section>
  );
};

export default HowItWorks;
