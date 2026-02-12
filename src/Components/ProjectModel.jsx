import React, { useState } from "react";
import { X, ChevronRight, ChevronLeft, Send, Rocket, Target, Cpu, Layout } from "lucide-react";

const ProjectModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    timeline: "",
    email: ""
  });

  if (!isOpen) return null;

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const serviceOptions = [
    { id: "web", label: "Web App / Next.js", icon: <Layout size={20} /> },
    { id: "ai", label: "AI Integration", icon: <Cpu size={20} /> },
    { id: "saas", label: "SaaS Platform", icon: <Target size={20} /> },
    { id: "mobile", label: "Mobile / React Native", icon: <Rocket size={20} /> },
  ];

  return (
    <div className="fixed inset-0 z-[10002] flex items-center justify-center p-6 md:p-10">
      {/* 1. BLUR OVERLAY */}
      <div 
        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* 2. MODAL CONTAINER */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-500/10 animate-in zoom-in duration-300">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-10 md:p-16">
          {/* STEP 1: SERVICE SELECTION */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Step 01/04</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">What are we building?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setFormData({...formData, service: opt.id}); nextStep(); }}
                    className="flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all text-left group"
                  >
                    <div className="text-blue-400 group-hover:text-white transition-colors">{opt.icon}</div>
                    <span className="font-bold text-sm tracking-tight text-white">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: BUDGET RANGE */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Step 02/04</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">Investment range?</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {["$2k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"].map((b) => (
                  <button
                    key={b}
                    onClick={() => { setFormData({...formData, budget: b}); nextStep(); }}
                    className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-blue-500 text-white font-bold text-left transition-all"
                  >
                    {b}
                  </button>
                ))}
              </div>
              <button onClick={prevStep} className="text-slate-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <ChevronLeft size={14} /> Back
              </button>
            </div>
          )}

          {/* STEP 3: CONTACT INFO */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Step 03/04</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">Where should we send the estimate?</h3>
              </div>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-600 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="flex items-center justify-between">
                <button onClick={prevStep} className="text-slate-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <ChevronLeft size={14} /> Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!formData.email}
                  className="px-10 py-5 bg-blue-600 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all disabled:opacity-50"
                >
                  Confirm Details
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS MESSAGE */}
          {step === 4 && (
            <div className="text-center space-y-8 animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black tracking-tighter text-white">Request Sent!</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  Our engineering team will analyze your requirements for <b>{formData.service}</b> and reach out to your email within 12 hours.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-full py-5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;