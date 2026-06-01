export default function CTA() {
  return (
    <section className="w-full relative overflow-hidden py-8 px-4 md:px-8 font-['Inter',sans-serif]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-[#5a0000] to-[#800000]"></div>
      
      {/* Decorative gradient overlay for extra richness */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair tracking-wide drop-shadow-md">
            Ready to <span className="italic text-rose-200">Partner</span> with Us?
          </h2>
          <p className="text-white/80 font-medium text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Join our growing network of franchisees and distributors across Pakistan.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 flex-col sm:flex-row flex-shrink-0">
          <a
            href="/contact"
            className="px-8 py-3.5 bg-white text-[#800000] font-bold rounded-full shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="/products"
            className="px-8 py-3.5 bg-transparent text-white font-bold rounded-full border-2 border-white/60 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
