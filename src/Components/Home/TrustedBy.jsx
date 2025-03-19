import React from "react";
import logo1 from "../../assets/trustedBy/logo1.png";
import logo2 from "../../assets/trustedBy/logo2.png";
import logo3 from "../../assets/trustedBy/logo3.png";
import logo4 from "../../assets/trustedBy/logo4.png";
import logo5 from "../../assets/trustedBy/logo5.png";
import logo6 from "../../assets/trustedBy/logo6.png";
import logo7 from "../../assets/trustedBy/logo7.png";

const TrustedBy = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="relative min-h-[30vh] flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-4xl font-semibold text-black">
            Trusted by Companies and Organisations
          </h1>
        </div>

        {/* Scrolling Logo Section with Fade Effect */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Infinite Scrolling Logos */}
          <div className="flex whitespace-nowrap animate-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Trusted company ${(index % logos.length) + 1}`}
                className="h-16 md:h-20 object-contain mx-6"
              />
            ))}
          </div>

          {/* Right Fade Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
