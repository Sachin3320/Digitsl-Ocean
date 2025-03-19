import React from "react";
import "../../index.css";
import bgImage from "../../assets/heroImage.png";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white">
        <div className="text-2xl font-bold">
          DIGITAL WISDOM <br />
          <span className="ml-4 text-lg font-thin tracking-widest">
            PRIVATE LIMITED
          </span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            We-Design
          </a>
        </div>
        <button className="bg-[#21697D] px-4 py-2 rounded-md">
          Contact Us
        </button>
      </nav> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h3 className="text-xl md:text-lg font-semibold mb-4">Who We Are?</h3>
        <h1 className="text-2xl md:text-3xl font-semibold">
          EMPOWERING FOOD STARTUPS{" "}
          <span className="text-blue-100">
            WITH KNOWLEDGE, STRATEGY, AND SUCCESS!
          </span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Deliver crystal-clear sound in classrooms with premium audio systems
          designed to maximize engagement and comprehension.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
