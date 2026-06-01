import { useState } from 'react';
import Logo from '../assets/logo-2.png';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(() => {
    const path = window.location.pathname;
    if (path === '/contact') return 'Contact us';
    if (path === '/about') return 'About Us';
    if (path === '/products') return 'Products';
    if (path === '/research') return 'Research & Development';
    return 'Home';
  });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navItems = ['Home', 'About Us', 'Products', 'Research & Development', 'Contact us'];

  return (
    <div className="relative z-50 pt-4 md:pt-6 px-4 flex flex-col items-center gap-0">
      <nav className="bg-white rounded-full py-1 px-8 flex items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] w-full max-w-5xl justify-between relative z-50 min-h-[50px] md:min-h-[60px]">

        {/* ── Logo - Minimalist Size ────────────────────────────────── */}
        <a href="/" className="flex items-center transition-all duration-300 translate-y-0.5">
          <div className="h-4 w-20 md:h-8 md:w-32 flex items-center justify-start scale-105">
            <img
              src={Logo}
              alt="Adcock Logo"
              className="w-full h-auto object-contain brightness-110 contrast-125 drop-shadow-md"
            />
          </div>
        </a>

        {/* ── Desktop Nav Items ─────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-2 md:ml-auto">
          {navItems.map(item => (
            <li key={`desktop-${item}`} className="flex-shrink-0">
              <button
                onClick={() => {
                  setActiveItem(item);
                  if (item === 'Contact us') window.location.href = '/contact';
                  if (item === 'About Us') window.location.href = '/about';
                  if (item === 'Products') window.location.href = '/products';
                  if (item === 'Research & Development') window.location.href = '/research';
                  if (item === 'Home') window.location.href = '/';
                }}
                className={`px-3 lg:px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-xs lg:text-sm font-semibold ${activeItem === item
                  ? 'bg-[#800000] text-white shadow-md'
                  : 'text-[#800000] hover:bg-[#800000]/10'
                  }`}
              >
                {item === 'Research & Development' ? (
                  <>
                    Research <span className="italic font-serif opacity-80">&</span> Development
                  </>
                ) : item}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Right Side Actions ────────────────────────────────────── */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-[#800000] p-2 focus:outline-none"
          >
            {isMobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ──────────────────────────────────────── */}
      {isMobileOpen && (
        <div className="absolute top-full left-4 right-4 bg-white rounded-3xl shadow-2xl p-4 md:hidden animate-fade-in-up flex flex-col gap-2 z-50 border border-gray-100 mt-2">
          {navItems.map(item => (
            <button
              key={`mobile-${item}`}
              onClick={() => {
                setActiveItem(item);
                setIsMobileOpen(false);
                if (item === 'Contact us') window.location.href = '/contact';
                if (item === 'About Us') window.location.href = '/about';
                if (item === 'Products') window.location.href = '/products';
                if (item === 'Research & Development') window.location.href = '/research';
                if (item === 'Home') window.location.href = '/';
              }}
              className={`px-5 py-4 rounded-2xl transition-all duration-300 text-left font-semibold text-lg ${activeItem === item
                ? 'bg-[#800000] text-white shadow-md'
                : 'text-[#800000] hover:bg-[#800000]/10'
                }`}
            >
              {item === 'Research & Development' ? (
                <>
                  Research <span className="italic font-serif opacity-80">&</span> Development
                </>
              ) : item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
