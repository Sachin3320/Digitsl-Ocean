import React from 'react';
import auditoriumSol from '../../assets/Services/auditoriumSol.png';
import conferenceSol from '../../assets/Services/conferenceSol.png';
import podcast from '../../assets/Services/podcast.png';
import signatureSol from '../../assets/Services/signatureSol.png';
import studioHybrid from '../../assets/Services/studioHybrid.png';
import fireSafety from '../../assets/Services/fireSafety.png';

const OurServices = () => {
  return (
    <div className="h-[1200px] p-4 md:p-6 bg-red-500">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-[4vh] md:text-5xl font-bold">Our Services</h1>
        <p className="text-[2vh] md:text-xl font-semibold text-neutral-700">
          Tailored Audio-Visual Solutions for Seamless Communication and Innovation.
        </p>
      </div>

      {/* Content Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-2">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Large Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={podcast} alt="podcast" className="w-full h-full object-cover" />
          </div>

          {/* Two Smaller Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={studioHybrid} alt="studioHybrid" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={conferenceSol} alt="conferenceSol" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Two Smaller Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={signatureSol} alt="signatureSol" className="w-full h-full object-contain" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={fireSafety} alt="fireSafety" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Large Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={auditoriumSol} alt="auditoriumSol" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
