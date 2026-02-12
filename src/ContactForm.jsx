import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaPaperPlane, FaHeadset } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_1c9ew4g";
    const templateID = "template_u6x9_y2u";
    const userID = "nqUOQGCgaZ4ck8TrH";

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (result) => {
        setIsSent(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      },
      (error) => {
        setIsSubmitting(false);
        alert("An error occurred, please try again.");
      }
    );
  };

  return (
    <section className="relative py-24 px-6 bg-[#020617] overflow-hidden" id="contact">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <FaHeadset className="animate-pulse" /> Ready to build?
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Let’s Craft Your <span className="text-blue-500 italic">Vision</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto font-light">
            Have a project in mind? Fill out the form below and our engineering team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name "
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Project Details</label>
              <textarea
                name="message"
                placeholder="Tell us about your MVP, SaaS, or AI idea..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-fit px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Proposal"} 
                <FaPaperPlane className={isSubmitting ? "animate-ping" : ""} size={14} />
              </button>
            </div>
          </form>

          {/* Success Notification */}
          {isSent && (
            <div className="mt-8 flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 py-4 rounded-2xl animate-in fade-in zoom-in duration-300">
              <FaCheckCircle className="text-xl" /> 
              <span className="font-bold text-sm tracking-tight">Strategy received! We'll contact you shortly.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;