import React from "react";
import AboutUsComp from "../components/AboutUs/AboutUsComp";
import Solutions from "../components/AboutUs/Solutions";
import OurServices from "../components/AboutUs/OurServices";
import TrustedBy from "../components/AboutUs/TrustedBy";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";

const AboutUs = () => {
  return (
    <div className="w-full">
      

      {/* Main Content Sections */}
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="max-w-screen-lg w-full">
          <Solutions />
        </div>

        {/* About Us Section */}
      {/* <div className="px-6 md:px-12 lg:px-32 py-16 md:py-20">
        <AboutUsComp />
      </div> */}

        

        

        <div className="max-w-screen-lg w-full">
          <WhyChooseUs />
        </div>

        <div className="max-w-screen-lg w-full ">
          <TrustedBy />
        </div>

        {/* <div className="max-w-screen-lg w-full">
          <OurServices />
        </div> */}

      </div>
    </div>
  );
};

export default AboutUs;