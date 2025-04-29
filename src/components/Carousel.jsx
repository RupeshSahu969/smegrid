import { useState, useEffect, useRef } from 'react';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

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
    const slideDelay = currentSlide === 0 ? 17000 : 10000;
    
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, slideDelay);

    return () => resetTimeout();
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-300 bg-opacity-30"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
            <button className="px-8 py-3 bg-[#ef7713] hover:bg-orange-600 text-white font-semibold rounded transition-colors">
              {slide.cta1}
            </button>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
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

export default Carousel;