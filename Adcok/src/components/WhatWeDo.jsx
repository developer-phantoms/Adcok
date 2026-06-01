import IroplexImg from '../assets/Herbiotics-Iroplex.webp';
import ContactUsImg from '../assets/contactus.jpg';
import WhatWeDoImg from '../assets/WHat we do.jpg';
import ResearchImg from '../assets/Research.jpg';
import BgImg from '../assets/Her 2.jpg';

const cards = [
  {
    id: 1,
    title: 'Product Development',
    image: IroplexImg,
    href: '/products',
    tall: true,
  },
  {
    id: 2,
    title: 'Contact Us',
    image: ContactUsImg,
    href: '/contact',
    tall: false,
  },
  {
    id: 3,
    title: 'Who We Are?',
    image: WhatWeDoImg,
    href: '/about',
    tall: false,
  },
  {
    id: 4,
    title: 'Research & Development',
    image: ResearchImg,
    href: '/research',
    tall: false,
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full py-16 px-4 md:px-8 font-['Inter',sans-serif] overflow-hidden">

      {/* ── Background Image + Overlay ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}
      />
      {/* Intensified Premium Overlay Layers - Matching Hero Section */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 font-playfair drop-shadow-lg">
          What We Do
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl cursor-pointer block"
              style={{ height: '320px' }}
            >
              {/* Background Image with zoom on hover */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Dark gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Text content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-2 drop-shadow-lg">
                  {card.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-white/80 text-xs font-semibold uppercase tracking-widest group-hover:text-white group-hover:gap-2 transition-all duration-300">
                  Read More
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
