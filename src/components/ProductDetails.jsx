import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // First try to get product from localStorage (for backward compatibility)
        const storedProduct = JSON.parse(localStorage.getItem("productDetails"));
        
        if (storedProduct) {
          console.log('Using product from localStorage:', storedProduct);
          setProduct(storedProduct);
          setLoading(false);
          return;
        }
        
        // If no product in localStorage and we have an ID, fetch from API
        if (id) {
          console.log('Fetching product from API with ID:', id);
          const response = await axios.get(`http://localhost:5000/api/products/${id}`);
          
          if (response.data.success) {
            console.log('API response:', response.data);
            setProduct(response.data.data);
          } else {
            setError('Product not found');
          }
        } else {
          setError('Product ID not provided');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.category}</h1>
      <img
        src={typeof product.image === 'string' && product.image.startsWith('/') ? 
          `http://localhost:5000${product.image}` : product.image}
        alt={product.category}
        className="w-full h-[300px] md:h-[500px] object-cover rounded-lg mb-6"
        onError={(e) => {
          console.error('Image failed to load:', product.image);
          // Fallback to default image if loading fails
          if (product.category.includes('Building')) e.target.src = product1;
          else if (product.category.includes('Scrap')) e.target.src = product2;
          else e.target.src = product3;
        }}
      />
      <p className="text-lg md:text-xl mb-6">{product.description}</p>
      
      {/* Display additional details if available */}
      {product.details && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
          <p className="text-lg">{product.details}</p>
        </div>
      )}
    </div>
  );
}
