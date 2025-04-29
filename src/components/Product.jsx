import React, { useEffect, useState } from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: "01",
    category: "Metal",
    description: "In the present era of the circular economy.",
    image: product1,
  },
  {
    id: "02",
    category: "Scrap",
    description: "Recycling scrap for a sustainable tomorrow.",
    image: product2,
  },
  {
    id: "03",
    category: "Labour",
    description: "Workforce powering every project efficiently.",
    image: product3,
  },
];

export default function Product() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds auto-slide
    return () => clearInterval(interval);
  }, []);

  const handleViewMore = () => {
    localStorage.setItem("productDetails", JSON.stringify(slides[current]));
    navigate("/product-details");
  };

  return (
    <section className="relative w-full bg-white py-10 px-4">
      <h1 className="text-center text-2xl font-bold md:text-4xl font-bold mb-2">Our Products</h1>
      <p className="text-center text-lg md:text-xl text-gray-600 mb-6">
        Explore our top categories of metal, scrap, and labour
      </p>

      <div className="relative overflow-hidden w-full max-w-7xl mx-auto rounded-xl shadow-lg">
        <img
          src={slides[current].image}
          alt={slides[current].category}
          className="w-full h-[300px] md:h-[500px] object-cover transition duration-1000 ease-in-out"
        />

        <div className="absolute top-1/4 left-4 md:left-12 bg-blue-600 bg-opacity-90 text-white p-4 md:p-6 rounded-lg w-4/5 md:w-1/3">
          <h3 className="text-sm md:text-base font-medium">0{current + 1}</h3>
          <h2 className="text-lg md:text-2xl font-semibold mb-2">{slides[current].category}</h2>
          <p className="text-xs md:text-base mb-4">{slides[current].description}</p>
          <button
            onClick={handleViewMore}
            className="text-white underline text-sm md:text-base"
          >
            View More →
          </button>
        </div>
      </div>
    </section>
  );
}
