import React from "react";
import { Facebook, Linkedin, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

const Footer = () => {
  // CONFIGURATION: Replace with your actual details
  const whatsappNumber = "923323628980";
  const myEmail = "aowais986@gmail.com";
  
  // Direct Gmail Compose Link: This forces the browser to open Gmail in a new tab
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const linkedInLink = "https://www.linkedin.com/in/owais-ahmedc/";
  

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 px-6 md:px-10 border-t border-white/5 relative overflow-hidden">
      {/* 1. CALL TO ACTION SECTION */}
      <div className="max-w-7xl mx-auto relative z-10">
        

        {/* 2. NAVIGATION & CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Agency Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20">M</div>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">Mer<span className="text-blue-500">nly</span></h1>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium software studio specializing in custom software development and scalable digital architectures.
            </p>
          </div>

          {/* Service Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Solutions</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">SaaS Development</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">AI Integrations</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Enterprise Apps</li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#team" className="hover:text-blue-500 transition-colors">The Team</a></li>
            </ul>
          </div>

          {/* DIRECT APP REDIRECTS (WhatsApp & Gmail) */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Direct Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              
              {/* WhatsApp Icon */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-green-600/10 hover:border-green-500/50 transition-all flex flex-col items-center justify-center gap-2"
              >
                <MessageSquare className="text-green-500 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-[9px] font-black uppercase text-slate-500">WhatsApp</span>
              </a>

              {/* Gmail-Specific Icon */}
              <a 
                href={gmailLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-red-600/10 hover:border-red-500/50 transition-all flex flex-col items-center justify-center gap-2"
              >
                <Mail className="text-red-500 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-[9px] font-black uppercase text-slate-500">Gmail</span>
              </a>

              {/* LinkedIn (Full Width) */}
          

            </div>
          </div>
        </div>

        {/* 3. FINAL BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 Mernly Development. Built for Excellence.
          </p>
          <div className="flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity">
            <Facebook className="cursor-pointer hover:text-blue-600 transition-colors" size={16} onClick={() => window.open(facebookLink, "_blank")} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;