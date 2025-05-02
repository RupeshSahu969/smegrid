import { useState, useEffect, useRef } from 'react';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/navlogo-removebg-preview.png";
import logo1 from "../assets/logosmegrid.png";
const Carousel = ({ slides }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navbarColor, setNavbarColor] = useState('bg-[#0c2c5a]'); // Deep blue

  const [textColor, setTextColor] = useState('text-white'); // Default text color
  const [logoSrc, setLogoSrc] = useState(logo); // Default logo (e.g. white text on transparent)

  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    resetTimeout();
    
    // First slide stays for 7 seconds, others for 5 seconds
    const slideDelay = currentSlide === 0 ? 7000 : 5000;
    
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, slideDelay);

    return () => resetTimeout();
  }, [currentSlide, slides.length]);

  useEffect(() => {
    // Scroll to the top when the page loads or changes
    window.scrollTo(0, 0);  
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('bg-white shadow-md'); 
        setTextColor('text-black'); // Change text color to black
        setLogoSrc(logo1); 
      } else {
        setNavbarColor('bg-[#0c2c5a]');

        setTextColor('text-white'); // Revert text color to white
        setLogoSrc(logo); 
      }
    };
  
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleExploreClick = (slideData) => {
    // Store data in local storage
    localStorage.setItem('selectedService', JSON.stringify(slideData));
    // Navigate to details page
    navigate('/services/details');
  };

  return (
    <>
   <nav className={`${navbarColor} ${textColor} w-full fixed top-0 left-0 z-50 h-16 md:h-20 transition-all duration-300`}>

        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex justify-between items-center relative">
            {/* Logo - Left Side */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105 z-10"
              onClick={() => navigate("/")}
            >
              <img 
                src={logoSrc} 
                alt="SMEGRID Logo" 
                className="h-10 md:h-12 bg-blue lg:h-14 transition-transform duration-200"
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

      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden md:mt-20">
        {/* Slides Container */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="w-full h-full flex-shrink-0 relative"
            >
              {/* Image Container */}
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-[#0c2c5a] bg-opacity-40 flex items-center">
                <div className="text-white max-w-2xl px-8 md:px-16 ml-4 md:ml-16 space-y-6">
                  <h2 
                    className="text-2xl md:text-4xl font-bold transform transition-all duration-700 ease-out"
                    style={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      transform: `translateX(${currentSlide === index ? '0' : '-50px'})`
                    }}
                  >
                    {slide.title}
                  </h2>
                  <p 
                    className="text-lg md:text-xl transform transition-all duration-700 ease-out delay-150"
                    style={{
                      opacity: currentSlide === index ? 1 : 0,
                      transform: `translateX(${currentSlide === index ? '0' : '-50px'})`
                    }}
                  >
                    {slide.description}
                  </p>
                  <button 
                    className="px-8 py-3 bg-[#ef7713] hover:bg-orange-600 w-100px text-white font-semibold
                     rounded transition-all transform duration-700 ease-out delay-300"
                    onClick={() => handleExploreClick(slide)}
                    style={{
                      opacity: currentSlide === index ? 1 : 0,
                      transform: `translateX(${currentSlide === index ? '0' : '-50px'})`
                    }}
                  >
                     {slide.cta1}
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next and Previous Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-10">
          <button onClick={prevSlide} className="p-2 rounded-full bg-black bg-opacity-40 hover:bg-opacity-70">
            <svg className="w-6 h-6">
              <path d="M12 19l-7-7 7-7" stroke="currentColor" fill="none" strokeWidth="2"/>
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-10">
          <button onClick={nextSlide} className="p-2 rounded-full bg-black bg-opacity-40 hover:bg-opacity-70">
            <svg className="w-6 h-6">
              <path d="M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

Carousel.defaultProps = {
  slides: [
    {
      title: "Powering the Backbone of Manufacturing",
      description: "Metal Procurement, Scrap Solutions, and Skilled Manpower — All in One Place.",
      cta1: "Explore Services",
      img: banner1,
    },
    {
      title: "Quality Metal Procurement",
      description: "Sourcing the best metals for your manufacturing needs.",
      cta1: "Explore Services",
      img: banner2,
    },
    {
      title: "Efficient Scrap Solutions",
      description: "Sustainable solutions for your metal scrap management.",
      cta1: "Explore Services",
      img: banner3,
    }
  ]
};

const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    className="block py-2 px-4 text-gray-800 hover:bg-orange-50 rounded-md font-medium text-lg transition-colors"
    onClick={() => onClick(false)}
  >
    {children}
  </Link>
);

export default Carousel;
