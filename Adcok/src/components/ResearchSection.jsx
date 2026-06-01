import React from 'react';
import ResearchImg from '../assets/Research.jpg';

const points = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "DRAP Certified Manufacturing",
    desc: "All our formulations are produced in DRAP Form-7 approved facilities with stringent quality protocols."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Advanced Nutraceutical Science",
    desc: "We leverage cutting-edge bioavailability research to deliver supplements that the body absorbs more effectively."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Clinically Validated Ingredients",
    desc: "Every active ingredient is selected based on clinical evidence, ensuring safety and efficacy for all age groups."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Continuous Innovation Pipeline",
    desc: "Our dedicated R&D team continuously explores emerging therapeutic areas to expand our product portfolio."
  }
];

const ResearchSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 font-['Inter',sans-serif]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 animate-fade-in-up">
          <p className="text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-4 font-sans">
            Science <span className="italic font-serif text-[#800000]/80 lowercase text-base">&</span> Innovation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] mb-4 leading-[1.15] font-playfair tracking-tight">
            Research <span className="italic font-serif text-[#800000]/90 text-[1.1em]">&</span> <br />
            <span className="text-[#800000]">Development</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            At Medisense Pharmaceuticals, innovation is at the heart of everything we do. Our R&D focus ensures every product we bring to market is backed by rigorous science, quality sourcing, and a commitment to improving lives across Pakistan.
          </p>

          {/* Points */}
          <div className="space-y-7">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="mt-0.5 w-12 h-12 rounded-xl bg-[#fdf2f3] flex items-center justify-center shrink-0 group-hover:bg-[#800000] transition-colors duration-300">
                  <div className="group-hover:[&>svg]:text-white transition-colors">
                    {React.cloneElement(point.icon, {
                      className: "w-6 h-6 text-[#800000] group-hover:text-white transition-colors duration-300"
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">{point.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/research"
            className="mt-10 inline-flex items-center gap-3 bg-[#800000] text-white py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#660000] transition-all duration-300 hover:-translate-y-1 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] font-sans"
          >
            Explore R<span className="italic font-serif text-white/80 lowercase text-sm md:text-base">&</span>D
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 animate-fade-in-up delay-300">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={ResearchImg}
              alt="Medisense Research and Development"
              className="w-full h-[420px] md:h-[540px] object-cover"
            />
            {/* Subtle maroon overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/30 to-transparent pointer-events-none"></div>

            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-[#fdf2f3] rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">DRAP Form-7 Approved</p>
                <p className="text-gray-500 text-xs">All Products Verified</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchSection;
