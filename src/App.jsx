import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      
      {/* Footer Contact sesuai CV */}
      <footer id="contact" className="bg-slate-950 text-center py-12 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Hubungi Saya</h2>
        <div className="flex flex-col items-center justify-center space-y-4">
          <a href="mailto:enjelhidayat@gmail.com" className="flex items-center space-x-2 text-xl font-medium text-blue-400 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>enjelhidayat@gmail.com</span>
          </a>
          <div className="text-gray-500">
            <p>Palembang, Sumatera Selatan</p>
            <p>+62 831 7188 5749</p>
          </div>
          <a href="https://www.linkedin.com/in/anjelia-hidayat" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white underline mt-4">
            LinkedIn Profile
          </a>
        </div>
        <p className="text-gray-700 text-sm mt-10">© 2025 Anjelia Hidayat.</p>
      </footer>
    </div>
  );
}

export default App;