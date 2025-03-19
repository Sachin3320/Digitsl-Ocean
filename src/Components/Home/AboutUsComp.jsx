// import React from "react";
// import micImage from "../../assets/micImage.svg";

// const AboutUsComp = () => {
//   return (
//     <div className="grid  grid-cols-1 md:grid-cols-[50%_auto] gap-8 md:gap-12 lg:gap-24 justify-center px-2 md:px-6">
//       <div className=" flex flex-col gap-3 w-[94%] space-y-[3vh]">
//         <h1 className="text-[3vh] font-semibold">ABOUT US</h1>
//         <h1 className="text-[2vh] font-semibold">
//           Empowering Innovation with Tailored Audio-Visual Solutions for Every
//           Need!
//         </h1>
//         <p className=" text-[2vh] text-neutral-600">
//           We empower innovation by providing customized audio-visual solutions
//           that cater to your specific needs. Whether for business, education, or
//           entertainment, our tailored systems enhance communication,
//           collaboration, and experience, helping you stay ahead in a rapidly
//           evolving world.
//         </p>
//         <button className="bg-[#21697D] px-2 md:px-4 py-2 text-white w-[30%] text-[2vh] rounded-sm hover:scale-105 active:scale-95">
//           {" "}
//           Explore
//         </button>
//       </div>
//       <div className="">
//         <img src={micImage} alt="micImage" className="object-cover"></img>
//       </div>
//     </div>
//   );
// };

// export default AboutUsComp;

import React from "react";
import micImage from "../../assets/micImage.svg";

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
          src={micImage}
          alt="Mic"
          className="w-full h-[400px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUsComp;
