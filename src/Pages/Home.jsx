import React from 'react'
import Solutions from '../Components/Home/Solutions'
import OurServices from '../Components/Home/OurServices'
import TrustedBy from '../Components/Home/TrustedBy'
import WhyChooseUs from '../Components/Home/WhyChooseUs'  
import Contact from '../Components/Home/Contact'
import AboutUsComp from '../Components/Home/AboutUsComp'
import HeroBanner from '../Components/Home/HeroBanner'




const Home = () => {
  return (
    <div>
    <div className='h-full w-full'>
        <HeroBanner />
    </div>


{/* About us Section */}
    <div className="px-6 md:px-12 lg:px-32 py-16 md:py-20">
        <AboutUsComp />
      </div>

      <div className="w-full flex flex-col gap-12 items-center">
        <div className="max-w-screen-lg w-full">
          <Solutions />
        </div>

        <div className="max-w-screen-lg w-full">
          <OurServices />
        </div>

        <div className="max-w-screen-lg w-full ">
          <TrustedBy />
        </div>

        <div className="max-w-screen-lg w-full">
          <WhyChooseUs />
        </div>
      </div>
            {/* contact us */}

      <div>
        <Contact/>
     </div>

    </div>
  )
}

export default Home