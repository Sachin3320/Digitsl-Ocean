import React from "react";
import heroImage from "../../assets/heroImage.png";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <img
        src={heroImage}
        alt="Hero Banner"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
        <div className=" w-full max-w-[100%] md:max-w-[50%] mx-auto p-4 gap-12">
          <h1 className="text-[4vh] font-semibold bg-gradient-to-r from-[#ffff] to-[#42A8c5] text-transparent bg-clip-text">
            Bridging Generations with Innovative AV Solutions!
          </h1>
          <p className="mt-4 text-[3vh] ">
            Seamlessly connect generations with cutting-edge AV solutions,
            combining modern technology with timeless communication, enhancing
            interactions, learning, and experiences for all ages.
          </p>
          <button className="border-2 md:border-4 border-white rounded-sm text-[2vh] px-[3vh] py-[1vh] mt-4">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
