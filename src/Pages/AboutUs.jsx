import React from 'react'
import AboutUsComp from '../Components/AboutUs/AboutUsComp'
import Solutions from '../Components/AboutUs/Solutions'
import OurServices from '../Components/AboutUs/OurServices'

const AboutUs = () => {
  return (
   <>
 <div className='px-4 md:px-32 py-20'>
        
        <AboutUsComp/>
    </div>  
    <div className='p-3 md:px-40 py-3 '>
    <div>
        
    <Solutions/>
    </div>

   <div className='my-7'>
   <OurServices/>
   </div>
    

      </div> </>
    
  )
}

export default AboutUs