import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "We've been prescribing their specialized drops for children with phenomenal results. The formulations are gentle yet effective, and parents give us fantastic feedback regarding their fast action.",
    name: "Michael Thompson",
    title: "Pediatrician",
  },
  {
    id: 2,
    quote: "Medisense's commitment to quality and standard is clear in every product. Their supplements have become a staple in our daily recommendations for long-term health.",
    name: "Dr. Sarah Jenkins",
    title: "General Practitioner",
  },
  {
    id: 3,
    quote: "The research and development behind these formulations is top-notch. I trust Medisense to provide safe and effective health solutions for my patients.",
    name: "Prof. Ahmed Khan",
    title: "Cardiologist",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx) => {
    if (idx === currentIndex) return;
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setFade(false);
    }, 300);
  };

  return (
    <section className="w-full bg-[#fdfafb] py-20 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Subtitle */}
        <p className="text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-4 font-sans">
          What Partners Say
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 font-playfair tracking-wide">
          Voices of <span className="text-[#800000]">Trust</span>
        </h2>

        {/* Carousel Area */}
        <div className="relative min-h-[250px] md:min-h-[200px] flex flex-col items-center justify-center">
          
          {/* Quote Icon */}
          <div className="text-[#800000]/20 mb-6 font-serif">
             {/* Using SVG for quote to match image carefully */}
            <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Content */}
          <div className={`transition-all duration-500 ease-out px-4 md:px-12 ${fade ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed font-playfair mb-8 tracking-wide">
              {testimonials[currentIndex].quote}
            </p>
            
            <h4 className="text-gray-900 font-bold text-base md:text-lg font-['Inter',sans-serif] tracking-wide">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-[#800000] text-sm md:text-base font-medium font-['Inter',sans-serif] mt-1 tracking-wide">
              {testimonials[currentIndex].title}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-[#800000]' 
                  : 'bg-[#800000]/20 hover:bg-[#800000]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
