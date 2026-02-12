import React from "react";
import { 
  FaCode, 
  FaRobot, 
  FaMobileAlt, 
  FaPalette, 
  FaLayerGroup, 
  FaRocket, 
  FaCheckCircle, 
  FaBriefcase, 
  FaUsers 
} from "react-icons/fa";

const Expertise = () => {
  const services = [
    { 
      icon: <FaCode />, 
      title: "Web Development", 
      desc: "Architecting stunning, high-performance websites using MERN & Next.js for a seamless digital presence.",
      gradient: "from-blue-600 to-cyan-500" 
    },
    { 
      icon: <FaRobot />, 
      title: "AI Solutions", 
      desc: "Integrating LLMs, custom neural networks, and agentic workflows to automate your business intelligence.",
      gradient: "from-purple-600 to-pink-500"
    },
    { 
      icon: <FaMobileAlt />, 
      title: "App Development", 
      desc: "High-end cross-platform mobile experiences built with React Native for maximum reach and native performance.",
      gradient: "from-indigo-600 to-blue-500"
    },
    { 
      icon: <FaLayerGroup />, 
      title: "SaaS & MVPs", 
      desc: "Turning complex startup visions into scalable, market-ready SaaS platforms with rapid prototyping.",
      gradient: "from-emerald-600 to-teal-500"
    },
    { 
      icon: <FaPalette />, 
      title: "Integrations & Deployment", 
      desc: "CI/CD pipelines, cloud deployment, and third-party API integrations to ensure your product is robust.",
      gradient: "from-orange-600 to-amber-500"
    },
    { 
      icon: <FaRocket />, 
      title: "HIPAA Compliant Solutions", 
      desc: "Developing secure healthcare applications with HIPAA standards and best practices for data protection.",
      gradient: "from-red-600 to-rose-500"
    },
  ];

  const stats = [
    { value: "2+", label: "Years Expert Experience", icon: <FaBriefcase /> },
    { value: "10+", label: "Projects Delivered", icon: <FaCheckCircle /> },
    { value: "7+", label: "Global Clients", icon: <FaUsers /> },
  ];

  // Infinite loop ke liye array double kiya gaya hai
  const loopServices = [...services, ...services];

  return (
    <section className="py-20 md:py-32 bg-[#020617] text-white overflow-hidden relative" id="services">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[100px] md:blur-[150px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6 max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Specialization
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none tracking-tighter">
              Defining The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic font-medium">Future of Code.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-blue-600 pl-6 md:pl-8 font-light text-left">
            We deliver high-fidelity software solutions for ambitious brands, turning complex ideas into scalable reality.
          </p>
        </div>
      </div>

      {/* INFINITE HORIZONTAL LOOP */}
      <div className="relative flex overflow-hidden group/main mb-16 md:mb-24">
        <div className="flex animate-service-scroll whitespace-nowrap py-10 group-hover/main:pause-animation">
          {loopServices.map((service, i) => (
            <div 
              key={i} 
              className="inline-block w-[300px] md:w-[400px] mx-4 md:mx-6 shrink-0"
            >
              <div className="relative flex flex-col gap-6 p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-white/5 bg-slate-900/40 backdrop-blur-3xl transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 whitespace-normal group/card">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col items-start h-full text-left">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-xl md:text-3xl shadow-2xl group-hover/card:rotate-6 transition-all duration-500 mb-6 md:mb-10`}>
                    {service.icon}
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-black tracking-tight group-hover/card:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Statistics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-[30px] md:rounded-[48px] overflow-hidden border border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-950 p-10 md:p-16 flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-500">
               <div className="absolute inset-0 bg-blue-600 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
               
               <div className="relative z-10 text-blue-500 text-3xl md:text-4xl mb-4 md:mb-6 group-hover:text-white transition-colors">
                  {stat.icon}
               </div>
               <div className="relative z-10 text-5xl md:text-6xl font-black tracking-tighter mb-2 group-hover:text-white transition-transform">
                 {stat.value}
               </div>
               <div className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-slate-500 group-hover:text-blue-100">
                 {stat.label}
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Engine */}
      <style jsx>{`
        @keyframes service-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-service-scroll {
          animation: service-scroll 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Expertise;