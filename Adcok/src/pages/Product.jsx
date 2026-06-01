import { useState, useMemo, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FranchiseSection from '../components/FranchiseSection';
import SideDrawer from '../components/SideDrawer';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';

import productsHero from '../assets/about-4.jpg';
import connectBg from '../assets/contactus.jpg';

// --- SVGs & Components ---

const MedicalPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
    <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="medical-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M30 10 L70 10 M50 0 L50 20" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="20" cy="50" r="3" fill="currentColor" />
          <path d="M80 80 Q 90 70 100 80" stroke="currentColor" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#medical-grid)" />
    </svg>
  </div>
);

const Breadcrumbs = () => (
  <nav className="flex items-center space-x-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
    <a href="/" className="hover:text-[#800000] transition-colors">Home</a>
    <span>/</span>
    <span className="text-[#800000]">Products</span>
  </nav>
);



export default function Product({ 
  cartItems, 
  wishlistItems, 
  onAddToCart, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  onToggleWishlist, 
  onRemoveFromWishlist 
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cart');

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('Latest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const [activePane, setActivePane] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setActiveTab('cart');
    setIsDrawerOpen(true);
  };

  const handleToggleWishlist = (product) => {
    onToggleWishlist(product);
    setActiveTab('wishlist');
    setIsDrawerOpen(true);
  };

  const openCart = () => { setActiveTab('cart'); setIsDrawerOpen(true); };
  const openWishlist = () => { setActiveTab('wishlist'); setIsDrawerOpen(true); };




  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || p.category.toUpperCase() === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'A–Z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Popular') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  }, [filteredProducts, currentPage, productsPerPage]);

  const productGridRef = useRef(null);

  useEffect(() => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  // Close sort dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#sort-dropdown-wrapper')) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf2f3] overflow-x-hidden">
      
      {/* 1. Navbar & Hero Section */}
      <div className="relative h-[70vh] md:h-[85vh] min-h-[600px]">
        {/* Background image + overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${productsHero})` }}
          />
                    {/* Intensified Premium Overlay Layers */}
                    <div className="absolute inset-0 bg-black/65 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />
                </div>

                <Navbar 
                    cartCount={cartItems.length}
                    wishlistCount={wishlistItems.length}
                    onOpenCart={openCart}
                    onOpenWishlist={openWishlist}
                />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[calc(100%-100px)] flex flex-col justify-center items-center text-center py-10 md:py-16">
                    
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/80 mb-6 animate-fade-in-up font-sans">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Products</span>
                    </nav>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-[1.2] animate-fade-in-up delay-300 font-['Playfair_Display'] tracking-tight">
                        Our Pharmaceutical <br />
                        <span className="italic font-medium text-white/90">Healthcare Solutions</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xs md:text-base text-white/90 max-w-xl font-light tracking-wide animate-fade-in-up delay-500 leading-relaxed">
                        Delivering High-Quality and Trusted Healthcare Solutions across global borders.
                    </p>
                </div>
            </div>

            <main className="flex-grow max-w-[1400px] mx-auto w-full px-6 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                    
                    {/* --- Sidebar --- */}
                    <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col">
                        <div className="sticky top-24 flex flex-col h-full">
                            
                            {/* Unified Sidebar Card */}
                            <div className="bg-white rounded-[15px] p-5 md:p-6 shadow-lg border border-gray-100 flex flex-col space-y-8 md:space-y-10 h-full">
                                
                                {/* 1. Search Section */}
                                <div>
                                    <span className="text-[#800000] font-bold text-base md:text-lg mb-3 md:mb-4 block tracking-tight">Search Products</span>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="SEARCH..."
                                            value={searchQuery}
                                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                            className="w-full bg-gray-50 border border-[#800000]/20 rounded-lg py-3 md:py-3.5 px-4 pl-10 focus:outline-none text-xs text-gray-800 placeholder-gray-400 font-sans transition-all focus:ring-1 focus:ring-[#800000]/50 focus:border-[#800000]/50"
                                        />
                                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#800000]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-[#800000]/30 via-[#800000]/10 to-transparent -mt-2" />

                                {/* 2. Categories Section */}
                                <div className="-mt-2">
                                    <span className="text-[#800000] font-bold text-base md:text-lg mb-4 md:mb-6 block tracking-tight">Categories</span>
                                    <div className="flex flex-col space-y-1">
                                        {['ALL', 'TABLETS', 'SYRUPS', 'DROPS', 'SUPPLEMENTS'].map((cat) => (
                                            <p
                                                key={cat}
                                                onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                                                className={`text-[0.75em] md:text-[0.85em] font-bold uppercase tracking-[0.15em] px-4 md:px-5 py-2.5 md:py-3 cursor-pointer transition-all duration-300 font-sans ${
                                                    selectedCategory === cat 
                                                        ? 'bg-[#800000] border-l-[3px] border-[#800000] text-white shadow-lg rounded-r-md' 
                                                        : 'text-gray-500 border-l-[3px] border-gray-200 hover:text-[#800000] hover:border-[#800000]'
                                                }`}
                                            >
                                                {cat}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </aside>

                    {/* --- Product Grid Content --- */}
                    <div ref={productGridRef} className="flex-grow">
                        <div className="flex flex-row items-end justify-between mb-10 gap-4">
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[#800000] font-black tracking-[0.3em] uppercase text-xs md:text-sm font-sans">
                                        PHARMACEUTICAL CATALOG
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight font-playfair leading-none">
                                    {selectedCategory}
                                </h2>
                            </div>

                            {/* Sort By Filter — Custom Dropdown */}
                            <div className="flex items-center shrink-0 pb-1 relative" id="sort-dropdown-wrapper">
                                <div className="relative">
                                    {/* Trigger Button */}
                                    <button
                                        onClick={() => setIsSortOpen(prev => !prev)}
                                        className="flex items-center gap-3 bg-white border-2 border-[#800000] hover:bg-[#fdf2f3] rounded-full py-2.5 pl-5 pr-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#800000] focus:outline-none cursor-pointer font-sans transition-all duration-300 min-w-[150px] justify-between shadow-sm"
                                    >
                                        <span>{sortBy === 'Latest' ? 'Latest First' : sortBy === 'Popular' ? 'Top Rated' : 'A–Z Order'}</span>
                                        <svg
                                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Panel */}
                                    {isSortOpen && (
                                        <div className="absolute right-0 top-[calc(100%+8px)] w-[180px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in-up">
                                            {/* Header strip */}
                                            <div className="bg-[#800000] px-4 py-2.5">
                                                <span className="text-white text-[9px] font-black uppercase tracking-[0.3em] font-sans">Sort Options</span>
                                            </div>
                                            {[  
                                                { value: 'Latest', label: 'Latest First' },
                                                { value: 'Popular', label: 'Top Rated' },
                                                { value: 'A–Z', label: 'A–Z Order' },
                                            ].map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                                                    className={`w-full flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] font-sans transition-all duration-200 ${
                                                        sortBy === opt.value
                                                            ? 'bg-[#fdf2f3] text-[#800000]'
                                                            : 'text-gray-500 hover:bg-gray-50 hover:text-[#800000]'
                                                    }`}
                                                >
                                                    {opt.label}
                                                    {sortBy === opt.value && (
                                                        <svg className="w-3.5 h-3.5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {paginatedProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                    {paginatedProducts.map((product) => (
                                        <ProductCard 
                                            key={product.id}
                                            product={product}
                                            onAddCart={handleAddToCart}
                                            onToggleWishlist={handleToggleWishlist}
                                            isInWishlist={wishlistItems.some(p => p.id === product.id)}
                                            onProductClick={() => openProductModal(product)}
                                        />
                                    ))}
                                </div>


                            </>
                        ) : (
                            <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-gray-200">
                                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight uppercase">No medicines found</h3>
                                <p className="text-gray-500 font-medium">Try adjusting your filters or search query.</p>
                                <button 
                                    onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
                                    className="mt-8 text-[#800000] font-black uppercase tracking-[0.2em] text-[10px] hover:underline"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Global Pagination Controls */}
                {paginatedProducts.length > 0 && totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-16 w-full">
                        <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                        >
                            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        
                        {[...Array(Math.min(totalPages, 2))].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-12 h-12 rounded-full font-black text-[11px] transition-all duration-300 font-sans ${
                                    currentPage === i + 1 
                                        ? 'bg-[#800000] text-white shadow-xl shadow-[#800000]/20 scale-110' 
                                        : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button 
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                        >
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                )}
            </main>

        {/* 5. Fanning Cards Showcase */}
        <section className="w-full h-[600px] md:h-[700px] bg-transparent relative overflow-hidden flex flex-col items-center justify-start group mt-10 pt-10 md:pt-16">
          
          {/* Header/Prompt for the section */}
          <div className="relative w-full text-center z-20 shrink-0 mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight font-playfair">
              Explore Our <span className="text-[#800000]">Featured Range</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-3 font-sans tracking-widest uppercase font-bold">
              Hover over the cards to expand
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative flex items-center justify-center w-full flex-grow scale-[0.4] sm:scale-[0.55] md:scale-[0.75] lg:scale-100 transition-transform duration-700 pb-20">
            {products.slice(0, 6).map((product, index) => {
              const fanClasses = [
                '-translate-x-[180px] translate-y-[40px] -rotate-[25deg]',
                '-translate-x-[100px] translate-y-[20px] -rotate-[15deg]',
                '-translate-x-[30px] translate-y-[5px] -rotate-[5deg]',
                'translate-x-[30px] translate-y-[5px] rotate-[5deg]',
                'translate-x-[100px] translate-y-[20px] rotate-[15deg]',
                'translate-x-[180px] translate-y-[40px] rotate-[25deg]'
              ];

              const spreadClasses = [
                'group-hover:-translate-x-[660px] group-hover:translate-y-0 group-hover:rotate-0',
                'group-hover:-translate-x-[396px] group-hover:translate-y-0 group-hover:rotate-0',
                'group-hover:-translate-x-[132px] group-hover:translate-y-0 group-hover:rotate-0',
                'group-hover:translate-x-[132px] group-hover:translate-y-0 group-hover:rotate-0',
                'group-hover:translate-x-[396px] group-hover:translate-y-0 group-hover:rotate-0',
                'group-hover:translate-x-[660px] group-hover:translate-y-0 group-hover:rotate-0'
              ];

              return (
                <div
                  key={`fan-card-${product.id}`}
                  onClick={() => openProductModal(product)}
                  className={`group/card absolute w-[240px] h-[320px] rounded-[24px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col justify-between overflow-hidden z-10 hover:!z-50 hover:!scale-[1.15] hover:border-[#800000]/30 hover:shadow-[0_0_40px_rgba(128,0,0,0.25)] hover:-translate-y-4 ${fanClasses[index]} ${spreadClasses[index]}`}
                >
                  {/* Image Container */}
                  <div className="w-full h-[75%] flex items-center justify-center p-8 relative bg-white">
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>

                  {/* Text Container (Bottom Strip) */}
                  <div className="w-full h-[25%] bg-[#800000] border-t border-[#800000] flex items-center justify-center px-4 transition-colors duration-300 group-hover/card:bg-[#660000]">
                    <span className="text-white font-sans font-bold tracking-wide text-sm text-center line-clamp-2">
                      {product.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Featured Products Section */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase block mb-4 font-sans">Featured Breakthrough</span>
                <h2 className="text-4xl md:text-6xl font-bold font-playfair text-gray-900 leading-tight tracking-tight">
                  Premium Health <br /> <span className="text-[#800000]">Innovation.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Scientifically Optimized Formulations",
                    "DRAP <span class='italic font-serif text-gray-700 mx-1'>&</span> GMP Certified Manufacturing",
                    "Global Standard Quality Assurance",
                    "Maximum Bioavailability <span class='italic font-serif text-gray-700 mx-1'>&</span> Efficacy"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#800000] flex items-center justify-center shadow-lg shadow-[#800000]/20">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span 
                        className="font-bold text-gray-700 text-sm md:text-base"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-[#800000]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                <div className="bg-white p-10 rounded-[60px] shadow-2xl border border-gray-100 relative group">
                  <img 
                    src={products[8].img} 
                    alt="Featured Product" 
                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 8. Bottom CTA Section */}
        <section className="relative py-16 md:py-20 overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={connectBg} 
              alt="Connect" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Premium Black Overlay Layers (Matching Hero) */}
            <div className="absolute inset-0 bg-black/65 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />
          </div>
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="max-w-[1240px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold font-playfair text-white tracking-tight leading-tight mb-8">
              Looking for Specific <br /> <span className="text-white/70 italic">Medical Solutions?</span>
            </h2>
            <a 
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-[#800000] rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all font-sans"
            >
              Contact Our Experts
              <svg className="ml-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </section>


      <FranchiseSection />
      <Footer />

      {/* Side Drawer for Cart/Wishlist */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onRemoveFromCart={onRemoveFromCart}
        onRemoveFromWishlist={onRemoveFromWishlist}
        onUpdateQuantity={onUpdateQuantity}
      />

      {/* Product Details Modal */}
      <ProductDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
