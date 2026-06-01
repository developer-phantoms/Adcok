import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroBg from '../assets/about-5.jpg';
import overviewImg from '../assets/WHat we do.jpg';
import {
    FaCheckCircle, FaLightbulb, FaShieldAlt, FaHeart,
    FaFlask, FaHandsHelping, FaAward, FaCertificate, FaEye
} from 'react-icons/fa';

// Assets for Orbital Section
import manufacturing from '../assets/About us 1.jpg';
import profileImg from '../assets/profile 3.jpg';
import research from '../assets/Research.jpg';
import whatWeDo from '../assets/WHat we do.jpg';
import connectImg from '../assets/connec.jpg';
import community from '../assets/About us.jpg';
import innovation from '../assets/Quatrefolic.jpg';

const orbitalItems = [
    { title: "Research Unit", img: research },
    { title: "Production Floor", img: manufacturing },
    { title: "Quality Lab", img: whatWeDo },
    { title: "Connect Us", img: connectImg, link: "/contact" },
    { title: "Innovation", img: innovation },
    { title: "Sustainability", img: community }
];

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "" }) => {
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
            { threshold: 0.1 }
        );
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime;
        const duration = 2000;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [end, isVisible]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

import SideDrawer from '../components/SideDrawer';

export default function About({
    cartItems = [],
    wishlistItems = [],
    onAddToCart,
    onUpdateQuantity,
    onRemoveFromCart,
    onToggleWishlist,
    onRemoveFromWishlist
}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('cart');

    const openCart = () => { setActiveTab('cart'); setIsDrawerOpen(true); };
    const openWishlist = () => { setActiveTab('wishlist'); setIsDrawerOpen(true); };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#fdf2f3] overflow-x-hidden">

            {/* 1. Navbar & Hero Section */}
            <div className="relative h-[70vh] md:h-[85vh] min-h-[600px]">
                {/* Background image + overlay */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-float"
                        style={{ backgroundImage: `url(${heroBg})` }}
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
                    <div className="flex items-center justify-center gap-3 text-white/80 text-[10px] md:text-[11px] mb-6 animate-fade-in-up font-sans font-black uppercase tracking-[0.3em]">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">About Us</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-[1.2] animate-fade-in-up delay-300 font-['Playfair_Display'] tracking-tight">
                        Dedicated to the <br />
                        <span className="italic font-medium text-white/90">Science of Care</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xs md:text-base text-white/90 max-w-xl font-light tracking-wide animate-fade-in-up delay-500 leading-relaxed mb-8">
                        Committed to advancing healthcare through innovation, research, and quality pharmaceutical solutions.
                    </p>

                    {/* Pill Badges standardized */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 animate-fade-in-up delay-700">
                        {[
                            "DRAP Approved",
                            "Form-7 Certified",
                            "All Pakistan Distribution",
                            "Franchise Available"
                        ].map((badge, i) => (
                            <span
                                key={i}
                                className="px-5 py-2 bg-white/20 text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border border-white/50 backdrop-blur-md shadow-lg transition-all duration-300 cursor-default hover:bg-white/30"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <main className="relative z-20 bg-white">

                {/* 3. Company Overview Section */}
                <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#800000] rounded-3xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <img
                                src={overviewImg}
                                alt="Laboratory Research"
                                className="relative rounded-3xl z-10 w-full h-[400px] md:h-[500px] object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 hidden md:flex">
                                <div className="w-16 h-16 bg-[#fdf2f3] rounded-full flex items-center justify-center text-[#800000] text-3xl">
                                    <FaAward />
                                </div>
                                <div>
                                    <h4 className="font-bold text-2xl text-gray-900">10+ Years</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-sans">Of Excellence</p>
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-[#800000] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase font-sans">
                                <span>✦ Who We Are</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Delivering Healthcare <br /> <span className="text-[#800000] italic">Excellence Globally</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-sans">
                                Adcok Pharmacy was founded with a singular vision: to improve global health outcomes by developing, manufacturing, and commercializing high-quality, affordable pharmaceutical products. Over the years, we have built a legacy of trust and reliability in the medical community.
                            </p>

                            <ul className="space-y-4 mt-6">
                                {[
                                    'Trusted pharmaceutical solutions',
                                    'Advanced research & development facilities',
                                    'Strict regulatory compliance and quality control',
                                    'Customer-focused innovation and care'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-gray-700 font-sans font-medium text-lg">
                                        <FaCheckCircle className="text-[#800000] text-xl shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Mission & Vision Section */}
                <section className="py-20 md:py-28 px-6 md:px-12 bg-[#800000] text-white">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                        {/* Mission Card */}
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[32px] hover:bg-white/15 transition-all duration-500 group shadow-2xl">
                            <div className="absolute top-0 left-10 md:left-12 -translate-y-1/2 w-16 h-16 bg-white text-[#800000] rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <FaLightbulb />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 font-['Playfair_Display']">Our Mission</h3>
                            <p className="text-base text-white/90 leading-relaxed font-sans font-light">
                                To deliver safe, effective, and high-quality pharmaceutical products that improve patient health, enhance quality of life, and promote well-being in communities worldwide through continuous innovation.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[32px] hover:bg-white/15 transition-all duration-500 group shadow-2xl">
                            <div className="absolute top-0 left-10 md:left-12 -translate-y-1/2 w-16 h-16 bg-white text-[#800000] rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <FaEye />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 font-['Playfair_Display']">Our Vision</h3>
                            <p className="text-base text-white/90 leading-relaxed font-sans font-light">
                                To become a globally recognized pharmaceutical leader known for unmatched innovation, steadfast trust, and relentless pursuit of excellence in providing accessible healthcare solutions for a healthier tomorrow.
                            </p>
                        </div>

                    </div>
                </section>

                {/* 5. Core Values Section */}
                <section className="py-12 md:py-16 px-6 md:px-12 bg-gray-50 border-t border-b border-gray-100">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Core <span className="text-[#800000] italic">Metrics</span></h2>
                            <p className="text-lg text-gray-600 font-sans">The analytical principles that drive our performance and long-term goals.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: <FaShieldAlt />, title: 'Quality Assurance', pct: '100%', desc: 'Strict compliance with global standards.' },
                                { icon: <FaFlask />, title: 'Innovation Growth', pct: '85%', desc: 'Year-over-year R&D investment increase.' },
                                { icon: <FaHandsHelping />, title: 'Integrity Rating', pct: '99%', desc: 'Transparent and ethical business operations.' },
                                { icon: <FaHeart />, title: 'Patient Safety', pct: '100%', desc: 'Zero compromises on patient well-being.' },
                                { icon: <FaCertificate />, title: 'Research Output', pct: '92%', desc: 'High success rate in clinical advancements.' },
                                { icon: <FaCheckCircle />, title: 'Client Retention', pct: '95%', desc: 'Long-lasting global partnerships.' }
                            ].map((value, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-[#800000] text-white rounded-xl flex items-center justify-center text-xl shadow-lg shadow-[#800000]/20">
                                            {value.icon}
                                        </div>
                                        <div className="text-2xl font-semibold text-[#800000] font-sans tracking-tight">{value.pct}</div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                                        <p className="text-sm text-gray-500 font-sans leading-relaxed mb-6 h-10">{value.desc}</p>

                                        {/* Chart-like progress bar */}
                                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="bg-[#800000] h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: value.pct }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Company Timeline Section - Dynamic Geometric Style */}
                <section className="py-20 md:py-32 px-6 md:px-12 bg-white overflow-hidden relative">
                    {/* Premium Organic & Technical Background Elements */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Large Organic Wavy Blobs - Light Maroon Gradient */}
                        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[50%] bg-gradient-to-br from-[#800000]/15 to-transparent rounded-[100px_300px_150px_400px] blur-[80px] animate-blob"></div>
                        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[60%] bg-gradient-to-bl from-[#800000]/10 to-transparent rounded-[300px_100px_400px_150px] blur-[100px] animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-[10%] left-[10%] w-[50%] h-[40%] bg-gradient-to-tr from-[#800000]/10 to-transparent rounded-[400px_200px_300px_100px] blur-[90px] animate-blob animation-delay-4000"></div>

                        {/* Technical Accents - Crosses, Squiggles, Circles */}
                        {/* Squiggly Lines (SVG) */}
                        <div className="absolute top-[10%] left-[15%] opacity-20 text-[#800000]">
                            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M0 10C5 10 5 2 10 2C15 2 15 10 20 10C25 10 25 18 30 18C35 18 35 10 40 10C45 10 45 2 50 2C55 2 55 10 60 10" />
                            </svg>
                        </div>
                        <div className="absolute bottom-[20%] right-[12%] opacity-20 text-[#800000] rotate-45">
                            <svg width="80" height="30" viewBox="0 0 80 30" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M0 15C10 15 10 5 20 5C30 5 30 15 40 15C50 15 50 25 60 25C70 25 70 15 80 15" />
                            </svg>
                        </div>

                        {/* Crosses & Small Icons */}
                        <div className="absolute top-[25%] right-[20%] text-[#800000]/30 font-light text-2xl animate-float">+</div>
                        <div className="absolute bottom-[40%] left-[5%] text-[#800000]/30 font-light text-3xl animate-bounce-slow">×</div>
                        <div className="absolute top-[60%] right-[5%] w-4 h-4 border-2 border-[#800000]/20 rounded-full animate-pulse-slow"></div>
                        <div className="absolute bottom-[10%] left-[25%] w-6 h-6 border-2 border-[#800000]/20 rounded-sm rotate-45 animate-spin-slow"></div>

                        {/* Dot Grids (Technical clusters) */}
                        <div className="absolute top-10 right-10 w-32 h-32 opacity-10" style={{ backgroundImage: 'radial-gradient(#800000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 opacity-10" style={{ backgroundImage: 'radial-gradient(#800000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                        <div className="absolute top-1/2 left-[2%] w-24 h-48 opacity-10" style={{ backgroundImage: 'radial-gradient(#800000 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>

                    </div>

                    <div className="max-w-[1100px] mx-auto relative z-10">
                        <div className="text-center mb-20 space-y-4">
                             <div className="inline-flex items-center gap-2 text-[#800000] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] font-sans">
                                <span className="w-12 h-[2px] bg-[#800000] inline-block"></span>
                                Our Legacy
                                <span className="w-12 h-[2px] bg-[#800000] inline-block"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Our Journey of <span className="text-[#800000] italic">Growth</span></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto font-sans text-lg">A decade of commitment, innovation, and pharmaceutical excellence.</p>
                        </div>

                        <div className="relative">
                            {/* Central Line - Maroon Gradient */}
                            <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#800000]/10 via-[#800000] to-[#800000]/10 rounded-full"></div>

                            <div className="space-y-16 md:space-y-32">
                                {[
                                    { year: '2015', title: 'Company Founded', desc: 'Adcok Pharmacy was established with a small but dedicated team of visionary scientists and pharmacists.', icon: <FaAward /> },
                                    { year: '2017', title: 'First Product Launch', desc: 'Successfully launched our first line of essential vitamins and supplements to the local market.', icon: <FaFlask /> },
                                    { year: '2019', title: 'Expanded Research', desc: 'Opened a state-of-the-art R&D facility to accelerate the development of specialized therapeutics.', icon: <FaLightbulb /> },
                                    { year: '2022', title: 'Global Entry', desc: 'Began exporting our high-quality pharmaceutical products to neighboring international markets.', icon: <FaHandsHelping /> },
                                    { year: '2024', title: 'Manufacturing Upgrade', desc: 'Upgraded to a fully automated, GMP-certified manufacturing plant to meet growing global demand.', icon: <FaShieldAlt /> }
                                ].map((item, idx) => (
                                    <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute left-[22px] top-8 w-5 h-5 bg-[#800000] rounded-full ring-4 ring-white shadow-lg z-10"></div>

                                        {/* Card Content */}
                                        <div className={`w-full pl-16 md:pl-0 md:w-[44%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="bg-gray-50/80 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(128,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                                                {/* Subtle inner decorative shape - Turns Maroon on Hover */}
                                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#800000]/5 rounded-full transition-all duration-700 group-hover:bg-[#800000] group-hover:scale-150 opacity-50 group-hover:opacity-10"></div>
                                                
                                                <span className="md:hidden text-2xl font-black text-[#800000] tracking-tighter block mb-2">{item.year}</span>
                                                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">{item.title}</h4>
                                                <p className="text-gray-600 text-sm md:text-lg leading-relaxed font-sans font-normal">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Central Year Bubble - Permanent Maroon */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-24 h-24 bg-[#800000] rounded-full border-[6px] border-white shadow-2xl items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                                            <span className="text-white font-black text-xl">{item.year}</span>
                                        </div>

                                        {/* Icon Side */}
                                        <div className={`hidden md:flex w-[44%] items-center ${idx % 2 === 0 ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                                            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-center text-5xl md:text-6xl text-[#800000] shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#800000]/5 group-hover:border-[#800000]/10">
                                                {item.icon}
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Orbital Leadership & Facilities Section */}
                <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#F9FAFB] relative overflow-hidden flex flex-col items-center justify-center">
                    {/* Background pattern */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1.5px,transparent_1.5px)] [background-size:40px_40px] opacity-70"></div>
                    </div>

                    {/* Section Heading */}
                    <div className="relative z-30 text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] tracking-tight uppercase">Our <span className="text-[#8B1E2D] italic">Leadership</span></h2>
                        <div className="w-20 h-1 bg-[#8B1E2D]/40 mx-auto mt-4 rounded-full"></div>
                    </div>

                    {/* Main Orbit Container */}
                    <div className="relative w-[70%] sm:w-[60%] md:w-[70%] max-w-[260px] sm:max-w-[340px] md:max-w-[460px] lg:max-w-[580px] aspect-square flex flex-col items-center justify-center my-6 md:my-10">

                        {/* Center Piece: Tayyab Gohar */}
                        <div className="relative z-20 flex flex-col items-center shrink-0">
                            <div
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full border-2 md:border-[6px] border-[#E5E7EB] overflow-hidden shadow-[0_0_40px_rgba(139,30,45,0.1)] transition-transform duration-700 hover:scale-105 bg-white p-1"
                            >
                                <img
                                    src={profileImg}
                                    className="w-full h-full object-cover rounded-full"
                                    alt="Tayyab Gohar"
                                />
                            </div>
                            <div className="mt-2 md:mt-4 text-center px-2 sm:px-4 w-max bg-white border border-[#E5E7EB] shadow-md rounded-md sm:rounded-lg py-1 sm:py-2 relative z-30">
                                <h2 className="text-[10px] sm:text-xs md:text-lg lg:text-[22px] font-black text-[#1F2937] uppercase tracking-tighter w-full font-sans">Tayyab Gohar</h2>
                                <p className="text-[#8B1E2D] font-black tracking-normal uppercase mt-0.5 text-[6px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-sans">Excellence in every dose</p>
                            </div>
                        </div>

                        {/* Orbit Paths (Circles) */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div className="absolute w-full h-full border sm:border-2 border-dashed border-[#E5E7EB] rounded-full animate-[spin_60s_linear_infinite]"></div>
                            <div className="absolute w-[60%] h-[60%] border sm:border-2 border-dashed border-[#E5E7EB] rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                        </div>

                        {/* Orbit Items (Mapped to circumference) */}
                        <div className="absolute inset-0">
                            {orbitalItems.map((item, idx) => {
                                const angle = (idx * 60) * (Math.PI / 180);
                                const x = Math.cos(angle) * 50;
                                const y = Math.sin(angle) * 50;

                                return (
                                    <a
                                        key={idx}
                                        href={item.link || "#"}
                                        className="absolute z-10 flex flex-col items-center group cursor-pointer"
                                        style={{
                                            left: `calc(50% + ${x}%)`,
                                            top: `calc(50% + ${y}%)`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border-2 border-[#E5E7EB] overflow-hidden shadow-sm transition-all duration-500 hover:border-[#8B1E2D] hover:scale-110 hover:shadow-md p-0.5 bg-white flex-shrink-0">
                                            <img src={item.img} className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                                        </div>
                                        {/* Item label */}
                                        <span className="absolute top-[110%] text-[#1F2937] font-black text-[7px] sm:text-[9px] md:text-[11px] lg:text-[13px] uppercase tracking-tight text-center min-w-[60px] md:min-w-[100px] shadow-md bg-white border border-[#E5E7EB] px-2 py-1 md:py-1.5 rounded-md font-sans">
                                            {item.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </section>



                {/* 9. Impact & Statistics Section */}
                <section className="py-16 md:py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-white relative overflow-hidden border-t border-gray-100">
                    <div className="max-w-[1300px] mx-auto">

                        {/* Section Heading */}
                        <div className="text-center mb-16 space-y-3">
                            <span className="text-[#8B1E2D] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase block font-sans">Our Achievements</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] tracking-tight">
                                Impact at a <span className="text-[#8B1E2D] italic">Glance</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {[
                                {
                                    end: 200,
                                    suffix: "k",
                                    desc: "Patients have served By us in patholab laboratory",
                                    icon: (
                                        <svg className="w-8 h-8 text-[#006ce6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Microscope Icon */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10V5H7v14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#2dd4a8" d="M10 10a2 2 0 104 0 2 2 0 00-4 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    end: 100,
                                    suffix: "%",
                                    desc: "Client Satisfaction has been achieved by patholab",
                                    icon: (
                                        <svg className="w-8 h-8 text-[#006ce6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Doctor/Client Icon */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#2dd4a8" d="M9 12l2 2 4-4" />
                                        </svg>
                                    )
                                },
                                {
                                    end: 350,
                                    suffix: "+",
                                    desc: "Kinds of tests are available here in the laboratory",
                                    icon: (
                                        <svg className="w-8 h-8 text-[#006ce6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* DNA Icon */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 3c0 3 10 7 10 12s-10 9-10 9M17 3c0 3-10 7-10 12s10 9 10 9" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#2dd4a8" d="M8 7h8M7 12h10M8 17h8" />
                                        </svg>
                                    )
                                },
                                {
                                    end: 10,
                                    suffix: "k",
                                    desc: "Amazing research has been conducted by us",
                                    icon: (
                                        <svg className="w-8 h-8 text-[#006ce6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Research/Analysis Icon */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#2dd4a8" d="M10 7a3 3 0 100 6 3 3 0 000-6zm0 0l3-3m-3 9l3 3" />
                                        </svg>
                                    )
                                }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-start p-2 group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-center gap-5 mb-4">
                                        <div className="w-[70px] h-[70px] rounded-[16px] border border-gray-100 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-all">
                                            {stat.icon}
                                        </div>
                                        <div className="text-[36px] md:text-[44px] font-semibold text-[#1a3050] tracking-tight">
                                            <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-[13px] md:text-[14px] leading-relaxed max-w-[260px] font-medium font-sans">
                                        {stat.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. Call-to-Action Section */}
                <section className="py-10 md:py-12 px-6 text-center bg-[#800000] text-white">
                    <div className="max-w-3xl mx-auto space-y-5 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Partner With Us for <br /> <span className="italic font-medium text-white/90">Better Healthcare</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/80 font-sans font-light">
                            Discover our comprehensive range of products or get in touch to explore partnership opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/contact" className="bg-white text-[#800000] px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 hover:shadow-2xl transition-all duration-300 font-sans">
                                Contact Us Today
                            </a>
                            <a href="/products" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-[#800000] hover:scale-105 transition-all duration-300 font-sans">
                                View Products
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

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
        </div>
    );
}
