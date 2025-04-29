import { useState, useEffect } from 'react';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF, FaTwitter, FaLinkedin, FaInstagram,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-in-out'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log('Input changed:', name, value); // Debug log
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 
          className="text-2xl font-bold text-gray-800 mb-3"
          data-aos="fade-down"
        >
          Contact US
        </h2>
        <div 
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <p 
          className="text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Have questions or ready to get started? Reach out to our team today.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Column */}
        <div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500 opacity-10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500 opacity-10 rounded-full"></div>
          
          <h2 className="text-2xl font-semibold mb-8 relative">Contact Info</h2>
          
          <div className="space-y-8 relative">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaMapMarkerAlt className="text-orange-400 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-orange-300">Our Location</h3>
                <p className="text-gray-300 mt-1 leading-relaxed">
                  123 Industrial Area, Sector 7<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaEnvelope className="text-orange-400 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-orange-300">Email Us</h3>
                <p className="text-gray-300 mt-1">
                  info@smegrid.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaPhoneAlt className="text-orange-400 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-orange-300">Call Us</h3>
                <p className="text-gray-300 mt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="pt-8 mt-8 border-t border-gray-700">
              <h3 className="font-medium text-lg text-orange-300 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link 
                  to="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF className="text-white" />
                </Link>
                <Link 
                  to="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-white" />
                </Link>
                <Link 
                  to="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter className="text-white" />
                </Link>
                <Link 
                  to="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50"></div>
          
          <div className="relative">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Get a Quote
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 group-focus-within:text-orange-600 transition-colors duration-300">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white z-10 relative"
                    required
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 group-focus-within:text-orange-600 transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white z-10 relative"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 group-focus-within:text-orange-600 transition-colors duration-300">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white z-10 relative"
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 group-focus-within:text-orange-600 transition-colors duration-300">
                    <FaBuilding />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white z-10 relative"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white z-10 relative"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center focus:outline-none transform hover:translate-y-[-2px]"
                >
                  <span>Submit Inquiry</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div 
        className="max-w-7xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-xl"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7100590729606!2d72.87105031469864!3d19.075430387086476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650956306100!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
