import React from 'react';

// Import Assets
import CholineImg from '../assets/Choline.avif';
import ColicDropsImg from '../assets/Colic Drops.webp';
import IroplexImg from '../assets/Herbiotics-Iroplex.webp';
import LmethylfoImg from '../assets/Lmethylfolate.webp';
import MultivitaminImg from '../assets/Multivitamin.webp';
import QuatrefolicImg from '../assets/Quatrefolic.jpg';
import ZincSyrupImg from '../assets/Zinc Syrup.webp';
import CalciumImg from '../assets/calcuim.jpg';

import { products } from '../data/products';

import ProductCard from './ProductCard';

// Props: cartItems, wishlistItems, onAddCart, onToggleWishlist (all from Home.jsx)
const FeaturedProducts = ({ cartItems = [], wishlistItems = [], onAddCart, onToggleWishlist, onProductClick }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#fdf2f3] pt-10 pb-20 md:pt-12 md:pb-28 overflow-hidden font-['Inter',sans-serif]">

      {/* Section Heading */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center animate-fade-in-up">
        <h4 className="text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-4 font-sans">Top Sellers</h4>
        <h2 className="text-3xl md:text-5xl font-bold font-playfair">
          Featured <span className="text-[#800000]">Products</span>
        </h2>
        <div className="h-1 w-24 bg-[#800000] mx-auto mt-6 rounded-full opacity-80"></div>
      </div>

      {/* Scrollable Container with Arrows */}
      <div className="w-full relative px-4 md:px-12">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#800000] hover:bg-[#800000] hover:text-white transition-all hidden md:flex"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#800000] hover:bg-[#800000] hover:text-white transition-all hidden md:flex"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Product Track */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-2 py-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {products.map(product => (
            <div key={`fp-${product.id}`} className="snap-center shrink-0 w-[280px] md:w-[320px] mx-4">
              <ProductCard
                product={product}
                onAddCart={onAddCart}
                onToggleWishlist={onToggleWishlist}
                isInWishlist={wishlistItems.some(p => p.id === product.id)}
                onProductClick={() => onProductClick && onProductClick(product)}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FeaturedProducts;
