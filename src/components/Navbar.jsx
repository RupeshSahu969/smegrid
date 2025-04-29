import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logosmegrid.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md w-full fixed top-0 left-0 z-50 h-16 md:h-20">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center relative">
          {/* Logo - Left Side */}
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-105 z-10"
            onClick={() => navigate("/")}
          >
            <img 
              src={logo} 
              alt="SMEGRID Logo" 
              className="h-10 md:h-12 lg:h-14 transition-transform duration-200"
            />
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            <Link to="/" className="nav-link hover hover:text-[#ef7713]">Home</Link>
            <Link to="/services" className="nav-link hover:text-[#ef7713]">Services</Link>
            <Link to="/about" className="nav-link hover:text-[#ef7713]">About Us</Link>
            <Link to="/why-smsgrid" className="nav-link hover:text-[#ef7713]">Why SMEGRID</Link>
            <Link to="/contact" className="nav-link hover:text-[#ef7713]">Contact Us</Link>
          </div>

          {/* Right-aligned Desktop Quote Button */}
          <div className="hidden lg:block md:hidden">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#ef7713] text-white rounded-md text-sm font-medium hover:bg-[#d4690f] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile/Tablet Section */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Tablet Quote Button */}
            <Link
              to="/contact"
              className="hidden md:inline-block px-4 py-2 bg-[#ef7713] text-white rounded-md text-sm font-medium hover:bg-[#d4690f] transition-colors"
            >
              Get Quote
            </Link>
            
            {/* Hamburger Menu Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 bg-blend-color-dodge transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >

              <svg
                className="w-8 h-8 text-gray-800"
                
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 w-full bg-white shadow-lg py-4 px-6 space-y-3 animate-slide-down">
            <MobileNavLink to="/" onClick={setMobileMenuOpen}>Home</MobileNavLink>
            <MobileNavLink to="/services" onClick={setMobileMenuOpen}>Services</MobileNavLink>
            <MobileNavLink to="/about" onClick={setMobileMenuOpen}>About Us</MobileNavLink>
            <MobileNavLink to="/why-smsgrid" onClick={setMobileMenuOpen}>Why SMEGRID</MobileNavLink>
            <MobileNavLink to="/contact" onClick={setMobileMenuOpen}>Contact Us</MobileNavLink>
            
            <div className="pt-4 border-t border-gray-100 md:hidden">
              <Link
                to="/contact"
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

// Reusable mobile link component
const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    className="block py-2 px-4 text-gray-800 hover:bg-orange-50 rounded-md font-medium text-lg transition-colors"
    onClick={() => onClick(false)}
  >
    {children}
  </Link>
);

export default Navbar;