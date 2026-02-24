import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nl2tx31",
        "template_e0x1acq",
        form.current,
        "5tIrnx1kTNVBPDYWK"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>

      <footer
        id="contact"
        className="bg-slate-950 border-t border-slate-800 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Touch
              </span>
            </h2>
            <p className="text-gray-400 mt-4">
              Feel free to reach out for collaboration or just a friendly hello 👋
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-400">
                  I'm open to internships, collaborations, or tech discussions.
                </p>
              </div>

              <div className="space-y-4 text-gray-400">
                <a
                  href="mailto:enjelhidayat@gmail.com"
                  className="block hover:text-blue-400 transition"
                >
                  📧 enjelhidayat@gmail.com
                </a>

                <p>📍 Palembang, Sumatera Selatan</p>
                <p>📱 +62 831 7188 5749</p>

                <a
                  href="https://www.linkedin.com/in/anjelia-hidayat"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-blue-400 transition"
                >
                  🔗 LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6 shadow-lg"
            >
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <p className="text-gray-600 text-center text-sm mt-20">
            © 2025 Anjelia Hidayat.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;