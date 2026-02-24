const Projects = () => {
  const portfolioItems = [
    { 
      title: "Dynamic Web Rating System", 
      tech: ["HTML", "CSS", "Python", "Flask"], 
      desc: "Full-stack web application for product ratings and reviews. Equipped with an Admin Dashboard for user data management.",
      
      image: "/image/fullstack.jpg", 

      github: "https://github.com/enjeliaa/Web-Rating-Fullstack-Portofolio",
      demo: "#"
    },
    { 
      title: "Server Load Balancing", 
      tech: ["Nginx", "Linux Almalinux", "SSH"], 
      desc: "Optimized server performance using load balancing and remote security management via SSH.",
      image: "/image/load-balancing.jpg",
      github: "https://github.com/enjeliaa/project-Load-Balancing-metode-Round-Robin",
      demo: "#"
    },
    { 
      title: "Data Mining Analysis", 
      tech: ["Python", "Pandas"], 
      desc: "Analyzed large datasets to identify business trend patterns using data mining algorithms.",
      image: "/image/data-analys.jpg",
      github: "https://github.com/enjeliaa/Project-data-mining",
      demo: "#"
    },
    { 
      title: "Birthday Greeting Web", 
      tech: ["HTML", "CSS", "JavaScriptX"], 
      desc: "A responsive web application that sends personalized birthday greetings to users.",
      image: "/image/webhbd.png",
      github: "https://github.com/enjeliaa/birthday-greeting",
      demo: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world technical case studies built during my academic journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              
              <div className="relative overflow-hidden h-48 w-full bg-slate-700">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
               
                <div className="absolute inset-0 hidden items-center justify-center bg-slate-800 text-gray-500 text-sm">
                  Image not found
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
                            
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-slate-700/50">
                  <a href={item.github} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-800 transition-colors">
                    <svg className="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Code
                  </a>
                  {item.demo !== "#" && (
                    <a href={item.demo} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-900 transition-colors">
                      Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;