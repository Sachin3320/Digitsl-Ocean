import React from "react";
import AboutUsComp from "../Components/AboutUs/AboutUsComp";
import Solutions from "../Components/AboutUs/Solutions";
import OurServices from "../Components/AboutUs/OurServices";
import TrustedBy from "../Components/AboutUs/TrustedBy";
import WhyChooseUs from "../Components/AboutUs/WhyChooseUs";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* About Us Section */}
      <div className="px-6 md:px-20 lg:px-40 py-16 md:py-20">
        <AboutUsComp />
      </div>

      {/* Main Content Sections */}
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="max-w-screen-lg w-full">
          <Solutions />
        </div>

        <div className="max-w-screen-lg w-full">
          <OurServices />
        </div>

        <div className="max-w-screen-lg w-full ">
          <TrustedBy />
        </div>

        <div className="max-w-screen-lg w-full">
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
