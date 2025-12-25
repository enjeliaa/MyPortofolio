const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 pt-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        
        <span className="bg-blue-900 text-blue-300 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mb-6 border border-blue-700">
          Open for Internship
        </span>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
          Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Anjelia Hidayat</span>
        </h1>

        <p className="mb-2 text-lg font-semibold text-gray-300">
          Mahasiswa Sistem Komputer @ Universitas Sriwijaya
        </p>
        
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">
          Memiliki keahlian teknis dalam Web Development, Network Administration, dan Data Mining. Berpengalaman dalam administrasi organisasi melalui Himpunan Mahasiswa (HIMA).
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#projects" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900 transition-all duration-300 hover:scale-105">
            Lihat Project
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="#contact" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-300 rounded-lg border border-gray-700 hover:text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-700 transition-all duration-300">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;