import React, { useEffect, useState } from "react";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("productDetails"));
    setProduct(storedProduct);
  }, []);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.category}</h1>
      <img
        src={product.image}
        alt={product.category}
        className="w-full h-[300px] md:h-[500px] object-cover rounded-lg mb-6"
      />
      <p className="text-lg md:text-xl">{product.description}</p>
    </div>
  );
}
