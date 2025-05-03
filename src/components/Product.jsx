import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

export default function Product() {
  const [originalSlides, setOriginalSlides] = useState([]);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);
  const navigate = useNavigate();

  // Simulate fetching slide data
  useEffect(() => {
    const fetchSlides = async () => {
      const data = [
        {
          id: "07",
          category: "Building & Construction Waste",
          description: "In the present era of the circular economy...",
          image: product1,
        },
        {
          id: "08",
          category: "Scrap Metals",
          description: "Making waste work by recycling metals.",
          image: product2,
        },
        {
          id: "09",
          category: "Labour Services",
          description: "Workforce support across all industries.",
          image: product3,
        },
      ];
      setOriginalSlides(data);
    };

    fetchSlides();
  }, []);

  // Create cloned slides array
  const slides = useMemo(() => {
    if (originalSlides.length === 0) return [];
    return [
      originalSlides[originalSlides.length - 1], // Clone last
      ...originalSlides,
      originalSlides[0], // Clone first
    ];
  }, [originalSlides]);

  const getRealIndex = (i) => {
    if (i === 0) return originalSlides.length - 1;
    if (i === slides.length - 1) return 0;
    return i - 1;
  };

  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    if (slides.length > 0) {
      startAutoSlide();
    }
    return () => clearInterval(autoSlideRef.current);
  }, [slides]);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
    startAutoSlide();
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
    startAutoSlide();
  };

  useEffect(() => {
    if (slides.length === 0) return;

    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 1000);
    } else if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - 2);
      }, 1000);
    } else {
      setTransition(true);
    }
  }, [index, slides]);

  const handleViewMore = () => {
    const realIndex = getRealIndex(index);
    localStorage.setItem(
      "productDetails",
      JSON.stringify(originalSlides[realIndex])
    );
    navigate("/product-details");
  };

  if (originalSlides.length === 0) return <div>Loading...</div>;

  return (
    <section className="py-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Our Products</h1>
        <div
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <div className="flex justify-center">
          <p className="text-base text-gray-600 mb-6 max-w-md">
            Our company offers a range of essential products including Metal,
            Scrap, and Labour—widely used across industrial, construction, and
            manufacturing sectors.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-white h-[450px] md:h-[600px]">
        <div
          ref={sliderRef}
          className="flex h-full"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(index * 100) / slides.length}%)`,
            transition: transition ? "transform 1s ease-in-out" : "none",
          }}
        >
          {slides.map((_, i) => {
            const slide = originalSlides[getRealIndex(i)];
            return (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full flex flex-col md:flex-row items-center justify-center"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className="flex flex-col-reverse md:flex-row w-full h-full items-stretch relative">
                  <div className="bg-[#6735e4] text-white md:absolute md:top-[80px] md:left-[100px] md:h-[250px] md:w-[350px] md:mt-[100px] z-10 p-6 md:p-8 flex flex-col justify-center items-center md:rounded-t-2xl md:rounded-2xl">
                    <div className="max-w-[350px] w-full text-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {slide.category}
                      </h2>
                      <p className="text-sm md:text-base mb-6">
                        {slide.description}
                      </p>
                      <button
                        onClick={handleViewMore}
                        className="underline text-sm md:text-base hover:text-gray-200 mx-auto"
                      >
                        View More →
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-[calc(100%-120px)] h-[600px] md:ml-[380px]">
                    <img
                      src={slide.image}
                      alt={slide.category}
                      className="w-full h-full object-cover md:rounded-b-2xl md:rounded-r-2xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-30"
        >
          <FaChevronLeft className="text-[#6735e4]" size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-30"
        >
          <FaChevronRight className="text-[#6735e4]" size={20} />
        </button>

        {/* Dots */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {originalSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx + 1)}
              className={`w-3 h-3 rounded-full ${
                index === idx + 1 ? "bg-[#6735e4]" : "bg-gray-300"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
