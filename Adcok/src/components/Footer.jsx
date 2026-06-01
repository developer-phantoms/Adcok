import React from 'react';
import FooterImage from '../assets/Footer.jpg';

export default function Footer() {
  return (
    <footer className="relative w-full text-white font-sans">
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${FooterImage})` }}>
        <div className="absolute inset-0 bg-[#1c1c1e]/80"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full pt-20 pb-12 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8 border-b border-white/10">

        {/* Left Section (Brand & About) */}
        <div className="flex flex-col gap-6 md:w-[35%]">
          {/* Brand Name replacing Logo */}
          <div className="-mt-2 mb-0 font-bold text-3xl tracking-wide font-sans">
            <span className="text-[#b52a1d]">MEDISENSE</span> <span className="text-gray-300">Pharmaceutical</span>
          </div>

          <p className="text-gray-300 text-[13.5px] leading-relaxed pr-4 font-medium">
            Pakistan's trusted Nutraceutical & Dietary Supplement company — DRAP Form-7 approved products across all districts.
          </p>          {/* Social Icons (Facebook & Whatsapp as requested) */}
          <div className="flex gap-3 mt-1">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Medisensepharmaceutical"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full 
    bg-[#1877F2] text-white 
    flex items-center justify-center
    hover:scale-110 transition-all duration-300"
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 
      1.325v21.35C0 23.408.593 24 1.325 
      24h11.494v-9.294H9.689v-3.621h3.13V8.41
      c0-3.099 1.894-4.785 4.659-4.785 
      1.325 0 2.463.099 2.793.143v3.24
      l-1.916.001c-1.504 0-1.794.715-1.794 
      1.763v2.31h3.585l-.467 3.621h-3.118V24
      h6.115c.733 0 1.325-.592 
      1.325-1.325V1.325C24 .593 
      23.408 0 22.675 0z"/>
              </svg>
            </a>


            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=923262422229"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full 
    bg-[#25D366] text-white 
    flex items-center justify-center
    hover:scale-110 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 0C5.385 0 .005 5.378.005 
      12.023c0 2.124.551 4.195 1.6 6.03
      l-1.6 5.8 5.922-1.554a11.968 
      11.968 0 006.104 1.666c6.643 
      0 12.022-5.378 12.022-12.023C24.053 
      5.38 18.674 0 12.031 0z"/>
              </svg>

            </a>

          </div>
        </div>

        {/* Middle Section (Quick Links) */}
        <div className="flex flex-col gap-6 md:w-[25%]">
          <h3 className="text-white font-sans font-bold tracking-[0.15em] text-[13px] uppercase mb-1">Quick Links</h3>
          <div className="flex flex-col gap-5 text-[14px] font-medium">
            <a href="/" className="text-gray-400 hover:text-white transition-colors w-fit">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors w-fit">About Us</a>
            <a href="/products" className="text-gray-400 hover:text-white transition-colors w-fit">Products</a>
            <a href="/research" className="text-gray-400 hover:text-white transition-colors w-fit">R&D</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors w-fit">Contact</a>
          </div>
        </div>

        {/* Right Section (Contact Us) */}
        <div className="flex flex-col gap-6 md:w-[40%] relative">
          <h3 className="text-white font-sans font-bold tracking-[0.15em] text-[13px] uppercase mb-1">Contact Us</h3>

          <div className="flex flex-col gap-5 text-[14px] text-gray-300 font-medium">
            {/* Location (with icon per request) */}
            <div className="flex items-start gap-4">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11a8 8 0 1116 0c0 6.5-8 11-8 11z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>Multan, Punjab, Pakistan</span>
            </div>

            {/* Phone (with icon per request) */}
            <div className="flex items-center gap-4">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+92-326-2422229</span>
            </div>

            {/* Gmail (with icon per request) */}
            <div className="flex items-center gap-4">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:tayyabgohar0@gmail.com" className="hover:text-white transition-colors">tayyabgohar0@gmail.com</a>
            </div>
          </div>

          <a href="/contact" className="mt-5 px-6 py-3 bg-[#b52a1d] text-white font-bold rounded-[30px] w-fit hover:bg-[#8F1F14] transition-colors flex items-center gap-2 text-sm shadow-lg shadow-black/30">
            Send Us a Message
            <span className="text-lg leading-none font-normal translate-y-[1px]">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full py-6 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400 font-medium gap-4 text-center md:text-left">
        <p>&copy; 2026 Medisense Pharmaceuticals (Pvt.) Ltd. — All Rights Reserved</p>
        <p>@ HAT Tech MEDIA (Pvt.) Ltd. — All Rights Reserved</p>
        <p className="font-bold text-white flex items-center gap-1.5 bg-[#1f1f1f] px-3 py-1.5 rounded-md">
          <span className="text-[#b52a1d] text-[14px]">✔</span> DRAP Form-7 Certified
        </p>
      </div>
    </footer>
  );
}
