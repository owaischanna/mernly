import React from "react";
import abuBakarImage from "./assets/zain.jpg"; 
import owaisAhmedImage from "./assets/11.jpg"; 


const Team = () => {
  const members = [
    { name: "Owais Ahmed", role: "Software Dev", img: owaisAhmedImage, bio: "Experienced  in  website and  mobile development, integration and scalable SaaS solutions." },
    { name: "Zain Ul Eman", role: "Backend  Developer ", img: abuBakarImage, bio: "Specialist in  complex backend development , secure API design and complex database management." }
  ];

  return (
    <section className="py-32 bg-slate-900/30 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">The Crafters</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-[40px] overflow-hidden mb-8 border-4 border-slate-800 group-hover:border-blue-500 transition-all duration-500">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
              </div>
              <h3 className="text-2xl font-bold">{m.name}</h3>
              <p className="text-blue-500 text-sm font-black uppercase tracking-widest mt-2 mb-4">{m.role}</p>
              <p className="text-slate-400 text-sm max-w-xs italic leading-relaxed">"{m.bio}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;