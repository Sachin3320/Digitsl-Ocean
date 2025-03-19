import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './pages/HeroSection'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
       <div className="w-full">
        <HeroSection />
        <AboutUs />
        <Footer />
        
      </div>
    </BrowserRouter>
   
  )
}

export default App