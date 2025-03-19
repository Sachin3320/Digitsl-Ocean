import AVsolution from "../../assets/aboutUsImage/AVsolution.png";
import expertSol from "../../assets/aboutUsImage/expertSol.png";

const Solutions = () => {
  return (
    <div className="min-h-[70vh] w-full p-8 md:p-6 rounded-2xl bg-[#faf1f1] flex flex-col">
      <div className="flex  flex-col lg:flex-row-reverse w-full gap-6 md:gap-6 lg:gap-12 flex-1">
        {/* Left Side - Text Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center p-4">
          <h1 className="text-xl md:text-3xl font-semibold mb-2 mt-3">
            Tailored AV Solutions:
          </h1>
          <h1 className="text-lg md:text-2xl font-semibold mt-3">
            Transform Your Space Into a Smart Environment
          </h1>
          <p className="text-sm md:text-lg text-neutral-600 mt-6">
            Transform your space with smart technology for enhanced convenience,
            efficiency, and comfort. Enjoy automated lighting, climate control,
            and advanced security tailored to your needs.
          </p>
        </div>

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
              AV SOLUTION
            </h1>
            <p className="text-neutral-600 mt-3">
              Immersive & Interactive AV solutions offer a seamless blend of
              audio-visual technology, creating an immersive and interactive
              experience for your business meetings, classrooms, or events.
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
              EXPERT SOLUTION
            </h1>
            <p className="text-neutral-600 mt-3">
              Expert solutions provide specialized knowledge, innovative
              strategies, and professional services to solve complex challenges
              efficiently across various industries and domains.
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
      </div>
    </div>
  );
};

export default Solutions;
