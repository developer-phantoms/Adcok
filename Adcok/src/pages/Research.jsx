import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import researchHero from '../assets/Research.jpg';
import { FaMicroscope, FaFlask, FaDna, FaShieldAlt, FaGlobe, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import research3 from '../assets/Research-3.png';
import neuralBg from '../assets/neural.gif';
import neural2Bg from '../assets/neural-2.avif';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import img11 from '../assets/img-11.png';

const tabData = {
    Clinical: [
        'Phase I–IV Clinical Trial Design',
        'Patient Safety Monitoring',
        'Regulatory Submission Support',
        'Clinical Data Management',
        'Adverse Event Reporting',
        'Biostatistics & Analysis',
        'GCP Compliance Audits',
        'Post-Market Surveillance',
    ],
    Formulation: [
        'Tablet & Capsule Development',
        'Controlled-Release Systems',
        'Bio-enhanced Drug Delivery',
        'Stability Testing & Studies',
        'Excipient Compatibility',
        'Scale-up & Tech Transfer',
        'Dosage Form Optimization',
        'API Characterization',
    ],
    Research: [
        'Basic Pathology Testing',
        'Medical & Molecular Research',
        'Pharmaceutical Innovation',
        'Chemical Synthesis Research',
        'Medical Diagnostics Facilities',
        'Clinic Management Systems',
        'Diagnostic Research Facility',
        'Bio-Equivalence Studies',
    ],
};

// Counter animation hook
const useCounter = (end, duration = 2000, suffix = '') => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, end, duration]);

    const displayValue = count >= end ? `${end}${suffix}` : `${Math.floor(count)}${suffix}`;
    return { count, ref, displayValue };
};

const HexagonCard = ({ icon, title, desc }) => (
    <div className="filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <div className="w-[105px] h-[120px] sm:w-[125px] sm:h-[140px] md:w-[150px] md:h-[170px] bg-white flex flex-col items-center justify-center p-2 md:p-4 text-center group-hover:bg-[#f8fbff] transition-colors duration-300"
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <img src={icon} alt={title} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 md:mb-2 object-contain" />
            <h4 className="text-[8px] sm:text-[10px] md:text-[11px] font-bold text-[#1a3050] leading-tight mb-0.5 md:mb-1 px-0.5">{title}</h4>
            <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 leading-tight px-1 hidden sm:block">{desc}</p>
        </div>
    </div>
);

import SideDrawer from '../components/SideDrawer';

const Research = ({ 
    cartItems = [], 
    wishlistItems = [], 
    onAddToCart, 
    onUpdateQuantity, 
    onRemoveFromCart, 
    onToggleWishlist, 
    onRemoveFromWishlist 
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('cart');

    const openCart = () => { setActiveTab('cart'); setIsDrawerOpen(true); };
    const openWishlist = () => { setActiveTab('wishlist'); setIsDrawerOpen(true); };

    const [activeResearchTab, setActiveResearchTab] = useState('Research');
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
                        style={{ backgroundImage: `url("${researchHero}")` }}
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

                <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[calc(100%-85px)] flex flex-col justify-center items-center text-center py-10 md:py-16">
                    
                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-3 text-white/80 text-[10px] md:text-[11px] mb-6 animate-fade-in-up font-sans font-black uppercase tracking-[0.3em]">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Research & Development</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-[1.2] animate-fade-in-up delay-300 font-['Playfair_Display'] tracking-tight">
                        Our Research
                    </h1>

                    {/* Subheading */}
                    <p className="text-xs md:text-base text-white/90 max-w-xl font-light tracking-wide animate-fade-in-up delay-500 leading-relaxed mb-8">
                        Our R&D division is dedicated to discovering breakthrough therapies and optimizing pharmaceutical formulations to meet the evolving needs of global healthcare.
                    </p>

                    {/* 3 Key Points */}
                    <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-700">
                        {[
                            { title: "Clinical Trials", desc: "Phase I–IV Analytics", icon: <FaMicroscope /> },
                            { title: "Formulation R&D", desc: "Next-gen Drug Delivery", icon: <FaFlask /> },
                            { title: "Bio-Equivalence", desc: "Global Safety Standards", icon: <FaDna /> }
                        ].map((point, i) => (
                            <div key={i} className="group flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-default border border-white/50 w-full sm:w-[240px]">
                                <div className="w-10 h-10 bg-[#fdf2f3] rounded-xl flex items-center justify-center text-[#800000] text-lg shrink-0">
                                    {point.icon}
                                </div>
                                <div className="text-left">
                                    <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#800000] leading-none mb-1 font-sans">{point.title}</h4>
                                    <p className="text-[9px] md:text-[10px] text-gray-500 font-sans tracking-wide">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="relative z-20 bg-white">

                {/* ── Numbered Research Areas Section ─────────────────────── */}
                <section className="py-12 px-6 bg-white">
                    <div className="max-w-[1240px] mx-auto">

                        {/* Section Header */}
                        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                             <div className="inline-flex items-center gap-3 text-[#800000] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] font-sans">
                                <span className="w-10 h-[2.5px] bg-[#800000] inline-block"></span>
                                Our Research Areas
                                <span className="w-10 h-[2.5px] bg-[#800000] inline-block"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                What We <span className="text-[#800000] italic">Specialize In</span>
                            </h2>
                            <p className="text-gray-500 font-sans leading-relaxed text-base">
                                Our dedicated R&D teams work across multiple disciplines to deliver safe, effective, and innovative pharmaceutical solutions.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                {
                                    num: '01',
                                    icon: <FaMicroscope className="w-8 h-8" />,
                                    title: 'Clinical Trials',
                                    desc: 'We conduct rigorous Phase I–IV clinical trials to ensure every formulation meets global safety benchmarks and delivers measurable patient outcomes.',
                                },
                                {
                                    num: '02',
                                    icon: <FaFlask className="w-8 h-8" />,
                                    title: 'Formulation R&D',
                                    desc: 'Our scientists engineer next-generation drug delivery systems — including controlled-release and bio-enhanced formulations — for superior bioavailability.',
                                },
                                {
                                    num: '03',
                                    icon: <FaDna className="w-8 h-8" />,
                                    title: 'Bio-Equivalence Studies',
                                    desc: 'We validate generic medications against brand-name standards through comprehensive bio-equivalence testing to meet international regulatory requirements.',
                                },
                                {
                                    num: '04',
                                    icon: <FaShieldAlt className="w-8 h-8" />,
                                    title: 'Quality Assurance',
                                    desc: 'Every product undergoes stringent QA processes aligned with GMP, ISO, and DRAP guidelines — ensuring zero compromise on safety and efficacy.',
                                },
                                {
                                    num: '05',
                                    icon: <FaIndustry className="w-8 h-8" />,
                                    title: 'Advanced Manufacturing',
                                    desc: 'Our automated, GMP-certified production facilities leverage cutting-edge technology to scale innovations from lab bench to market shelf efficiently.',
                                },
                                {
                                    num: '06',
                                    icon: <FaGlobe className="w-8 h-8" />,
                                    title: 'Global Compliance',
                                    desc: 'We partner with international regulatory bodies to ensure our research and products comply with WHO, FDA, and regional healthcare authority standards worldwide.',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-gray-50 border border-gray-100 rounded-[24px] p-6 hover:bg-white hover:shadow-[0_20px_50px_rgba(128,0,0,0.08)] hover:border-[#800000]/15 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Number Badge */}
                                    <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#800000] text-white flex items-center justify-center text-xs font-black tracking-wider shadow-lg shadow-[#800000]/20">
                                        {item.num}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 bg-[#fdf2f3] text-[#800000] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#800000] group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#800000] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-sans leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#800000] to-[#c04040] transition-all duration-700 rounded-b-[28px]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Two-Column CTA Section ────────────────────────────── */}
                <section className="py-10 md:py-16 px-6 bg-white overflow-hidden">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Image Side - Responsive Handling */}
                        <div className="relative flex items-center justify-center py-6 md:py-12 order-2 lg:order-1">
                            {/* Background circle - Scaled */}
                            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] bg-[#e8f4ff] rounded-full -z-0"></div>

                            {/* Decorative floating elements - Hidden/Repositioned on mobile */}
                            <div className="hidden sm:flex absolute top-4 right-8 w-10 h-10 bg-[#3b82f6] rounded-xl items-center justify-center text-white shadow-lg shadow-[#3b82f6]/30 animate-bounce" style={{animationDuration: '3s'}}>
                                <FaMicroscope className="w-5 h-5" />
                            </div>
                            <div className="hidden sm:flex absolute bottom-12 left-4 w-9 h-9 bg-[#06b6d4] rounded-xl items-center justify-center text-white shadow-lg shadow-[#06b6d4]/30 animate-bounce" style={{animationDuration: '4s'}}>
                                <FaFlask className="w-4 h-4" />
                            </div>
                            <div className="absolute top-1/3 left-0 sm:left-4 w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#8b5cf6]/30 animate-bounce" style={{animationDuration: '3.5s'}}>
                                <FaDna className="w-4 h-4" />
                            </div>
                            <div className="absolute bottom-4 right-16 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#10b981]/30 animate-bounce" style={{animationDuration: '2.5s'}}>
                                <FaShieldAlt className="w-3.5 h-3.5" />
                            </div>
                            
                            {/* Static decorative dots */}
                            <div className="absolute top-8 left-16 w-3 h-3 bg-[#3b82f6]/40 rounded-full"></div>
                            <div className="absolute bottom-20 right-4 w-2 h-2 bg-[#06b6d4]/40 rounded-full"></div>

                            <img
                                src={research3}
                                alt="Research Excellence"
                                className="relative z-10 w-full max-w-[320px] sm:max-w-[440px] md:max-w-[550px] object-contain drop-shadow-2xl animate-float"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                            {/* Label */}
                            <div className="inline-flex items-center gap-2 text-[#800000] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                                <span className="w-6 md:w-8 h-[2px] bg-[#800000] inline-block"></span>
                                Versatile Research Provider
                            </div>

                            {/* Heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                                Medisense Provides the Best <br />
                                <span className="text-[#800000] italic">Pharmaceutical Research</span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 font-sans leading-relaxed text-sm md:text-base max-w-2xl">
                                At Medisense Pharmacy, we provide a wide range of research-driven services — from clinical formulation to bio-equivalence studies. Our expert scientists and quality control teams ensure every product meets the highest international standards.
                            </p>

                            {/* Tab Buttons - Responsive Scroll/Wrap */}
                            <div className="flex flex-wrap items-center bg-gray-100/80 p-1 rounded-2xl md:rounded-full w-full sm:w-fit shadow-inner gap-1">
                                {['Clinical', 'Formulation', 'Research'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveResearchTab(tab)}
                                        className={`flex-1 sm:flex-none px-4 md:px-7 py-2 md:py-3 rounded-xl md:rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                                            activeResearchTab === tab
                                                ? 'bg-[#800000] text-white shadow-lg shadow-[#800000]/30'
                                                : 'text-black hover:bg-[#800000] hover:text-white'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic Bullet Points — 2 columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
                                {tabData[activeResearchTab].map((point, i) => (
                                    <div key={i} className="flex items-start gap-3 group/item">
                                        <div className="w-5 h-5 rounded-full bg-[#800000]/80 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-[11px] md:text-xs font-semibold text-gray-600 font-sans leading-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Phone + Rating Row */}
                            <div className="flex flex-wrap items-stretch gap-8 pt-6">

                                {/* WhatsApp CTA */}
                                <a
                                    href="https://api.whatsapp.com/send?phone=923262422229"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center hover:scale-[1.03] transition-all duration-300"
                                >
                                    {/* Outer ring glow */}
                                    <div className="absolute left-0 w-[68px] h-[68px] rounded-full bg-[#2dd4a8]/20 z-0"></div>
                                    {/* Circle icon */}
                                    <div className="relative w-[60px] h-[60px] bg-gradient-to-br from-[#3ee8b8] to-[#1bb890] rounded-full flex items-center justify-center z-20 shadow-lg border-[4px] border-white shrink-0">
                                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                        </svg>
                                    </div>
                                    {/* Pill body */}
                                    <div className="bg-[#f0f7ff] border border-[#d0e3f5] rounded-full pl-8 pr-8 py-3 -ml-6 z-10 shadow-sm">
                                        <p className="text-[10px] font-semibold text-[#1bb890] tracking-wide leading-none mb-1 font-sans">Need Help? Contact Us</p>
                                        <p className="text-lg font-bold text-[#1a3050] tracking-wide leading-none font-sans">+92 326 242 2229</p>
                                    </div>
                                </a>

                                {/* Google Rating Badge */}
                                <div className="relative flex items-center">
                                    {/* Circle icon */}
                                    <div className="relative w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center z-20 shadow-lg border-[4px] border-gray-100 shrink-0">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.805 10.023H12v3.977h5.618c-.242 1.242-.976 2.297-2.076 3.004l3.356 2.607C20.8 17.58 21.805 14.946 21.805 12c0-.66-.058-1.303-.165-1.977z" fill="#4285F4" />
                                            <path d="M12 22c2.79 0 5.13-.926 6.838-2.508l-3.356-2.607C14.42 17.594 13.27 18 12 18c-2.692 0-4.972-1.818-5.788-4.26L2.8 16.43C4.49 19.75 8 22 12 22z" fill="#34A853" />
                                            <path d="M6.212 13.74A5.962 5.962 0 016 12c0-.604.104-1.19.212-1.74L2.8 7.57A9.99 9.99 0 002 12c0 1.61.39 3.132 1.08 4.48l3.412-2.74h-.28z" fill="#FBBC05" />
                                            <path d="M12 6c1.524 0 2.884.524 3.956 1.548l2.96-2.96C17.12 2.92 14.78 2 12 2 8 2 4.49 4.25 2.8 7.57l3.412 2.69C7.028 7.82 9.308 6 12 6z" fill="#EA4335" />
                                        </svg>
                                    </div>
                                    {/* Pill body */}
                                    <div className="bg-white border border-[#f0e0e0] rounded-full pl-8 pr-8 py-3 -ml-6 z-10 shadow-sm">
                                        <p className="text-[10px] font-semibold text-gray-400 tracking-wide leading-none mb-1 font-sans">Our Google Rating</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-[#ea4335] leading-none font-sans">5.0</span>
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Stats / Scale & Reach Section ────────────────────── */}
                <section className="relative py-28 md:py-36 px-6">
                    
                    {/* Background image */}
                    <div className="absolute inset-0 overflow-hidden">
                        <style>
                            {`
                                @keyframes floatZoom {
                                    0% { transform: scale(1) translate(0, 0) rotate(0deg); }
                                    33% { transform: scale(1.08) translate(-1%, 1%) rotate(0.5deg); }
                                    66% { transform: scale(1.12) translate(1%, -1%) rotate(-0.5deg); }
                                    100% { transform: scale(1) translate(0, 0) rotate(0deg); }
                                }
                                .animate-bg-float {
                                    animation: floatZoom 20s ease-in-out infinite;
                                }
                            `}
                        </style>
                        <img src={neural2Bg} alt="" className="w-full h-full object-cover animate-bg-float origin-center opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2a0000]/90 via-[#800000]/85 to-[#4a0000]/90"></div>
                    </div>

                    {/* Wave SVG Top */}
                    <div className="absolute top-0 left-0 w-full z-10">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <path d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 40C672 50 768 70 864 75C960 80 1056 70 1152 55C1248 40 1344 20 1392 10L1440 0V0H0V120Z" fill="white"/>
                        </svg>
                    </div>

                    {/* Decorative curved line — extends above section */}
                    <svg className="absolute -top-[40px] left-0 w-full h-[300px] pointer-events-none z-30" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
                        <defs>
                            <path id="curvePath" d="M-50 280C200 60 400 180 720 100C1040 20 1250 200 1500 120" />
                        </defs>
                        {/* The curved line */}
                        <use href="#curvePath" stroke="white" strokeWidth="2.5" fill="none" opacity="0.5" />
                        
                        {/* Dot 1 moving along the path */}
                        <circle r="6" fill="white" style={{filter: 'drop-shadow(0 0 6px white)'}}>
                            <animateMotion dur="6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                                <mpath href="#curvePath" />
                            </animateMotion>
                        </circle>

                        {/* Dot 2 moving along the path (delayed) */}
                        <circle r="4" fill="white" opacity="0.6" style={{filter: 'drop-shadow(0 0 4px white)'}}>
                            <animateMotion dur="6s" repeatCount="indefinite" begin="3s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                                <mpath href="#curvePath" />
                            </animateMotion>
                        </circle>
                    </svg>

                    <div className="relative z-20 max-w-[1240px] mx-auto text-center">
                        
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-20 leading-tight">
                            Our <span className="italic underline underline-offset-8 decoration-white/30">Scale and Reach</span> to Client Satisfaction
                        </h2>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
                            
                            {/* Stat 1 */}
                            {(() => {
                                const counter1 = useCounter(780, 2000, 'K');
                                return (
                                    <div ref={counter1.ref} className="group text-center space-y-3">
                                        <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                            <FaMicroscope className="w-7 h-7 text-white group-hover:animate-bounce" />
                                        </div>
                                        <p className="text-5xl md:text-6xl font-light text-white tracking-tight font-sans">{counter1.displayValue}</p>
                                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.25em] font-sans">Patients Served</p>
                                        <p className="text-xs text-white/30 font-sans max-w-[180px] mx-auto leading-relaxed">Trusted by hundreds of thousands across the region</p>
                                    </div>
                                );
                            })()}

                            {/* Stat 2 */}
                            {(() => {
                                const counter2 = useCounter(250, 2000, '+');
                                return (
                                    <div ref={counter2.ref} className="group text-center space-y-3">
                                        <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                            <FaFlask className="w-7 h-7 text-white group-hover:animate-bounce" />
                                        </div>
                                        <p className="text-5xl md:text-6xl font-light text-white tracking-tight font-sans">{counter2.displayValue}</p>
                                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.25em] font-sans">Expert Scientists</p>
                                        <p className="text-xs text-white/30 font-sans max-w-[180px] mx-auto leading-relaxed">Qualified researchers driving pharmaceutical innovation</p>
                                    </div>
                                );
                            })()}

                            {/* Stat 3 */}
                            {(() => {
                                const counter3 = useCounter(90, 2000, '+');
                                return (
                                    <div ref={counter3.ref} className="group text-center space-y-3">
                                        <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                            <FaGlobe className="w-7 h-7 text-white group-hover:animate-bounce" />
                                        </div>
                                        <p className="text-5xl md:text-6xl font-light text-white tracking-tight font-sans">{counter3.displayValue}</p>
                                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.25em] font-sans">Distribution Points</p>
                                        <p className="text-xs text-white/30 font-sans max-w-[180px] mx-auto leading-relaxed">Nationwide network ensuring fast product delivery</p>
                                    </div>
                                );
                            })()}

                            {/* Stat 4 */}
                            {(() => {
                                const counter4 = useCounter(100, 2000, '%');
                                return (
                                    <div ref={counter4.ref} className="group text-center space-y-3">
                                        <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                            <FaShieldAlt className="w-7 h-7 text-white group-hover:animate-bounce" />
                                        </div>
                                        <p className="text-5xl md:text-6xl font-light text-white tracking-tight font-sans">{counter4.displayValue}</p>
                                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.25em] font-sans">Client Satisfaction</p>
                                        <p className="text-xs text-white/30 font-sans max-w-[180px] mx-auto leading-relaxed">Zero compromise on quality and customer trust</p>
                                    </div>
                                );
                            })()}

                        </div>
                    </div>
                </section>

                {/* ── Benefits Section (Honeycomb & Maroon Card) ────────────────────── */}
                <section className="py-24 px-6 bg-[#fdf2f2] overflow-hidden relative">
                    {/* Subtle hexagon background pattern for left side */}
                    <div className="absolute left-0 top-0 w-1/2 h-full opacity-[0.04] pointer-events-none" 
                         style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'104\' viewBox=\'0 0 60 104\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 104L0 86.67V52L30 34.67L60 52V86.67L30 104zM30 69.33L15 78V95.33L30 104L45 95.33V78L30 69.33zM30 34.67L0 17.33V-17.33L30 -34.67L60 -17.33V17.33L30 34.67z\' fill=\'%23800000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '60px'}}>
                    </div>

                    <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* Left Side: Honeycomb Hexagons */}
                        <div className="lg:w-1/2 flex flex-col items-center justify-center relative w-full pt-10">
                            
                            {/* Row 1 */}
                            <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 relative z-10">
                                <HexagonCard icon={icon1} title="Expert Scientists" desc="We are equipped with best lab machinery & scientists" />
                                <HexagonCard icon={icon2} title="Accuracy in Findings" desc="We are equipped with best lab machinery & scientists" />
                                <HexagonCard icon={icon1} title="Expert Scientists" desc="We are equipped with best lab machinery & scientists" />
                            </div>
                            
                            {/* Row 2 */}
                            <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 -mt-4 sm:-mt-5 md:-mt-6 relative z-20">
                                <HexagonCard icon={icon3} title="Genetic Research" desc="We are equipped with best lab machinery & scientists" />
                                <HexagonCard icon={icon2} title="Fast Report Delivery" desc="We are equipped with best lab machinery & scientists" />
                            </div>

                            {/* Row 3 */}
                            <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 -mt-4 sm:-mt-5 md:-mt-6 relative z-30">
                                <HexagonCard icon={icon3} title="Fast Report Delivery" desc="We are equipped with best lab machinery & scientists" />
                            </div>
                            
                            {/* Decorative small blank hexagons */}
                            <div className="absolute left-0 lg:-left-10 top-1/4 w-20 h-24 bg-[#800000]/5 filter drop-shadow-sm pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                            <div className="absolute right-0 lg:-right-4 bottom-1/4 w-16 h-20 bg-[#800000]/5 filter drop-shadow-sm pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                        </div>

                        {/* Right Side: Maroon Card */}
                        <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0">
                            {/* Maroon Card Container - Removed overflow-hidden so microscope can hang outside */}
                            <div className="bg-[#800000] rounded-2xl p-8 md:p-14 text-white shadow-[0_20px_50px_rgba(128,0,0,0.3)] relative border border-white/10">
                                
                                <p className="text-[11px] font-black tracking-[0.2em] uppercase mb-4 text-white/60">Advanced Pharmaceutical R&D</p>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif tracking-tight leading-tight">Medisense Pharmacy <br />Research Hub</h2>
                                
                                <p className="text-sm md:text-base text-white/70 mb-10 leading-relaxed max-w-[90%] font-sans relative z-10 font-light">
                                    At Medisense Pharmacy, our state-of-the-art research laboratories are dedicated to pioneering new formulations, ensuring rigorous quality control, and delivering innovative healthcare solutions that meet global standards.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-12 relative z-10">
                                    {[
                                        'Clinical Trials Design', 'Precision Formulations',
                                        'Global Quality Standards', 'Bio-Equivalence Testing',
                                        'API Characterization', 'Advanced Diagnostics'
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group/feat">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/feat:bg-white/20 transition-colors">
                                                <FaCheckCircle className="text-white text-sm shrink-0" />
                                            </div>
                                            <span className="text-sm font-semibold font-sans tracking-wide text-white/90">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4 relative z-10">
                                    <a href="/about-us" className="bg-white text-[#800000] font-black py-4 px-10 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl text-xs uppercase tracking-widest font-sans inline-block hover:-translate-y-1">
                                        Learn More
                                    </a>
                                    <a href="/contact" className="bg-white/10 text-white font-black py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300 shadow-xl border border-white/20 text-xs uppercase tracking-widest font-sans inline-block hover:-translate-y-1">
                                        Get Appointment
                                    </a>
                                </div>

                                {/* Microscope Image - Smaller size, floating, and positioned to hang halfway outside */}
                                <img src={img11} alt="Microscope" className="absolute -bottom-20 -right-4 w-[140px] md:w-[170px] lg:w-[200px] object-contain drop-shadow-2xl pointer-events-none z-20 animate-float" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── CTA / Connect Banner (Overlaps Footer) ────────────────────── */}
                <div className="bg-[#fdf2f2] px-6 pt-12 pb-0">
                    <style>{`
                        @keyframes slowPanZoom {
                            0% { transform: scale(1); }
                            100% { transform: scale(1.15); }
                        }
                    `}</style>
                    {/* We translate the banner DOWN so it hangs over the footer */}
                    <div className="max-w-[1000px] mx-auto transform translate-y-10 md:translate-y-12 relative z-50">
                        <div className="rounded-[30px] py-10 px-8 md:py-12 md:px-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img src={research3} alt="" className="w-full h-full object-cover opacity-30 mix-blend-overlay" style={{ animation: 'slowPanZoom 15s ease-in-out infinite alternate' }} />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-[#a00000] to-[#800000] opacity-95"></div>
                            </div>

                            {/* Content Left */}
                            <div className="relative z-10 text-white w-full md:w-2/3">
                                <p className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-3 font-sans text-white/70">Stay Updated with Medisense</p>
                                <h2 className="text-2xl md:text-4xl font-bold font-serif tracking-tight leading-tight">Join Our Pharmaceutical <br className="hidden md:block" /> Network</h2>
                            </div>

                            {/* Button Right */}
                            <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
                                <a href="/contact" className="bg-white text-[#800000] font-black py-4 px-10 md:py-4.5 md:px-12 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(0,0,0,0.2)] text-xs uppercase tracking-widest font-sans border border-white/20 whitespace-nowrap">
                                    Connect Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer follows immediately. Banner overlaps it due to translate-y */}
            <Footer />
        </div>
    );
};

export default Research;
