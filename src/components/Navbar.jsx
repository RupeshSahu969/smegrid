import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md w-full fixed top-0 left-0 z-50 h-16 md:h-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center mt-0 md:mt-4">
          {/* Logo - Left Side */}
          <div 
            className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-[#ef7713] transition-colors duration-200"
            onClick={() => navigate("/")}
          >
            SMEGRID
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-800 hover:text-[#ef7713] font-medium transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-gray-800 hover:text-[#ef7713] font-medium transition-colors duration-200"
              >
                Services
              </Link>
              
              <Link
                to="/about"
                className="text-gray-800 hover:text-[#ef7713] font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              
              <Link
                to="/why-smsgrid"
                className="text-gray-800 hover:text-[#ef7713] font-medium transition-colors duration-200"
              >
                Why SMEGRID
              </Link>
              
              <Link
                to="/contact"
                className="text-gray-800 hover:text-[#ef7713] font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Get a Quote Button - Right Side */}
          <div className="hidden md:block">
            <Link
              to="/quote"
              className="px-6 py-2.5 bg-[#ef7713] hover:bg-[#d4690f] text-white font-semibold rounded-md transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none cursor-pointer p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed left-0 top-16 w-full bg-white shadow-lg py-3 px-4 space-y-4 animate-fade-in">
            <Link
              to="/"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            
            <Link
              to="/about"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link
              to="/why-smsgrid"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why SMEGRID?
            </Link>
            
            <Link
              to="/contact"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            <div className="pt-2">
              <Link
                to="/quote"
               className="inline-block px-4 py-2 bg-[#ef7713] hover:bg-[#d4690f] text-white font-semibold rounded-md shadow-md hover:shadow-sm text-center whitespace-nowrap transition-all duration-200 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;