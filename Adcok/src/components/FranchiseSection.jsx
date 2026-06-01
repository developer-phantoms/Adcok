import React from 'react';

const FranchiseSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase block mb-4 font-sans">
            GROW WITH US
          </span>
          <h2 className="text-4xl md:text-6xl font-playfair font-black text-[#800000] mb-6">
            Franchise <span className="italic font-serif text-[#800000]/80 lowercase text-3xl md:text-5xl">&</span> Distribution
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed font-sans">
            Join our expanding network and build a profitable pharmaceutical business.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14 pt-10">
          {/* Franchise Program Card */}
          <div className="relative bg-[#FFF8F8] rounded-[40px] p-10 md:p-12 pt-16 md:pt-16 flex flex-col items-start border border-[#800000]/5 shadow-[0_20px_50px_rgba(128,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(128,0,0,0.08)] transition-all duration-700 animate-fade-in-up group">
            <div className="absolute -top-7 left-10 w-14 h-14 bg-[#800000] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight font-playfair text-left">
              Franchise Program
            </h3>
            
            <p className="text-gray-500 mb-10 leading-relaxed font-medium text-sm md:text-base font-sans text-left">
              Get exclusive territorial rights, marketing support, and a proven product portfolio to launch your pharmaceutical franchise.
            </p>

            <ul className="space-y-4 mb-12 flex-grow font-sans">
              {[
                "Exclusive territory rights",
                "Marketing & promotional material",
                "Training & onboarding support",
                "Competitive profit margins"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-700 font-bold text-[13px] md:text-sm">
                  <div className="text-[#800000]/70 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="/contact" className="w-full md:w-fit px-10 py-4 bg-[#800000] text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-2xl shadow-[#800000]/20 hover:bg-[#660000] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 font-sans">
              Inquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Distributor Network Card */}
          <div className="relative bg-[#660000] rounded-[40px] p-10 md:p-12 pt-16 md:pt-16 flex flex-col items-start shadow-[0_40px_80px_rgba(128,0,0,0.25)] hover:shadow-[0_50px_100px_rgba(128,0,0,0.35)] transition-all duration-700 animate-fade-in-up text-white overflow-visible group">
            <div className="absolute -top-7 left-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-[#800000]/10">
              <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight font-playfair text-left">
              Distributor Network
            </h3>
            
            <p className="text-white/80 mb-10 leading-relaxed font-medium text-sm md:text-base font-sans text-left">
              Become an authorized ADCOK distributor and supply our DRAP-approved products across your region with full backend support.
            </p>

            <ul className="space-y-4 mb-12 flex-grow font-sans">
              {[
                "Priority stock allocation",
                "Credit facility available",
                "Dedicated account manager",
                "Co-branding opportunities"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-white font-bold text-[13px] md:text-sm">
                  <div className="text-white/40 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="/contact" className="w-full md:w-fit px-10 py-4 bg-white text-[#800000] rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 font-sans">
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
