import React, { useEffect, useState } from "react";
import { MoveRight, ShieldCheck, Zap, Sparkles, Rocket, Globe, Menu, X } from "lucide-react";
import ProjectModal from "./Components/ProjectModel.jsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Typing state for heading
  const [typedHeading, setTypedHeading] = useState("");
  const headingPhrases = ["Digital Excellence", "Custom Software", "SaaS Solutions", "AI Innovation"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimized Typing Logic
  useEffect(() => {
    const currentPhrase = headingPhrases[phraseIndex % headingPhrases.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedHeading(currentPhrase.substring(0, typedHeading.length + 1));
        if (typedHeading === currentPhrase) {
          setIsDeleting(true);
          setTypingSpeed(2000); 
        } else { setTypingSpeed(100); }
      } else {
        setTypedHeading(currentPhrase.substring(0, typedHeading.length - 1));
        setTypingSpeed(50);
        if (typedHeading === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [typedHeading, isDeleting, phraseIndex]);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  // Logic to prevent background scroll when menu OR modal is open
  useEffect(() => {
    if (mobileMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, isModalOpen]);

  return (
    <header className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col font-sans" id="home">
      
      {/* 1. BACKGROUND GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* 2. MAIN NAV BAR - Highest Priority Layer */}
      <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 px-6 md:px-10 py-4 md:py-6 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer relative z-[10001]">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">C</div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-white">Mer<span className="text-blue-500">nly</span></h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 font-bold text-[10px] uppercase tracking-[0.25em] text-slate-400">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors relative group">{item.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-[10001]">
            <button className="hidden sm:block px-8 py-3 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all"
              onClick={() => setIsModalOpen(true)}
            >
              START A PROJECT
            </button>
      
            {/* TOGGLE BUTTON - Stays above the black menu */}
            <button className="lg:hidden p-2 text-white transition-transform active:scale-90" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={36} strokeWidth={3} /> : <Menu size={36} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </nav>
      

      {/* 3. MOBILE MENU - PURE BLACK PHYSICAL LAYER (Fixes ghosting/overlap) */}
      <div className={`fixed inset-0 bg-[#000000] z-[9998] transition-all duration-500 flex flex-col items-center justify-center gap-12 lg:hidden ${
        mobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col items-center gap-10 text-center">
          {navItems.map((item, index) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`text-4xl font-black uppercase tracking-tighter transition-all duration-700 ${
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-white hover:text-blue-500 transition-colors">{item.name}</span>
            </a>
          ))}
          {/* Mobile Start Project Button */}
          <button 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-widest"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
          >
            START A PROJECT
          </button>
        </div>
      </div>

      {/* 4. HERO CONTENT */}
      <div className="relative z-10 flex-grow flex items-center px-6 md:px-10 pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center text-center lg:text-left">
          <div className="space-y-6 md:space-y-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mx-auto lg:mx-0">
              <ShieldCheck size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Expert Development Partner</span>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter min-h-[2.2em]">
                Building <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                    {typedHeading}
                    <span className="text-white animate-pulse">|</span>
                </span>
              </h2>
              <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Fuel your business growth with <span className="text-white font-bold italic">Mernly's</span> software solutions, allowing you to manage workflows and generate live insights.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-3 shadow-2xl shadow-blue-600/30 uppercase tracking-widest text-xs"
              >
                EXPLORE SOLUTIONS <MoveRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
             <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
             <div className="relative group overflow-hidden rounded-[40px] border border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Software visual" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
             </div>
          </div>
        </div>
      </div>

      {/* PROJECT MODAL INTEGRATION */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
};

export default Header;