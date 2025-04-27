import { useState } from 'react';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF, FaTwitter, FaLinkedin ,FaInstagram 
} from 'react-icons/fa';
import { Link } from 'react-scroll';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header Section */}
      <section className="text-center mb-10 sm:mb-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Contact SMEGRID
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Have questions or ready to get started? Reach out to our team today.
        </p>
      </section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Column */}
        <div className="bg-gray-800 text-white rounded-xl p-6 sm:p-8">
  <h2 className="text-xl font-semibold mb-6">Contact Info</h2>
  
  <div className="space-y-5">
    <div className="flex items-start gap-4">
      <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-medium">Our Location</h3>
        <p className="text-gray-300 text-sm mt-1">
          123 Industrial Area, Sector 7<br />
          Mumbai, Maharashtra 400001
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <FaEnvelope className="text-orange-400 flex-shrink-0" />
      <div>
        <h3 className="font-medium">Email Us</h3>
        <p className="text-gray-300 text-sm mt-1">
          info@smegrid.com
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <FaPhoneAlt className="text-orange-400 flex-shrink-0" />
      <div>
        <h3 className="font-medium">Call Us</h3>
        <p className="text-gray-300 text-sm mt-1">
          +91 98765 43210
        </p>
      </div>
    </div>
    
    {/* Social Media Icons - Fixed with proper margin and styling */}
    <div className="pt-6 mt-6 border-t border-gray-700">
      <h3 className="font-medium mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <Link 
          to="#" 
          className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 text-xl"
        >
          <FaFacebookF />
        </Link>
        <Link 
          to="#" 
          className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 text-xl"
        >
          <FaLinkedin />
        </Link>
        <Link 
          to="#" 
          className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 text-xl"
        >
          <FaTwitter />
        </Link>
        <Link 
          to="#" 
          className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 text-xl"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  </div>
</div>

        {/* Form Column */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-"
                  required
                />
              </div>
              
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-"
                />
              </div>
              
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center">
  <button
    type="submit"
    className="px-8 py-3 bg-[#ef7713] hover:bg-white text-white hover:text-[#ef7713] font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center focus:outline-none"
  >
    <FaPaperPlane className="mr-2" />
    Submit Inquiry
  </button>
</div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;