// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhySmegrid from './components/WhySmegrid';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 md:pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-smsgrid" element={<WhySmegrid />} />
          <Route path="/product-details" element={<ProductDetails  />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;