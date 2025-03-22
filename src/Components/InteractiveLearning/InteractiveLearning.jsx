import React from "react";
import { motion } from "framer-motion";
import activeLearning from "../../assets/interactiveLearning/career.png";
import simplifiedConcepts from "../../assets/interactiveLearning/corporate.png";
import improvedRetention from "../../assets/interactiveLearning/customer.png";
import collaboration from "../../assets/interactiveLearning/investor.png";

const advantages = [
  {
    id: 1,
    title: "Active Learning",
    description:
      "Hands-on participation in lessons enhances engagement and understanding.",
    image: activeLearning,
  },
  {
    id: 2,
    title: "Simplified Concepts",
    description:
      "Visual and interactive tools make even complex topics easy to grasp.",
    image: simplifiedConcepts,
  },
  {
    id: 3,
    title: "Improved Retention",
    description:
      "Active involvement leads to better memory retention and application.",
    image: improvedRetention,
  },
  {
    id: 4,
    title: "Collaboration",
    description:
      "Group activities and collaborative tools encourage teamwork and communication skills.",
    image: collaboration,
  },
  {
    id: 5,
    title: "Wealth Creation",
    description:
      "Group activities and collaborative tools encourage teamwork and communication skills.",
    image: collaboration,
  },
];

const InteractiveLearning = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Advantages of Interactive Learning
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {advantages.map((advantage) => (
          <motion.div
            key={advantage.id}
            drag
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{ scale: 1.1, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            className="w-64 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={advantage.image}
              alt={advantage.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold">{advantage.title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              {advantage.description}
            </p>
            <button className="mt-4 px-4 py-2 bg-[#21697D] text-white rounded-md hover:scale-105 transition">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveLearning;
