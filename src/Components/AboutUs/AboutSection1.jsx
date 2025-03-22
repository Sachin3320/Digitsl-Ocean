import AVsolution from "../../assets/aboutUsImage/AVsolution.png";
import expertSol from "../../assets/aboutUsImage/expertSol.png";

const AboutSection1 = () => {
  return (
    <div className="min-h-[70vh] w-full p-8 md:p-6 rounded-2xl bg-[#faf1f1] flex flex-col">
      <div className="flex  flex-col lg:flex-row-reverse w-full gap-6 md:gap-6 lg:gap-12 flex-1">
        {/* Left Side - Text Section */}
        

        {/* Right Side - Grid Section */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Image 1 */}
          <div
            className="bg-gray-300 rounded-lg shadow-lg overflow-hidden h-full 
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
          >
            <img
              src={AVsolution}
              alt="AV Solution"
              className="w-full h-full object-cover"
            />
          </div>

          {/* AV SOLUTION */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:bg-[#cdbbbb]"
          >
            <h1 className="text-xl md:text-2xl font-semibold mt-3">
            Scale
            </h1>
            <p className="text-neutral-600 mt-3">
            • US$53B in revenue in FY2024
            </p >
            <p className="text-neutral-600">
            • US$98B+ in R&D since FY2012
            
            </p>
            <p className="text-neutral-600">
            • US$110B+ spent on 150+ acquisitions
            
            </p>
            <p className="text-neutral-600">
            • 160,000 employees
            
            </p>
            
            <p className="text-neutral-600">
            • 29,000 consulting experts
            </p>
            <button className="bg-[#21697D] px-4 py-2 text-white rounded-md hover:scale-105 active:scale-95 transition mt-3">
              Explore
            </button>
          </div>

          {/* EXPERT SOLUTION */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:bg-[#cdbbbb]"
          >
            <h1 className="text-xl md:text-2xl font-semibold mt-3">
            Innovation
            </h1>
            <p className="text-neutral-600 mt-3">
            • World’s first autonomous database

            </p>

            <p className="text-neutral-600 ">
            • Industry’s broadest and deepest suite  of AI-powered cloud applications
            </p>
            

            <p className="text-neutral-600 ">
            • 5 million registered members of Oracle’s customer and developer communities
            </p>
            <button className="bg-[#21697D] px-4 py-2 text-white rounded-md hover:scale-105 active:scale-95 transition mt-3">
              Explore
            </button>
          </div>

          {/* Image 2 */}
          <div
            className="bg-gray-300 rounded-lg shadow-lg overflow-hidden h-full 
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
          >
            <img
              src={expertSol}
              alt="Expert Solution"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col justify-center p-4">
          {/* <h1 className="text-xl md:text-3xl font-semibold mb-2 mt-3">
            Tailored AV AboutSection1:
          </h1> */}
          <h1 className="text-lg md:text-2xl font-semibold mt-3">
          Four Decades of Innovation Building Industries for the Future!
          </h1>
          <p className="text-sm md:text-lg text-neutral-600 mt-6">
          With a rich history of delivering impactful innovations, we continue to shape industries by providing value to our customers, partners, and communities. Our commitment to progress drives meaningful change and fosters long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;