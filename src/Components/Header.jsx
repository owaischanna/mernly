  // import React, { useEffect, useState } from "react";
  // import { MoveRight, ShieldCheck, Cpu, Code2, Layers, Monitor } from "lucide-react";

  // const Header = () => {
  //   const [scrolled, setScrolled] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => setScrolled(window.scrollY > 20);
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  //   return (
  //     <header className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col font-sans" id="home">
        
  //       {/* 1. ANIMATED BACKGROUND MESH */}
  //       <div className="absolute inset-0 z-0 pointer-events-none">
  //         <div className="absolute inset-0 opacity-[0.03]" 
  //              style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
  //         </div>
  //         <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
  //         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
  //       </div>

  //       {/* 2. RESPONSIVE NAVIGATION */}
  //       <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-10 py-4 md:py-6 ${
  //         scrolled ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
  //       }`}>
  //         <div className="max-w-7xl mx-auto flex justify-between items-center">
  //           <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
  //             <div className="w-9 h-9 md:w-11 md:h-11 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center font-black text-lg md:text-xl shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">C</div>
  //             <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">Code<span className="text-blue-500">Crafters</span></h1>
  //           </div>
            
  //           <div className="hidden lg:flex items-center gap-10 font-bold text-[10px] uppercase tracking-[0.25em] text-slate-400">
  //             {['Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
  //               <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
  //                 {item}
  //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
  //               </a>
  //             ))}
  //           </div>

  //           <button className="px-5 py-2.5 md:px-8 md:py-3.5 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-white/5 active:scale-95">
  //             START A PROJECT
  //           </button>
  //         </div>
  //       </nav>

  //       {/* 3. HERO CONTENT: BALANCED & RESPONSIVE */}
  //       <div className="relative z-10 flex-grow flex items-center px-6 md:px-10 pt-24 md:pt-32 pb-20">
  //         <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
  //           {/* LEFT: REFINED IMPACTFUL TEXT */}
  //           <div className="space-y-6 md:space-y-10 text-center lg:text-left">
  //             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mx-auto lg:mx-0">
  //               <ShieldCheck size={14} className="text-blue-400" />
  //               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Next-Gen Software Agency</span>
  //             </div>

  //             <div className="space-y-4 md:space-y-6">
  //               <h2 className="text-5xl md:text-7xl font-black leading-[1.1] md:leading-[1.1] tracking-tighter">
  //                 Engineering <br className="hidden md:block" /> 
  //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
  //                    Digital Excellence
  //                 </span>
  //               </h2>
  //               <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
  //                 At <span className="text-white font-bold">CodeCrafters</span>, we engineer high-performance 
  //                 <span className="text-white"> MVPs, SaaS platforms, and AI integrations</span> that scale with your vision. 
  //                 Led by experts to deliver digital excellence.
  //               </p>
  //             </div>

  //             <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4">
  //               <button className="group px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/30">
  //                 EXPLORE SOLUTIONS <MoveRight className="group-hover:translate-x-2 transition-transform" />
  //               </button>
  //               <div className="flex justify-center gap-6 border-l border-white/10 pl-0 sm:pl-8 pt-4 sm:pt-0">
  //                  <div className="flex flex-col items-center lg:items-start opacity-60">
  //                     <span className="text-[10px] font-black uppercase tracking-widest leading-none">MERN<br/>Expertise</span>
  //                  </div>
  //                  <div className="flex flex-col items-center lg:items-start opacity-60">
  //                     <span className="text-[10px] font-black uppercase tracking-widest leading-none">AI Agentic<br/>Solutions</span>
  //                  </div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* RIGHT: SOFTWARE ARCHITECTURE VISUAL (Responsive & Impactful) */}
  //           <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
  //              <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-[100px] animate-pulse"></div>
              
  //              {/* Main Dashboard Visual */}
  //              <div className="relative bg-slate-900 border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden group hover:border-blue-500/30 transition-colors">
  //                 <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-5">
  //                    <div className="flex gap-2">
  //                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
  //                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
  //                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
  //                    </div>
  //                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">codecrafters_enterprise_v1.0</div>
  //                 </div>
                  
  //                 <div className="space-y-8">
  //                    <div className="grid grid-cols-2 gap-6">
  //                       <div className="p-5 rounded-3xl bg-white/5 border border-white/5 space-y-3">
  //                          <Cpu className="text-blue-500" size={24} />
  //                          <div className="text-2xl font-black">99.9%</div>
  //                          <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">System Uptime</p>
  //                       </div>
  //                       <div className="p-5 rounded-3xl bg-white/5 border border-white/5 space-y-3">
  //                          <Layers className="text-indigo-500" size={24} />
  //                          <div className="text-2xl font-black">20ms</div>
  //                          <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">API Latency</p>
  //                       </div>
  //                    </div>
                    
  //                    {/* Code Block Visual */}
  //                    <div className="p-5 rounded-3xl bg-blue-600/5 border border-blue-500/10 font-mono text-[11px] text-blue-300 leading-relaxed shadow-inner">
  //                       <p className="opacity-40">// Initializing Scalable Infrastructure</p>
  //                       <p className="mt-1 font-bold"><span className="text-indigo-400">const</span> agency = <span className="text-white">new</span> CodeCrafters();</p>
  //                       <p className="mt-1"><span className="text-white">await</span> agency.deploySaaS({'{'} scale: <span className="text-green-400">"Enterprise"</span> {'}'});</p>
  //                    </div>
  //                 </div>
  //              </div>

  //              {/* FLOATING PERFORMANCE BADGE */}
  //              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[32px] shadow-2xl text-slate-900 transform -rotate-3 hover:rotate-0 transition-all duration-500 cursor-default">
  //                 <div className="flex items-center gap-4">
  //                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 shadow-sm"><Monitor size={24} /></div>
  //                    <div>
  //                       <div className="text-3xl font-black leading-none">20+</div>
  //                       <div className="text-[10px] font-bold uppercase tracking-tighter text-slate-500 mt-1">MVPs Delivered</div>
  //                    </div>
  //                 </div>
  //              </div>
  //           </div>

  //         </div>
  //       </div>
        
  //       {/* 4. FOOTER TECH-STRIP */}
  //       <div className="py-10 border-t border-white/5 px-10">
  //          <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-30 hover:opacity-80 transition-opacity">
  //             {['MERN STACK', 'NEXT.JS', 'AI AGENTIC', 'REACT NATIVE', 'SAAS ARCHITECTURE'].map((tech) => (
  //               <span key={tech} className="text-[10px] font-black tracking-[0.4em]">{tech}</span>
  //             ))}
  //          </div>
  //       </div>
  //     </header>
  //   );
  // };

  // export default Header;