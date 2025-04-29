import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../assets/logosmegrid.png";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=1600&q=80"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center mb-4">
              <img
                src={logo}
                alt="SMEGRID Logo"
                className="h-10 md:h-12 mr-2 bg-white"
              />
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering manufacturers with smarter procurement, efficient waste management, and skilled workforce solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all hover:scale-110">
                <FaFacebookF />
              </Link>
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all hover:scale-110">
                <FaLinkedin />
              </Link>
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all hover:scale-110">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-1 text-sm">
              <Link to="/" className="cursor-pointer hover:text-orange-400 transition-all">Home</Link>
              <Link to="/services" className="cursor-pointer hover:text-orange-400 transition-all">Services</Link>
              <Link to="/about" className="cursor-pointer hover:text-orange-400 transition-all">About Us</Link>
              <Link to="/why-smsgrid" className="cursor-pointer hover:text-orange-400 transition-all">Why SMEGRID?</Link>
              <Link to="/contact" className="cursor-pointer hover:text-orange-400 transition-all">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <div className="flex flex-col space-y-1 text-sm">
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all">Metal Procurement</Link>
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all">Scrap Trading & Management</Link>
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all">Skilled Labour Supply</Link>
              <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all">Custom Solutions</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                <span>123 Industrial Area, Sector 7<br />Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-400" />
                <span className="cursor-pointer hover:text-orange-400 transition-all">info@smegrid.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-orange-400" />
                <span className="cursor-pointer hover:text-orange-400 transition-all">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} SMEGRID. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all">Privacy Policy</Link>
            <Link to="#" className="cursor-pointer hover:text-orange-400 transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
