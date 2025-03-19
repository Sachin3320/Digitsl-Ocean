import React from "react";
import HeroBanner from "../Components/AboutUs/HeroBanner";
import WhoWeAre from "../Components/AboutUs/WhoWeAre";
import AboutSection1 from "../Components/AboutUs/AboutSection1";
import History from "../Components/AboutUs/History";

const AboutUs = () => {
  return (
    <div className="">
      <div className="h-full w-full">
        <HeroBanner />
      </div>
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
            <History />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
