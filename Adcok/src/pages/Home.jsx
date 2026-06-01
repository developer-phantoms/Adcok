import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import AboutSection from '../components/AboutSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ResearchSection from '../components/ResearchSection';
import WhatWeDo from '../components/WhatWeDo';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer';
import ProductDetailsModal from '../components/ProductDetailsModal';
import HeroImage1 from '../assets/footer.webp';
import HeroImage2 from '../assets/Hero.jpg';
import HeroImage3 from '../assets/Research.jpg';
import HeroImage4 from '../assets/WHat we do.jpg';
import HeroImage5 from '../assets/contact us.jpg';

const heroImages = [HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5];

export default function Home({
  cartItems,
  wishlistItems,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  onToggleWishlist,
  onRemoveFromWishlist
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cart');

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

  return (
    <div className="bg-[#fdf2f3] overflow-hidden">

      {/* ── Hero Section with Full-Bleed Background ─────────────────────── */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background image + overlay slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out ${
                index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          {/* Intensified Premium Overlay Layers */}
          <div className="absolute inset-0 bg-black/65 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />
        </div>

        {/* Navbar (receives drawer triggers + counts) */}
        <Navbar
          cartCount={cartItems.length}
          wishlistCount={wishlistItems.length}
          onOpenCart={openCart}
          onOpenWishlist={openWishlist}
        />

        {/* Hero */}
        <Hero />
      </div>

      {/* ── Main Content Sections ────────────────────────────────────────── */}
      <div className="relative z-20">
        <Stats />
        <Categories />
        <AboutSection />

        {/* FeaturedProducts – receives shared state */}
        <FeaturedProducts
          cartItems={cartItems}
          wishlistItems={wishlistItems}
          onAddCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onOpenCart={openCart}
          onProductClick={openProductModal}
        />

        <ResearchSection />
        <WhatWeDo />
        <Testimonials />
        <CTA />
      </div>

      <Footer />

      {/* ── Floating Cart FAB ────────────────────────────────────────────── */}
      <button
        id="floating-cart-btn"
        onClick={openCart}
        aria-label="Open cart"
        className="fixed bottom-8 right-8 bg-[#800000] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 hover:bg-[#5a0000] transition-all duration-300 flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-[#800000] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#800000] animate-bounce">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* ── Side Drawer ──────────────────────────────────────────────────── */}
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
