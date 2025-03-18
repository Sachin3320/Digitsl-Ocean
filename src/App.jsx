import React from 'react'
import HeroSection from './Pages/HeroSection'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Testimonial from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div className='w-full'>
      <HeroSection/>
      <AboutUs/>
      <ContactUs/>
      <Testimonial/>
    </div>
  )
}

export default App