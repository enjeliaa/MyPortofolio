const Experience = () => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Pengalaman Organisasi</h2>
        
        <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-10">
          
          <div className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-slate-900">
              <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Staff Divisi Kesekretarian
              <span className="bg-blue-900 text-blue-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ms-3">HIMA Sistem Komputer Unsri</span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Maret 2025 - Sekarang</time>
            <p className="mb-4 text-base font-normal text-gray-400">
              Mengelola korespondensi administrasi internal & eksternal, memelihara sistem pengarsipan database anggota, serta menyusun proposal dan laporan pertanggungjawaban kegiatan mahasiswa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;