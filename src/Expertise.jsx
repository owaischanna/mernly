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
  // Cleaned and validated service list
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
      title: "Integrationa and Deployment", 
      desc: "CI/CD pipelines, cloud deployment, and third-party API integrations to ensure your product is robust and scalable.",
      gradient: "from-orange-600 to-amber-500"
    },
    { 
      icon: <FaRocket />, 
      title: "Hipaa compliant Solutions", 
      desc: "Developing secure, compliant healthcare applications with HIPAA standards and best practices for data protection.",
      gradient: "from-red-600 to-rose-500"
    },
  ];

  const stats = [
    { value: "2+", label: "Years Expert Experience", icon: <FaBriefcase /> },
    { value: "50+", label: "Projects Delivered", icon: <FaCheckCircle /> },
    { value: "30+", label: "Global Clients", icon: <FaUsers /> },
  ];

  return (
    <section className="py-32 bg-[#020617] text-white px-6 md:px-10 relative overflow-hidden" id="services">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
              Agency Specialization
            </div>
            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
              Defining The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic font-medium">Future of Code.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed border-l-2 border-blue-600 pl-8 mb-4 font-light">
            We deliver high-fidelity software solutions for ambitious brands, turning complex ideas into scalable reality.
          </p>
        </div>

        {/* Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-[40px] border border-white/5 bg-slate-900/40 backdrop-blur-3xl p-10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Internal Spotlight Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col items-start h-full text-left">
                {/* Dynamic Icon */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-10`}>
                  {service.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light text-base">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-[48px] overflow-hidden border border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-950 p-16 flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-500">
               {/* Hover Fill Animation */}
               <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
               
               <div className="relative z-10 text-blue-500 text-4xl mb-6 group-hover:text-white transition-colors">
                  {stat.icon}
               </div>
               <div className="relative z-10 text-6xl font-black tracking-tighter mb-2 group-hover:text-white group-hover:scale-110 transition-transform">
                 {stat.value}
               </div>
               <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-blue-100">
                 {stat.label}
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;