import React from "react";
// import TrustedBy from "../components/AboutUs/AboutOracle";
// import AboutSection1 from "../components/InteractiveLearningSolutions/AboutSection1";
import WhoWeAre from "../components/InteractiveLearningSolutions/WhoWeAre";
import AdvantagesSection from "../components/InteractiveLearningSolutions/AdvantagesSection";
import InteractiveLearning from "../components/InteractiveLearningSolutions/InteractiveLearning";
import WhyChooseUs from "../components/InteractiveLearningSolutions/WhyChooseUs";


const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Main Content Sections */}
      <div className="w-full flex flex-col gap-12 items-center">
        
        {/* First WhoWeAre Component (Normal Layout) */}
        <div className="max-w-screen-lg w-full mt-12">
          <WhoWeAre />
        </div>

        {/* Second WhoWeAre Component (Reversed Layout) */}
        <div className="max-w-screen-lg w-full">
          <WhoWeAre reverse={true} />
        </div>

        <div className="max-w-screen-lg w-full">
        <AdvantagesSection />
        </div>


        <div className="max-w-screen-lg w-full">
        <InteractiveLearning />
        </div>
        <div className="max-w-screen-lg w-full">
        <WhyChooseUs />

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
