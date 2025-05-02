// src/App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhySmegrid from './components/WhySmegrid';
import ProductDetails from './components/ProductDetails';

// Admin Components
import AdminLayout from './components/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import CarouselManagement from './pages/admin/CarouselManagement';
import ServiceManagement from './pages/admin/ServiceManagement';
import ExploreServices from './components/ExploreServices';

// Layout component for public routes
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="min-h-screen pt-16 md:pt-20">
      {children}
    </div>
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="carousel" element={<CarouselManagement />} />
        <Route path="services" element={<ServiceManagement />} />
      </Route>
      
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/why-smsgrid" element={<PublicLayout><WhySmegrid /></PublicLayout>} />
      <Route path="/product-details" element={<PublicLayout><ProductDetails /></PublicLayout>} />
      <Route path="/services/details" element={<PublicLayout><ExploreServices /></PublicLayout>} />
    </Routes>
  );
}

export default App;