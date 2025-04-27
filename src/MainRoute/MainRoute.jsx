import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Services from '../components/Service'
import Contact from '../components/Contact'

const MainRoute = () => {
  return (
    <div>
       <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/" element={<Navbar />} />
      <Route path="/" element={<Navbar />} />
      <Route path="/" element={<Navbar />} /> */}
    </Routes>
    </div>
  )
}

export default MainRoute
