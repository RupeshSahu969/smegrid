import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Carousel API endpoints
export const fetchCarouselSlides = () => API.get('/carousel');
export const fetchCarouselSlide = (id) => API.get(`/carousel/${id}`);
export const createCarouselSlideWithImage = (formData) => API.post('/carousel/upload/image', formData);
export const createCarouselSlideWithVideo = (formData) => API.post('/carousel/upload/video', formData);
export const updateCarouselSlideWithImage = (id, formData) => API.put(`/carousel/${id}/update/image`, formData);
export const updateCarouselSlideWithVideo = (id, formData) => API.put(`/carousel/${id}/update/video`, formData);
export const deleteCarouselSlide = (id) => API.delete(`/carousel/${id}`);

// Service API endpoints
export const fetchServices = () => API.get('/services');
export const fetchService = (id) => API.get(`/services/${id}`);
export const createService = (formData) => API.post('/services', formData);
export const updateService = (id, formData) => API.put(`/services/${id}`, formData);
export const deleteService = (id) => API.delete(`/services/${id}`);

export default API;
