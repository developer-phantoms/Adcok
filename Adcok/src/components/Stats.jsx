import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2500; // 2.5 seconds for visual impact

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // smooth easeOut easing
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, isVisible]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { end: 200, suffix: '+', label: 'Products' },
    { end: 10, suffix: '+', label: 'Years Experience' },
    { end: 7, suffix: '', label: 'Approved' },
    { end: 50, suffix: '+', label: 'Partners' },
  ];

  return (
    <section className="relative z-20 -mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 animate-fade-in-up delay-500">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/10 p-8 md:p-12 flex flex-wrap justify-around items-center text-center gap-8 md:gap-4 border border-gray-100">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 min-w-[120px]">
            <div className="text-4xl md:text-6xl font-semibold text-[#800000] mb-2 font-sans tracking-tight">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
            </div>
            <p className="text-gray-500 font-extrabold tracking-[0.2em] uppercase text-[10px] md:text-xs font-sans">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
