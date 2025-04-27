import { useState, useEffect } from 'react';
import banner1 from '../assets/banner1.jpeg'; 
import banner2 from '../assets/banner2.jpg'; 
import banner3 from '../assets/banner3.jpg'; 

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
          }}
        >
          <div className="bg-black bg-opacity-40 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-[#ef7713] border-none hover:text-white text-white font-semibold rounded hover:bg-orange-600 transition">
                {slide.cta1}
              </button>
              <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded border-2 border-white hover:bg-white hover:text-gray-800 hover:border-gray-800 transition">
                {slide.cta2}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
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
      cta2: "Get a Quote",
      img: banner1,   // <<< no quotes!
    },
    {
      title: "Quality Metal Procurement",
      description: "Sourcing the best metals for your manufacturing needs.",
      cta1: "Learn More",
      cta2: "Contact Us",
      img: banner2,   // <<< no quotes!
    },
    {
      title: "Efficient Scrap Solutions",
      description: "Sustainable solutions for your metal scrap management.",
      cta1: "Our Process",
      cta2: "Get Started",
      img: banner3,   // <<< no quotes!
    }
  ]
};


export default Carousel;
