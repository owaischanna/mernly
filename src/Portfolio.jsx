import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGlobe, FaChevronRight } from "react-icons/fa";

// ASSET IMPORTS
import H1 from "./assets/h1.jpeg";
import H2 from "./assets/h2.jpeg";
import H3 from "./assets/H3.jpeg";
import H4 from "./assets/H4.jpeg";
import H5 from "./assets/H5.jpeg";

import L1 from "./assets/fd.jpg";
import L2 from "./assets/sd.jpg";

import K1 from "./assets/bms.jpg";

import SEC1 from "./assets/sec1.jpeg";
import SEC2 from "./assets/sec2.jpeg";
import SEC3 from "./assets/sec3.jpeg";

import P1 from "./assets/p1.jpeg";
import P2 from "./assets/p2.jpeg";

import A1 from "./assets/A1.jpeg";
import A2 from "./assets/A2.jpeg";
import A3 from "./assets/A3.jpeg";

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 3.5 seconds for a premium feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="group relative flex flex-col bg-slate-900/40 rounded-[40px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-3 shadow-2xl">
      
      {/* 1. VISUAL PREVIEW CONTAINER */}
      <div className="relative h-56 w-full overflow-hidden bg-[#020617]">
        {/* Subtle Animated Background Glow */}
        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {project.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 p-4 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <img
              src={img}
              alt={`${project.title} view ${index + 1}`}
              className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ))}
        
        {/* TOP OVERLAY: Category Tag */}
        <div className="absolute top-6 left-6 z-20">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] font-black uppercase tracking-widest backdrop-blur-md">
                {project.category}
            </span>
        </div>

        {/* BOTTOM OVERLAY: Interaction Hint */}
        <div className="absolute bottom-4 right-6 z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-white/50">
                View Project <FaChevronRight size={10} className="text-blue-500" />
            </div>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="p-10 flex flex-col justify-between flex-grow relative">
        {/* Subtle Background Numbering */}
        <div className="absolute top-4 right-8 text-7xl font-black text-white/[0.02] select-none italic">
            0{currentIndex + 1}
        </div>

        <div className="relative z-10 text-left">
          <h3 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-blue-400 transition-colors uppercase italic">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 line-clamp-3">
            {project.desc}
          </p>
        </div>

        {/* 3. FOOTER: Status Indicators */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
            <div className="flex gap-1.5">
                {project.images.map((_, index) => (
                    <div 
                        key={index}
                        className={`h-1 rounded-full transition-all duration-500 ${
                            index === currentIndex ? "w-6 bg-blue-500" : "w-1.5 bg-white/10"
                        }`}
                    />
                ))}
            </div>
            <div className="flex items-center gap-4 text-slate-500 group-hover:text-blue-400 transition-colors">
                <FaGlobe size={14} className="cursor-pointer hover:scale-110 transition-transform" />
                <FaExternalLinkAlt size={12} className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    { 
      title: "Ghana Electric", 
      category: "Enterprise SaaS", 
      desc: "Enterprise energy management and utility billing solution for large-scale energy infrastructure.", 
      images: [SEC1, SEC2, SEC3],
    },
    { 
      title: "Exam Prep", 
      category: "EdTech", 
      desc: "Interactive exam testing platform for competitive exams featuring live analytics.", 
      images: [P1, P2],
    },
    { 
      title: "Habisolo", 
      category: "Travel & Booking", 
      desc: "Spanish housing and travel platform built for high-scale performance and seamless UX.", 
      images: [H3, H4, H5, H1, H2],
    },
    { 
      title: "Lexe AI", 
      category: "MVP", 
      desc: "Conversational AI assistant for legal research and document analysis powered by custom LLMs.", 
      images: [L1, L2],
    },
    { 
      title: "Quickslot", 
      category: "Service Marketplace", 
      desc: "Mobile App Platform for booking and managing professional service appointments.", 
      images: [K1],
    },
    { 
      title: "Agri Fusion",
      category: "AgriTech",
      desc: "Agricultural marketplace connecting farmers with buyers and suppliers across the region.",
      images: [A1, A2, A3],
    },
  ];

  return (
    <section className="py-32 bg-[#020617] text-white px-6 md:px-10 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
               Curated Case Studies
            </div>
            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic">Works.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed border-l-2 border-blue-600 pl-6 mb-2 text-left">
            Engineering digital solutions that blend high-scale performance with intuitive user experience.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;