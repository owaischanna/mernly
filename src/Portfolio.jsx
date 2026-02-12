import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

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

  // Auto-change image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="group flex flex-col bg-slate-900/40 rounded-[32px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500">
      {/* AUTO-SLIDING IMAGE CONTAINER */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        {project.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`${project.title} view ${index + 1}`}
              className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ))}
        
        {/* SLIDE INDICATORS (DOTS) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.images.map((_, index) => (
            <div 
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-4 bg-blue-500" : "w-1 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-blue-500 text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl font-black tracking-tight mb-3 uppercase">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed font-light mb-6 line-clamp-2">
            {project.desc}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
        
     
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
      desc: "Enterprise energy management and utility billing solution.", 
      images: [SEC1, SEC2, SEC3],
    
    },
    { 
      title: "Exam Prep", 
      category: "EdTech", 
      desc: "Interactive exam testing  platform for competitive exams.", 
      images: [P1, P2],
    
    },
      { 
      title: "Habisolo", 
      category: "Travel & Booking", 
      desc: "Spanish housing and travel platform built for high-scale performance.", 
      images: [H3,H4,H5,H1, H2],
     
    },
      { 
      title: "Lexe AI", 
      category: "MVP", 
      desc: "Conversational AI assistant for legal research and document analysis.", 
      images: [L1, L2],
    
    },
     { 
      title: "Quickslot", 
      category: "Service Marketplace", 
      desc: " Mobile App Platform for booking and managing service appointments.", 
      images: [K1],
    
    },
      { 
      title: "Agri Fusion",
      category: "AgriTech",
      desc: "Agricultural marketplace connecting farmers with buyers and suppliers.",
      images: [A1, A2, A3],
    },
  ];

  return (
    <section className="py-24 bg-[#020617] text-white px-6 md:px-10" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.3em]">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Featured <span className="text-blue-500 italic font-medium">Works.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;