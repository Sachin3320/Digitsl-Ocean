import AVsolution from '../../assets/aboutUsImage/AVsolution.png'
import expertSol from '../../assets/aboutUsImage/expertSol.png'


const Solutions = () =>  {
  return (
    <div className="w-full p-2 md:p-6 rounded-2xl  bg-[#faf1f1]">
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-12">
        {/* Tailored AV Solutions - Will appear first on mobile */}
        <div className="w-full md:w-2/5 flex justify-center i order-first md:order-last mb-8 md:mb-0  ">
          <div className="flex flex-col justify-center gap-3 space-y-4 md:space-y-6 p-4">
            <h1 className="text-[3vh] md:text-4xl font-semibold">Tailored AV Solutions: </h1>
            <h1 className="text-[2vh] md:text-3xl font-semibold">Transform Your Space Into a Smart Environment</h1>
            <p className="text-[2vh] md:text-xl text-neutral-600">
              Transform your space with smart technology for enhanced convenience, efficiency, and comfort. Enjoy
              automated lighting, climate control, and advanced security tailored to your needs.
            </p>
          </div>
        </div>

        {/* Grid Section - Will appear second on mobile */}
        <div className="w-full md:w-3/5 order-last md:order-first">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* img 1 */}
            <div
              className="bg-gray-300 rounded-lg shadow-lg overflow-hidden 
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
            >
              <img
                src={AVsolution}
                alt="AV Solution"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* AV SOLUTION */}
            <div
              className="bg-white rounded-lg shadow-lg 
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:bg-[#cdbbbb]"
            >
              <div className="flex flex-col gap-4 md:gap-10 text-black font-bold p-4 text-[2vh] md:px-8 md:py-12">
                <h1 className="text-xl md:text-2xl font-semibold">AV SOLUTION</h1>
                <p className="text-neutral-600">
                  Immersive & Interactive AV solutions offer a seamless blend of audio-visual technology, creating an
                  immersive and interactive experience for your business meetings, classrooms, or events.
                </p>
                <button className="bg-[#21697D] px-4 py-2 text-white w-[120px] md:w-[30%] rounded-sm hover:scale-105 active:scale-95 cursor-pointer duration-500">
                  Explore
                </button>
              </div>
            </div>

            {/* EXPERT SOLUTION */}
            <div
              className="bg-white rounded-lg shadow-lg 
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:bg-[#cdbbbb]"
            >
              <div className="flex flex-col gap-4 md:gap-10 text-black font-bold p-4 text-[2vh] md:px-8 md:py-12">
                <h1 className="text-xl md:text-2xl font-semibold">EXPERT SOLUTION</h1>
                <p className="text-neutral-600">
                  Expert solutions provide specialized knowledge, innovative strategies, and professional services to
                  solve complex challenges efficiently across various industries and domains.
                </p>
                <button className="bg-[#21697D] px-4 py-2 text-white w-[120px] md:w-[30%] rounded-sm hover:scale-105 active:scale-95 cursor-pointer duration-500">
                  Explore
                </button>
              </div>
            </div>

            {/* img 2 */}
            <div
              className="bg-gray-300 rounded-lg shadow-lg overflow-hidden 
                          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
            >
              <img
                src={expertSol}
                alt="Expert Solution"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions