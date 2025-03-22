import React from "react";
import understandingNeeds from "../../assets/whyChooseUs/career.png";
import customizedSolutions from "../../assets/whyChooseUs/corporate.png";
import seamlessInstallation from "../../assets/whyChooseUs/customer.png";
import handsOnTraining from "../../assets/whyChooseUs/investor.png";

const solutions = [
  {
    id: 1,
    title: "Understanding Your Needs",
    description:
      "We start with an in-depth consultation to tailor solutions for classrooms, corporate training, or hybrid learning, ensuring a perfect fit for your needs.",
    image: understandingNeeds,
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "Our team creates tailored setups, considering all factors such as space, user preferences, and desired outcomes. Every tool and system is carefully selected and optimized to enhance the learning experience.",
    image: customizedSolutions,
  },
  {
    id: 3,
    title: "Seamless Installation",
    description:
      "From start to finish, we handle the entire installation process, ensuring everything is up and running smoothly without hassle.",
    image: seamlessInstallation,
  },
  {
    id: 4,
    title: "Hands-On Training",
    description:
      "To ensure you make the most of your new interactive systems, we provide comprehensive training for educators and staff, enabling them to use the tools effectively from day one.",
    image: handsOnTraining,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side - Text Section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Choose Our Solutions?
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of interactive learning systems
            designed to meet the diverse needs of educators and trainers. Our
            solutions are backed by years of experience and expertise, ensuring
            that you receive the best tools and support for your teaching
            environment.
          </p>
        </div>

        {/* Right Side - Card Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="w-10 h-10"
              />
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
