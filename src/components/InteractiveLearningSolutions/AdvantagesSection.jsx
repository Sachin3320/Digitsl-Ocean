import React from "react";
// import advantageImg from "../../assets/aboutUsImage/image.jpg"; // Replace with actual image
import advantageGridImg from "../../assets/aboutUsImage/expertSol.png"; // Replace with actual grid image

const AdvantagesSection = () => {
  return (
    <div className="w-full px-6 md:px-12 py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side - Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-3/5">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-2">
            <h2 className="text-lg font-semibold">Streamlined Teaching</h2>
            <p className="text-gray-600 text-sm mt-2">
              Interactive tools make lesson delivery more efficient and effective.
            </p>
            <div className="w-10 border-b-2 border-gray-600 mt-4"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-rotate-2">
            <h2 className="text-lg font-semibold">Real-Time Feedback</h2>
            <p className="text-gray-600 text-sm mt-2">
              Instantly gauge student understanding and adjust your approach as needed.
            </p>
            <div className="w-10 border-b-2 border-gray-600 mt-4"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-2">
            <h2 className="text-lg font-semibold">Time Efficiency</h2>
            <p className="text-gray-600 text-sm mt-2">
              Automated features such as assessments and interactive quizzes save valuable teaching time.
            </p>
            <div className="w-10 border-b-2 border-gray-600 mt-4"></div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-rotate-2">
            <h2 className="text-lg font-semibold">Time Efficiency</h2>
            <p className="text-gray-600 text-sm mt-2">
              Automated features such as assessments and interactive quizzes save valuable teaching time.
            </p>
            <div className="w-10 border-b-2 border-gray-600 mt-4"></div>
          </div>
        </div>

        {/* Right Side - Text & Images */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">
            Advantages of Our Smart Learning Solutions
          </h2>
          <p className="text-gray-700 text-sm">
            We don’t just provide products; we deliver experiences. Our interactive systems are designed with the specific needs of educators and trainers in mind, ensuring maximum value, effectiveness, and ease of use.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src={advantageGridImg}
              alt="Advantage"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <img
              src={advantageGridImg}
              alt="Advantage"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <img
              src={advantageGridImg}
              alt="Advantage"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <img
              src={advantageGridImg}
              alt="Advantage"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
