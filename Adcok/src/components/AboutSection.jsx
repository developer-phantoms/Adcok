import React from 'react';
import AmovitImg from '../assets/Amovit.jpg';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#fdf2f3] pt-6 pb-16 md:pb-24 px-6 font-['Inter',sans-serif]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Image with Badge */}
        <div className="w-full lg:w-5/12 relative animate-fade-in-up">
          {/* Main Image Base */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <img 
              src={AmovitImg} 
              alt="Medisense Amovit" 
              className="w-full object-cover h-[350px] md:h-[500px]"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-[#800000] rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl flex flex-col items-center justify-center animate-float z-10 min-w-[120px] md:min-w-[140px]">
            <h3 className="text-white text-3xl md:text-5xl font-semibold font-sans mb-1 tracking-tight text-center">20+</h3>
            <p className="text-white/80 text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-center uppercase font-sans">Years of Trust</p>
          </div>
        </div>

        {/* Right Side: Text & Content */}
        <div className="w-full lg:w-7/12 lg:pl-16 animate-fade-in-up delay-300">
          <p className="text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-4 font-sans">
            Who We Are
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] mb-6 leading-[1.15] font-playfair tracking-tight">
            Pakistan's Trusted <br className="hidden lg:block" />
            <span className="text-[#800000]">Nutraceutical</span> Company
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            ADCOK Pharmaceuticals (Pvt.) Ltd. is a leading Nutraceutical marketing company manufacturing and selling a wide range of quality dietary supplements — available for franchise and distribution across all districts of Pakistan.
          </p>
          
          <ul className="space-y-3.5 mb-10">
            {[
              "DRAP Form-7 Approved Products",
              "Available for Franchise All Over Pakistan",
              "Tablets, Syrups & Sachets",
              "High Quality at Best Price"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-800 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 text-[#800000] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => window.location.href = '/about'}
            className="bg-white text-[#800000] font-bold text-sm md:text-base py-3.5 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 w-max group"
          >
            Learn More
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
