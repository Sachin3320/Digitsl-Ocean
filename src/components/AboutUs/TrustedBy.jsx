import React from "react";
import customerImg from "../../assets/trustedBy/customer.png";
import leadershipImg from "../../assets/trustedBy/leadership.png";
import newsroomImg from "../../assets/trustedBy/newsroom.png";
import corporateImg from "../../assets/trustedBy/corporate.png";
import careersImg from "../../assets/trustedBy/career.png";
import investorImg from "../../assets/trustedBy/investor.png";


const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img src={image} alt={title} className="w-12 h-12 mb-2" />
      <h3 className="font-semibold text-lg mt-2">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

const TrustedBy = () => {
  return (
    
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 shadow-lg text-center">
        <h4 className="text-sm text-gray-500">About Oracle</h4>
        <h2 className="text-xl font-bold mt-2">
          Oracle: Empowering Innovation, Transforming Business.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card
            image={customerImg}
            title="Customer Highlights"
            description="See how organizations of all sizes in all industries rely on Oracle to help them succeed."
          />
          <Card
            image={investorImg}
            title="Investor Relations"
            description="Access earnings results, SEC filings, presentations, and other financial information."
          />
          <Card
            image={leadershipImg}
            title="Leadership"
            description="Learn about our executive team and board of directors."
          />
          <Card
            image={newsroomImg}
            title="Oracle newsroom"
            description="Catch up on the latest company news and updates."
          />
          <Card
            image={corporateImg}
            title="Corporate responsibility"
            description="Read about our efforts in education, philanthropy, volunteering, sustainability, and more."
          />
          <Card
            image={careersImg}
            title="Careers"
            description="Create the future with us. Join the team that's innovating solutions to global challenges."
          />
        </div>
      </div>
    
  );
};

export default TrustedBy;
