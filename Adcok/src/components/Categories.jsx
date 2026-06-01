import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Women's Health",
      slug: "Tablets",
      border: "border-purple-300",
      bg: "bg-purple-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="6" />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="9" y1="19" x2="15" y2="19" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Skin & Beauty",
      slug: "Supplements",
      border: "border-pink-300",
      bg: "bg-pink-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M19 5l1 1-1 1-1-1 1-1z" />
          <path d="M4 8l1 1-1 1-1-1 1-1z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Energy & Multivitamins",
      slug: "Supplements",
      border: "border-red-300",
      bg: "bg-red-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Brain & Memory Support",
      slug: "Supplements",
      border: "border-indigo-300",
      bg: "bg-indigo-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.1c-1.1.2-2 .9-2.5 1.9A2.5 2.5 0 0 0 3 9c0 1.2.9 2.2 2 2.4.1.7.3 1.3.6 1.9A2.5 2.5 0 0 0 3 16c0 1.4 1.1 2.5 2.5 2.5H6c.1 2.2 1.9 4 4.1 4h3.8c2.2 0 4-1.8 4.1-4h.5c1.4 0 2.5-1.1 2.5-2.5 0-1.1-.7-2-1.7-2.3.2-.5.4-1.1.5-1.7 1.1-.3 2-1.3 2-2.5 0-1-.6-1.9-1.5-2.3C20.6 6.3 19.8 5.6 18.7 5.4v-.9A2.5 2.5 0 0 0 16.2 2H9.5z" />
          <path d="M12 22V2" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Children Care",
      slug: "Syrups",
      border: "border-yellow-300",
      bg: "bg-yellow-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="7" />
          <path d="M12 17c-3 0-6 2-6 5h12c0-3-3-5-6-5z" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
          <path d="M10 13a3 3 0 0 0 4 0" />
        </svg>
      )
    },
    {
      id: 6,
      name: "Bone & Calcium Health",
      slug: "Tablets",
      border: "border-blue-300",
      bg: "bg-blue-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 10c.8 0 1.5-.7 1.5-1.5S17.8 7 17 7s-1.5.7-1.5 1.5c0-.1-.1-.1-.1-.2-.6-1.5-2-2.8-3.9-2.8-2 0-3.5 1.4-4 3 0 .1-.1.2-.1.2-.1-.7-.8-1.4-1.5-1.4S4 8 4 8.8s.7 1.5 1.5 1.5c.3 0 .7-.1.9-.3.2.7.4 1.5.7 2.3.9 2.5 2.5 4.3 4.4 5.3v2c-1.1.2-2 1.1-2 2.2 0 1.1.9 2.1 2 2.1.8 0 1.5-.5 1.9-1.2.4.7 1.1 1.2 1.9 1.2 1.1 0 2-1 2-2.1 0-1.1-.9-2-2-2.2v-1.6c1.9-.9 3.4-2.5 4.2-4.9.4-1 .6-2.1.8-3.1.2.2.6.4.9.4z" />
        </svg>
      )
    },
    {
      id: 7,
      name: "Immunity Support",
      slug: "Supplements",
      border: "border-orange-300",
      bg: "bg-orange-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      )
    },
    {
      id: 8,
      name: "Men’s Health",
      slug: "Supplements",
      border: "border-gray-300",
      bg: "bg-gray-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="14" r="6" />
          <line x1="14.2" y1="9.8" x2="21" y2="3" />
          <polyline points="15 3 21 3 21 9" />
        </svg>
      )
    },
    {
      id: 9,
      name: "Digestive Health",
      slug: "Drops",
      border: "border-emerald-300",
      bg: "bg-emerald-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3c0 3 4 5 4 8s-3 6-3 9" />
          <path d="M12 3c0 3-4 5-4 8s3 6 3 9" />
          <path d="M18 3c0 3-4 5-4 8s3 6 3 9" />
        </svg>
      )
    },
    {
      id: 10,
      name: "Urinary Health",
      slug: "Supplements",
      border: "border-cyan-300",
      bg: "bg-cyan-100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <circle cx="12" cy="14" r="2" />
          <circle cx="7" cy="9" r="1" fill="#333" />
          <circle cx="17" cy="9" r="1" fill="#333" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#fdf2f3] pt-12 pb-24 px-4 md:px-8 font-['Inter',sans-serif] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-8">

        {/* Left Side Heading */}
        <div className="xl:w-1/4 flex-shrink-0 text-center xl:text-left z-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase font-playfair mb-5 leading-snug drop-shadow-sm animate-fade-in-up">
            <span className="text-gray-800">Supplement</span>{' '}
            <span className="text-[#800000]">Categories</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium max-w-md mx-auto xl:mx-0 animate-fade-in-up delay-300">
            Explore our wide range of tailored health products designed to meet your specific wellness needs.
          </p>
        </div>

        {/* Right Side Moving Banner (Marquee) */}
        <div className="xl:w-3/4 w-full relative flex overflow-hidden group animate-fade-in-up delay-500">
          
          {/* Fading Edges for smooth look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fdf2f3] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fdf2f3] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track 1 */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full shrink-0 gap-4 md:gap-8 items-center justify-around px-4">
            {categories.map((category) => (
              <a
                key={`track1-${category.id}`}
                href={`/products#${category.slug}`}
                className="flex flex-col items-center cursor-pointer group/item w-[150px] md:w-[180px] shrink-0"
              >
                {/* Outer Thin Border */}
                <div className={`w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full border-[1.5px] ${category.border} flex items-center justify-center mb-4 transition-transform duration-500 group-hover/item:scale-110 shadow-md group-hover/item:shadow-xl bg-white`}>
                  {/* Inner Filled Circle */}
                  <div className={`w-[90px] h-[90px] md:w-[105px] md:h-[105px] rounded-full ${category.bg} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                </div>
                {/* Title */}
                <span className="text-sm md:text-base font-bold text-[#800000] text-center max-w-[130px] leading-tight group-hover/item:text-black transition-colors duration-300 whitespace-normal">
                  {category.name}
                </span>
              </a>
            ))}
          </div>

          {/* Marquee Track 2 (Duplicate for infinite looping) */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full shrink-0 gap-4 md:gap-8 items-center justify-around px-4" aria-hidden="true">
            {categories.map((category) => (
              <a
                key={`track2-${category.id}`}
                href={`/products#${category.slug}`}
                className="flex flex-col items-center cursor-pointer group/item w-[150px] md:w-[180px] shrink-0"
              >
                {/* Outer Thin Border */}
                <div className={`w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full border-[1.5px] ${category.border} flex items-center justify-center mb-4 transition-transform duration-500 group-hover/item:scale-110 shadow-md group-hover/item:shadow-xl bg-white`}>
                  {/* Inner Filled Circle */}
                  <div className={`w-[90px] h-[90px] md:w-[105px] md:h-[105px] rounded-full ${category.bg} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                </div>
                {/* Title */}
                <span className="text-sm md:text-base font-bold text-[#800000] text-center max-w-[130px] leading-tight group-hover/item:text-black transition-colors duration-300 whitespace-normal">
                  {category.name}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Categories;
