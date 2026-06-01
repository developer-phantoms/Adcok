import React from 'react';

const ProductCard = ({ product, onAddCart, onToggleWishlist, isInWishlist, onProductClick }) => {
  return (
    <div 
      onClick={onProductClick}
      className="group w-full bg-white rounded-[32px] p-6 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(128,0,0,0.12)] transition-all duration-700 relative overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Category Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="bg-[#800000]/5 text-[#800000] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-[#800000]/10 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      {/* Floating Actions */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
          className={`p-3 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${isInWishlist ? 'bg-[#800000] text-white' : 'bg-white text-gray-400 hover:text-[#800000]'}`}
        >
          <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Image Wrapper */}
      <div className="h-[240px] w-full rounded-2xl overflow-hidden bg-[#FDFBFB] mb-6 flex items-center justify-center p-6 relative group-hover:bg-white transition-colors duration-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#800000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <img 
          src={product.img} 
          alt={product.name} 
          className="h-full w-auto object-contain mix-blend-multiply z-10"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-playfair font-black text-gray-900 text-xl leading-tight mb-2 group-hover:text-[#800000] transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Reviews & Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[10px] text-gray-400 ml-1 font-bold font-sans">({product.rating})</span>
          </div>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">In Stock</span>
          </span>
        </div>

        {/* Footer / Price & Add */}
        <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <p className="font-bold text-[#800000] text-2xl font-sans tracking-tight">
              <span className="text-xs font-bold mr-0.5 uppercase">Rs.</span>{product.price}
            </p>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onAddCart(product); }}
            className="group/btn relative h-14 w-14 bg-gray-900 rounded-2xl overflow-hidden hover:w-36 transition-all duration-500 shadow-xl shadow-black/10 hover:bg-[#800000] active:scale-95"
          >
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover/btn:-translate-x-full group-hover/btn:opacity-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center translate-x-[120%] opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-500">
              <span className="text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Add to Cart</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
