import React from "react";
import MyImage from "../../assets/aboutUsImage/expertSol.png";
const AboutUsComp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[40%_auto] gap-8 md:gap-12 lg:gap-24 px-4 md:px-8 lg:px-12 items-center">
      {/* Text Content */}
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <h1 className="text-xl md:text-xl font-semibold">ABOUT US</h1>
        <h2 className="text-lg md:text-lg font-semibold">
          Empowering Innovation with Tailored Audio-Visual Solutions for Every
          Need!
        </h2>
        <p className="text-base md:text-base text-neutral-600">
          We empower innovation by providing customized audio-visual solutions
          that cater to your specific needs. Whether for business, education, or
          entertainment, our tailored systems enhance communication,
          collaboration, and experience, helping you stay ahead in a rapidly
          evolving world.
        </p>
        <button className="bg-[#21697D] px-4 py-2 text-white min-w-[120px] rounded-sm hover:scale-105 active:scale-95 transition-transform">
          Explore
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={MyImage}
          alt="Mic"
          className="w-full h-[400px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUsComp;
