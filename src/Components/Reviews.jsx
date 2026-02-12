import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

// ASSET IMPORTS
import Review1 from "../assets/r3.jpeg";
import Review2 from "../assets/r2.jpeg";
import Review3 from "../assets/r4.jpeg";
import Review4 from "../assets/r5.jpeg";

const Reviews = () => {
  const localReviews = [
    {
      id: 1,
      image: Review1,
      client: "Kike M.",
      project: "Practilly Exam Preparation",
    },
    {
      id: 2,
      image: Review2,
      client: "Wilson ",
      project: "AI Solution",
    },
    {
      id: 3,
      image: Review3,
      client: "Ikpe",
      project: "Habisolo Global Booking",
    },
    {
      id: 4,
      image: Review4,
      client: "Secdias.",
      project: "Multi Service Platform",
    },
  ];

  // Double the array for a seamless infinite loop
  const loopReviews = [...localReviews, ...localReviews];

  return (
    <section className="py-32 bg-[#020617] text-white overflow-hidden relative" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20 relative z-10">
        <div className="space-y-4 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <FaCheckCircle /> Real Results
          </div>
          <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">Endorsements.</span>
          </h2>
        </div>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-review-scroll whitespace-nowrap py-10 group-hover:pause">
          {loopReviews.map((review, i) => (
            <div 
              key={i} 
              className="inline-block w-[400px] mx-6 shrink-0"
            >
              <div className="relative flex flex-col gap-6 p-4 rounded-[40px] bg-slate-900/40 backdrop-blur-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 whitespace-normal">
                
                {/* Screenshot Container */}
                <div className="relative w-full rounded-[32px] overflow-hidden bg-slate-950 p-2">
                  <img 
                    src={review.image} 
                    alt={`Review from ${review.client}`} 
                    className="w-full h-auto object-contain rounded-[24px] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>

                {/* Info Footer */}
                <div className="flex justify-between items-start px-4 pb-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-black tracking-tight uppercase">{review.client}</h4>
                    <p className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em]">{review.project}</p>
                  </div>
                  <div className="flex text-amber-400 gap-0.5 pt-1">
                    <FaStar size={12} /><FaStar size={12} /><FaStar size={12} /><FaStar size={12} /><FaStar size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes review-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-review-scroll {
          animation: review-scroll 50s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;