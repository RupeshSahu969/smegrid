import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Product from '../../components/Product';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    details: '',
    order: 0,
    isActive: true
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (res.data.success) {
        // Process products to ensure image URLs are properly formatted for display
        const processedProducts = res.data.data.map(product => ({
          ...product,
          // Ensure image URLs are properly formatted
          image: product.image && !product.image.startsWith('http') ? 
            `http://localhost:5000${product.image}` : product.image
        }));
        setProducts(processedProducts);
        console.log('Fetched products:', processedProducts);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const resetForm = () => {
    setFormData({
      category: '',
      description: '',
      details: '',
      order: 0,
      isActive: true
    });
    setSelectedFile(null);
    setEditMode(false);
    setCurrentProductId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        // Convert boolean values to strings since FormData might handle them inconsistently
        if (typeof formData[key] === 'boolean') {
          data.append(key, formData[key].toString());
        } else {
          data.append(key, formData[key]);
        }
      });
      
      if (selectedFile) {
        data.append('image', selectedFile);
      }

      // Debug FormData contents
      console.log('Submitting product with data:');
      for (let pair of data.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      let res;
      
      if (editMode) {
        // Update existing product
        res = await axios.put(`http://localhost:5000/api/products/${currentProductId}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
      } else {
        // Create new product
        res = await axios.post('http://localhost:5000/api/products', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
      }

      if (res.data.success) {
        resetForm();
        fetchProducts();
        console.log('Product saved successfully:', res.data);
      } else {
        setError(res.data.error || 'An error occurred while saving the product');
        console.error('Error response:', res.data);
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error saving product:', err.response?.data || err.message || err);
      setError(err.response?.data?.error || err.response?.data?.message || err.message || 'Failed to save product');
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      category: product.category,
      description: product.description,
      details: product.details || '',
      order: product.order || 0,
      isActive: product.isActive !== false
    });
    setEditMode(true);
    setCurrentProductId(product.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }
    
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const res = await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (res.data.success) {
        fetchProducts();
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Failed to delete product');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="md:col-span-1">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                {editMode ? 'Edit Product' : 'Add New Product'}
              </h2>
              
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="3"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Details (Optional)
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">
                    Additional details about the product
                  </p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    accept="image/*"
                  />
                  {editMode && (
                    <p className="text-sm text-gray-500 mt-1">
                      Leave empty to keep the current image
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700 text-sm font-bold">Active</span>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : (editMode ? 'Update Product' : 'Add Product')}
                  </button>
                  
                  {editMode && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          
          {/* Products List Section */}
          <div className="md:col-span-2">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Products</h2>
              
              {loading && <p className="text-gray-500">Loading products...</p>}
              
              {!loading && products.length === 0 && (
                <p className="text-gray-500">No products found. Add your first product!</p>
              )}
              
              {!loading && products.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {product.image ? (
                              <img 
                                className="h-16 w-24 object-cover rounded"
                                src={product.image} 
                                alt={product.category}
                                onError={(e) => {
                                  console.error('Image failed to load:', product.image);
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/150?text=Image+Error';
                                }}
                              />
                            ) : (
                              <div className="h-16 w-24 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                                No Image
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{product.category}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{product.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{product.order}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {product.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleEdit(product)}
                              className="text-indigo-600 hover:text-indigo-900 mr-3"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;
