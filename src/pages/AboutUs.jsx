import React from "react";
import TrustedBy from "../components/AboutUs/AboutOracle";
import WhyChooseUs from "../components/AboutUs/WhoWeAre";
import AboutSection1 from "../components/AboutUs/AboutSection1";
import WhoWeAre from "../components/AboutUs/WhoWeAre";

const AboutUs = () => {
  return (
    <div className="w-full">
      

      {/* Main Content Sections */}
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="max-w-screen-lg w-full">
          <AboutSection1 />
        </div>

      <div className="max-w-screen-lg w-full">
          
          <WhoWeAre />

        </div>

        <div className="max-w-screen-lg w-full ">
          
        </div>


      </div>
    </div>
  );
};

export default AboutUs;