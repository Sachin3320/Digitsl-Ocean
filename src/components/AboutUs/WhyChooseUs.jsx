import React from "react";
import whyChooseUs from "../../assets/aboutUsImage/whyChooseUs.png";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen md:min-h-[60vh] flex items-center justify-center bg-white px-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={whyChooseUs}
            alt="Why Choose Us"
            className="max-h-[72vh]  w-full object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl font-bold text-neutral-800">Who we are</h1>
          <h2 className="text-lg font-semibold text-gray-700">
          Empowering Food Businesses with Education, Strategy, and Sustainable Growth.
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
          We're a hospitality-focused agency dedicated to empowering food
          businesses through education and strategic support. Our mission
          is to help startups thrive in the competitive food industry, providing
          the tools and guidance needed for sustainable growth.

          </p>
          <button className="bg-[#21697D] px-4 py-2 text-white text-lg rounded-sm hover:scale-105 active:scale-95 transition duration-500 w-[40%] md:w-[30%]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;