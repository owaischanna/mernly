import React from "react";
import { FaSearch, FaProjectDiagram, FaCode, FaRocket, FaShieldAlt, FaCheckDouble } from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Discovery & Strategy",
      desc: "Deep dive into business requirements and technical roadmaps.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Architecture & UI/UX",
      desc: "System blueprints and high-conversion interface design.",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: <FaCode />,
      title: "Agile Development",
      desc: "Rapid MERN & Next.js builds with live staging access.",
      color: "from-indigo-600 to-blue-500",
    },
    {
      icon: <FaCheckDouble />,
      title: "QA & Hardening",
      desc: "Rigorous testing, security audits, and performance tuning.",
      color: "from-emerald-600 to-teal-500",
    },
    {
      icon: <FaRocket />,
      title: "Deployment & Launch",
      desc: "CI/CD pipelines and cloud-ready production deployment.",
      color: "from-orange-600 to-amber-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Maintenance & Scale",
      desc: "Continuous monitoring and architectural scaling support.",
      color: "from-red-600 to-rose-500",
    },
  ];

  // We double the steps array to create a seamless infinite loop
  const loopSteps = [...steps, ...steps];

  return (
    <section className="py-32 bg-[#020617] text-white overflow-hidden relative" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20 relative z-10">
        <div className="space-y-4 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Workflow Loop
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic">Engineering Cycle.</span>
          </h2>
        </div>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-infinite-scroll whitespace-nowrap py-10 group-hover:pause">
          {loopSteps.map((step, i) => (
            <div 
              key={i} 
              className="inline-block w-[350px] mx-4 shrink-0"
            >
              <div className="relative p-8 rounded-[32px] bg-slate-900/40 backdrop-blur-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 h-full whitespace-normal">
                {/* Step Index Background */}
                <div className="text-[80px] font-black absolute -top-8 -left-2 text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                  {(i % steps.length) + 1}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-xl transition-transform duration-500 group-hover:rotate-12`}>
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                  <div className={`h-1 w-full bg-gradient-to-r ${step.color} opacity-20 rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Tailwind config or Style block */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Process;