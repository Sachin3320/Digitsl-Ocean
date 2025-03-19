import React from 'react'
import From from '../Components/ContactUs/From'
import SupportSection from '../Components/ContactUs/SupportSection'
import FAQSection from '../Components/ContactUs/FAQSection'

const ContactUs = () => {
  return (
    <div className='w-full h-full'>
      <div>
      <From/>
      </div>
      <div>
      <SupportSection/>
      </div>
      <div>
      <FAQSection/>
      </div>
    </div>
  )
}

export default ContactUs
