import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './pages/HeroSection'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/OurHistory'
import Footer from './components/footer/Footer';
// import OurServices from './components/AboutUs/OurServices';

const App = () => {
  return (
    <BrowserRouter>
       <div className="w-full">
        <HeroSection />
        <AboutUs />
        <ContactUs />
        {/* <OurServices /> */}
        <Footer />
        
      </div>
    </BrowserRouter>
   
  )
}

export default App