import React from 'react';

const ProductDetailsModal = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const whatsappMessage = `Hello! I want to order ${product.name}. Please share its price and availability.`;
  const whatsappUrl = `https://wa.me/+923363365851?text=${encodeURIComponent(whatsappMessage)}`;

  // --- Dynamic Dummy Data for specific fields ---
  const ingredients = (product.ingredients && product.ingredients.length > 0) ? product.ingredients : [
    { name: "Main Formulation", strength: product.strength || "500mg" },
    { name: "Active Compound", strength: "10mg" },
    { name: "Natural Extracts", strength: "QS" }
  ];

  const benefits = (product.benefits && product.benefits.length > 0) ? product.benefits : [
    "Supports specific healthcare needs",
    "High bioavailability & fast absorption",
    "Manufactured in GMP certified facility",
    "Trusted by healthcare professionals"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 lg:p-8">
      {/* Overlay with premium blur */}
      <div 
        className="absolute inset-0 bg-[#1F2937]/75 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-6xl max-h-[92vh] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] flex flex-col md:flex-row animate-[modal-entry_0.5s_cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
        
        {/* Close Button - More visible and premium */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-gray-500 hover:text-[#8B1E2D] hover:rotate-90 hover:scale-110 transition-all duration-300 shadow-xl border border-gray-100 group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Left: Product Image Section - Interactive & Spacious */}
        <div className="w-full md:w-[45%] bg-[#FDFBFB] flex items-center justify-center p-8 md:p-10 lg:p-16 border-b md:border-b-0 md:border-r border-gray-100 relative group overflow-hidden shrink-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,#f9fafb_100%)] opacity-50"></div>
           
           <img 
             src={product.img} 
             alt={product.name} 
             className="relative z-10 max-w-full max-h-[250px] md:max-h-[500px] object-contain transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]" 
           />
           
           {/* Certification Badges */}
           <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-extrabold uppercase tracking-[0.2em] text-black border border-gray-100 shadow-sm">GMP Certified</span>
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-extrabold uppercase tracking-[0.2em] text-black border border-gray-100 shadow-sm">Quality Tested</span>
           </div>
        </div>

        {/* Right: Product Details Section (Scrollable) */}
        <div className="w-full md:w-[55%] flex flex-col min-h-0 bg-white relative">
           <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-14 custom-scrollbar">
              
              {/* Header Info */}
              <div className="mb-10">
                 <div className="flex items-center gap-3 mb-5">
                    <span className="bg-[#8B1E2D] text-white text-[10px] font-extrabold uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-lg shadow-[#8B1E2D]/20 font-sans">
                       {product.category}
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-emerald-100 flex items-center gap-2 font-sans">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> In Stock
                    </span>
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight font-playfair mb-6 tracking-tight">
                    {product.name}
                 </h2>
                 
                 {/* Quick Specs Grid - Enhanced */}
                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                    {[
                      { label: 'Strength', value: product.strength || "500mg", icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                      { label: 'Form', value: product.category || "Tablets", icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.318.318a2 2 0 002.828 0l2.387-2.387a2 2 0 011.022-.547l2.387-.477a6 6 0 013.86-.517l.318-.158a6 6 0 003.86-.517l2.387.477a2 2 0 011.022.547l2.387 2.387a2 2 0 002.828 0l.318-.318a2 2 0 000-2.828l-2.387-2.387z' },
                      { label: 'Pack Size', value: '30 Units', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' }
                    ].map((spec, i) => (
                      <div key={i} className="bg-gray-50/80 p-4 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                         <div className="flex items-center gap-2 mb-2">
                            <svg className="w-3.5 h-3.5 text-[#8B1E2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={spec.icon} /></svg>
                            <p className="text-[9px] text-black uppercase font-black tracking-widest">{spec.label}</p>
                         </div>
                         <p className="text-sm font-bold text-gray-900 font-sans">{spec.value}</p>
                      </div>
                    ))}
                 </div>

                  <div className="flex items-end gap-4 mb-10">
                     <div>
                        <span className="text-[11px] text-black uppercase tracking-widest font-extrabold block mb-2">Market Price</span>
                        <p className="text-3xl md:text-5xl font-black text-[#8B1E2D] font-sans flex items-center gap-2">
                           <span className="text-lg font-bold opacity-70">Rs.</span>
                           {product.price}
                        </p>
                     </div>
                     <div className="mb-1 px-4 py-1.5 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-[10px] font-black text-black uppercase tracking-tighter">Tax Inclusive</p>
                     </div>
                  </div>

                 <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-[#8B1E2D]/20 rounded-full"></div>
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium italic pl-4">
                       "{product.description}"
                    </p>
                 </div>
              </div>

              {/* Enhanced Content Sections */}
              <div className="space-y-12">
                 
                 {/* Key Benefits */}
                 <div>
                    <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.35em] mb-6 flex items-center gap-3 font-sans">
                       <span className="w-10 h-[2.5px] bg-[#8B1E2D]"></span>
                       Core Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-4 bg-[#fdf2f3] p-5 rounded-2xl border border-[#8B1E2D]/10 hover:border-[#8B1E2D]/30 transition-all shadow-sm">
                             <div className="w-7 h-7 bg-[#8B1E2D] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#8B1E2D]/30">
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" /></svg>
                             </div>
                             <span className="text-[13px] font-bold text-[#800000] font-sans">{benefit}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Ingredients Table */}
                 <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
                    <div className="bg-gray-50/80 px-8 py-5 border-b border-gray-100 flex justify-between items-center">
                       <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em] font-sans">Active Formulation</h4>
                    </div>
                    <table className="w-full text-left text-sm">
                       <tbody className="divide-y divide-gray-50">
                          {ingredients.map((ing, i) => (
                             <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-8 py-5 text-gray-800 font-bold font-sans">{ing.name}</td>
                                <td className="px-8 py-5 text-right">
                                   <span className="bg-gray-100 text-gray-900 px-4 py-1.5 rounded-xl font-black text-[11px] font-sans tracking-tight">
                                      {ing.strength}
                                   </span>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>

                 {/* Usage & Safety */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
                    <div className="bg-[#1a1a1a] p-8 rounded-[2rem] text-white shadow-xl shadow-black/10">
                       <div className="flex items-center gap-4 mb-5">
                          <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] font-sans">Dosage</h4>
                       </div>
                       <p className="text-sm text-gray-300 leading-relaxed font-medium font-sans">
                          Take 1 {product.category?.toLowerCase() || 'unit'} daily after meals or as directed by a healthcare professional.
                       </p>
                    </div>
                    
                    <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100 shadow-sm">
                       <div className="flex items-center gap-4 mb-5">
                          <div className="w-10 h-10 bg-amber-200/50 rounded-2xl flex items-center justify-center text-amber-700 border border-amber-200/30">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                          </div>
                          <h4 className="text-[11px] font-black text-amber-800 uppercase tracking-[0.25em] font-sans">Safety</h4>
                       </div>
                       <ul className="text-[12px] text-amber-900 space-y-2.5 font-bold font-sans">
                          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Children Reach</li>
                          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Recommended Dose</li>
                          <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Consult Doctor</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>

           {/* Footer: Persistent Buttons */}
           <div className="p-6 sm:p-10 border-t border-gray-100 bg-white/95 backdrop-blur-md flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => { onAddToCart(product); }}
                className="flex-[1.5] group relative flex items-center justify-center gap-4 bg-[#800000] text-white font-black uppercase tracking-[0.2em] text-[11px] py-4.5 rounded-2xl hover:bg-[#a00000] transition-all duration-500 shadow-2xl active:scale-95 overflow-hidden"
              >
                 <span className="relative z-10">Add to Cart</span>
                 <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 group relative flex items-center justify-center gap-4 bg-[#25D366] text-white font-black uppercase tracking-[0.2em] text-[11px] py-4.5 rounded-2xl hover:bg-[#128C7E] transition-all duration-500 shadow-2xl active:scale-95 overflow-hidden"
              >
                 <svg className="w-5 h-5 fill-current transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                 </svg>
                 <span>Order Now</span>
              </a>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modal-entry {
          from { opacity: 0; transform: scale(0.9) translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8B1E2D;
          border-radius: 20px;
          border: 2px solid #f9fafb;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #5a0000;
        }
      `}} />
    </div>
  );
};

export default ProductDetailsModal;
