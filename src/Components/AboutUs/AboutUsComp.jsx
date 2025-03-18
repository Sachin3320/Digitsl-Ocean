import React from 'react'
import micImage from '../../assets/micImage.svg'

const AboutUsComp = () => {
  return (
    <div className='grid  grid-cols-1 md:grid-cols-[45%_auto] gap-8 md:gap-24 justify-center px-2 md:px-6'>
        <div className=' flex flex-col gap-3 w-[94%] space-y-[3vh]'>
            <h1 className='text-[3vh] font-semibold'>ABOUT US</h1>
            <h1 className='text-[2vh] font-semibold'>Empowering Innovation with Tailored Audio-Visual Solutions for Every Need!</h1>
            <p className=' text-[2vh] text-neutral-600'>We empower innovation by providing customized audio-visual solutions that cater to your specific needs. Whether for business, education, or entertainment, our tailored systems enhance communication, collaboration, and experience, helping you stay ahead in a rapidly evolving world.</p>
            <button className='bg-[#21697D] px-2 md:px-4 py-2 text-white w-[30%] text-[2vh] rounded-sm hover:scale-105 active:scale-95'> Explore</button>

        </div>
        <div className=''>
            <img src = {micImage}  alt = "micImage" className='object-cover'></img>
        </div>

    </div>
  )
}

export default AboutUsComp