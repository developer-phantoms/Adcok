import React from 'react';

const SideDrawer = ({ isOpen, onClose, activeTab, setActiveTab, cartItems, wishlistItems, onRemoveFromCart, onRemoveFromWishlist, onUpdateQuantity }) => {

  const getWhatsAppLink = () => {
    if (!cartItems || cartItems.length === 0) return '#';
    const message = cartItems.map(item => `- ${item.name} x${item.quantity || 1} (Rs. ${(parseInt(String(item.price).replace(/,/g, '') || 0) * (item.quantity || 1)).toLocaleString()})`).join('%0A');
    const total = cartItems.reduce((sum, item) => sum + (parseInt(String(item.price).replace(/,/g, '') || 0) * (item.quantity || 1)), 0);
    return `https://wa.me/+923363365851?text=Hello!%20I%20want%20to%20order:%0A${message}%0A%0ATotal:%20Rs.%20${total.toLocaleString()}`;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] max-w-[90vw] bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out flex flex-col font-['Inter',sans-serif] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 mt-2">
          <h2 className="text-2xl font-bold font-playfair tracking-wide text-[#800000] uppercase">
            Your Bag
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-red-500 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('cart')}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'cart' ? 'bg-[#fdf2f3] text-[#800000] border-[#800000]' : 'text-gray-500 border-transparent hover:bg-gray-50'}`}
          >
            Cart ({cartItems?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'wishlist' ? 'bg-[#fdf2f3] text-[#800000] border-[#800000]' : 'text-gray-500 border-transparent hover:bg-gray-50'}`}
          >
            Wishlist ({wishlistItems?.length || 0})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
          {activeTab === 'cart' ? (
            cartItems?.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative group">
                    <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex items-center justify-center shrink-0">
                      <img src={item.img} className="max-w-full max-h-full object-contain" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm leading-tight line-clamp-2">{item.name}</h4>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">{item.category}</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[#800000] font-bold font-sans text-sm">Rs. {(parseInt(String(item.price).replace(/,/g, '') || 0) * (item.quantity || 1)).toLocaleString()}</p>

                        {/* Quantity Control - Professional 3-Box */}
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, -1)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-[#800000] transition-colors border-r border-gray-100"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" /></svg>
                          </button>
                          <div className="w-12 h-10 flex items-center justify-center bg-white">
                            <span className="text-sm font-bold text-gray-800 font-sans">{item.quantity || 1}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, 1)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-[#800000] transition-colors border-l border-gray-100"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)}
                      className="absolute -top-2 -right-2 w-7 h-7 bg-white text-gray-400 hover:text-red-500 shadow-md border border-gray-50 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                      title="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-gray-500 font-medium">Your cart is empty.</p>
              </div>
            )
          ) : (
            wishlistItems?.length > 0 ? (
              <div className="space-y-4">
                {wishlistItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100 relative group pr-10">
                    <img src={item.img} className="w-20 h-20 object-contain rounded-lg bg-gray-50 p-1 shrink-0" alt={item.name} />
                    <div className="flex flex-col justify-center overflow-hidden">
                      <h4 className="font-bold text-gray-800 text-sm leading-tight truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1 truncate">{item.category}</p>
                      <p className="text-[#800000] font-bold mt-2 font-sans">Rs. {item.price}</p>
                    </div>
                    <button
                      onClick={() => onRemoveFromWishlist && onRemoveFromWishlist(item.id)}
                      className="absolute top-1/2 -translate-y-1/2 right-3 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                      title="Remove from wishlist"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="text-gray-500 font-medium">Your wishlist is empty.</p>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        {activeTab === 'cart' && cartItems?.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#800000] text-white font-bold py-4 rounded-xl hover:bg-black transition-all duration-300 flex justify-center items-center gap-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Order via WhatsApp</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default SideDrawer;
