import { Briefcase, Code2, Laptop } from "lucide-react";

const experiences = [
  {
    title: "Secretariat Division Staff",
    org: "Computer Systems Student Association, Sriwijaya University",
    period: "March 2025 – December 2025",
    desc: "Managed administrative correspondence, maintained member database systems, and prepared proposals and accountability reports.",
    skills: ["Administration", "Documentation", "Team Coordination"],
    icon: <Briefcase size={25} />,
  },
  {
    title: "Frontend Member",
    org: "Google Developer Groups on Campus, Universitas Sriwijaya",
    period: "January 2026 – Present",
    desc: "Built interactive and responsive web applications using modern frontend technologies and UI/UX principles.",
    skills: ["React", "Tailwind", "Firebase", "UI/UX"],
    icon: <Code2 size={25} />,
  },
  {
    title: "Laboratory Assistant",
    org: "Lab. Internet Programming, Faculty of Computer Science, Sriwijaya University",
    period: "March 2026 – Present",
    desc: "Guided students in web development practicum sessions and supported structured learning environments.",
    skills: ["Teaching", "Mentoring"],
    icon: <Laptop size={25} />,
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
             My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Organizational Journey
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Experiences that shaped my leadership, collaboration, and technical growth.
            </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-slate-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-8 relative group">

              {/* ICON */}
              <span className="absolute -left-[18px] flex items-center justify-center w-9 h-9 
                               bg-gradient-to-r from-blue-500 to-purple-600 
                               rounded-full ring-8 ring-slate-950 
                               group-hover:scale-110 transition duration-300">
                {exp.icon}
              </span>

              {/* CARD */}
              <div className="bg-slate-900 border border-slate-800 
                              rounded-xl p-7 shadow-md 
                              hover:border-blue-500/40 
                              hover:shadow-blue-500/10 
                              transition duration-300">

                <h3 className="text-xl font-semibold text-white mb-1">
                  {exp.title}
                </h3>

                <p className="text-blue-400 text-sm mb-2">
                  {exp.org}
                </p>

                <p className="text-gray-400 text-sm mb-4">
                  {exp.period}
                </p>

                <p className="text-gray-300 leading-relaxed mb-5">
                  {exp.desc}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full 
                                 bg-blue-500/10 text-blue-400 
                                 border border-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;