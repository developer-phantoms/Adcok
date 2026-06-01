export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] flex items-center overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-fade-in-up font-sans">
           <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
           <span className="text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">Pioneering Health Innovations</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-[1.2] animate-fade-in-up font-['Playfair_Display'] tracking-tight">
          Pioneering the <br />
          <span className="italic font-medium text-white/90">Future of Healthcare</span>
        </h1>

        {/* Paragraph */}
        <p className="text-xs md:text-base text-gray-200 mb-8 max-w-xl leading-relaxed font-light animate-fade-in-up delay-300 font-sans">
          Dedicated to pushing the boundaries of medical research and providing innovative solutions that enhance lives across the globe.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500 w-full sm:w-auto">
          <button 
            onClick={() => window.location.href = '/products'}
            className="group relative px-8 py-3.5 bg-white text-[#800000] rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto overflow-hidden font-sans"
          >
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Explore Products</span>
          </button>

          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-md hover:bg-white hover:text-[#800000] hover:border-white transition-all w-full sm:w-auto shadow-xl font-sans"
          >
            Contact us
          </button>
        </div>

      </div>
    </section>
  );
}