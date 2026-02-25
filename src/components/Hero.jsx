const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900 pt-16"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl w-full">
        
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:gap-12">
          
          {/* TEXT AREA */}
          <div className="text-center lg:justity-center lg:w-1/2">
            
            <span className="bg-blue-900 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mb-6 border border-blue-700">
              Open for Internship
            </span>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
              Halo, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Anjelia Hidayat
              </span>
            </h1>

            <p className="mb-2 text-lg font-semibold text-gray-300">
              Computer Engineering, Sriwijaya University
            </p>

            <p className="mb-8 text-lg font-normal text-gray-400">
              Possess technical expertise in Web Development, Network Administration, and Data Mining, with organizational experience gained through active involvement in the Student Association (HIMA). Accustomed to working in a structured, collaborative, and solution-oriented environment.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 lg:justify-center sm:space-x-4">
              <a
                href="#projects"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-300 rounded-lg border border-gray-700 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE AREA */}
<div className="mb-10 lg:mb-0 lg:w-1/2 flex justify-center">
  <img
    src="/image/ppweb.jpeg"
    alt="Anjelia Hidayat"
    className="w-33 sm:w-40 md:w-56 lg:w-72 aspect-square object-cover rounded-full border-4 border-blue-600 shadow-lg"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;