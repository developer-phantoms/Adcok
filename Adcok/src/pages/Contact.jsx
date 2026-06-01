import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import contactImg from '../assets/connect.jpg'

const ContactUs = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#fdf2f3] overflow-x-hidden">
            <div className="relative h-[75vh] md:h-[85vh] min-h-[600px]">
                {/* Background image + overlay */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-float"
                        style={{ backgroundImage: `url(${contactImg})` }}
                    />
                    {/* Intensified Premium Overlay Layers */}
                    <div className="absolute inset-0 bg-black/65 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />
                </div>

                <Navbar />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[calc(100%-85px)] flex flex-col justify-center items-center text-center py-10 md:py-16">

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-3 text-white/80 text-[10px] md:text-[11px] mb-6 animate-fade-in-up font-sans font-black uppercase tracking-[0.3em]">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Contact Us</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-[1.2] animate-fade-in-up delay-300 font-['Playfair_Display'] tracking-tight">
                        Get in Contact
                    </h1>

                    {/* Subheading */}
                    <p className="text-xs md:text-base text-white/90 max-w-xl font-light tracking-wide animate-fade-in-up delay-500 leading-relaxed mb-8">
                        Whether you're looking for a partnership, have a product inquiry, or need professional medical support, our team is here to assist you.
                    </p>

                    {/* Faint dividing line */}
                    <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 mb-8 animate-fade-in-up delay-500"></div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-start justify-center gap-6 md:gap-12 w-full max-w-4xl animate-fade-in-up delay-500">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-sans font-bold text-white mb-1 md:mb-2">24h</span>
                            <span className="text-[9px] md:text-[10px] font-black text-white tracking-[0.2em] uppercase font-sans">Response Time</span>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block h-10 w-[1px] bg-white/30 mt-2"></div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center relative">
                            <span className="text-3xl md:text-4xl font-sans font-bold text-white mb-1 md:mb-2">100%</span>
                            <span className="text-[9px] md:text-[10px] font-black text-white tracking-[0.2em] uppercase font-sans">Satisfaction</span>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block h-10 w-[1px] bg-white/30 mt-2"></div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-sans font-bold text-white mb-1 md:mb-2 flex items-center gap-1">
                                5
                                <svg className="w-5 h-5 md:w-6 md:h-6 -mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            </span>
                            <span className="text-[9px] md:text-[10px] font-black text-white tracking-[0.2em] uppercase font-sans">Rated Support</span>
                        </div>

                    </div>

                </div>
            </div>

            <main className="relative z-20">

                {/* Contact Content */}
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Details side */}
                        <div className="space-y-12 animate-fade-in-up">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Whether you have a question about our products, research, or anything else, our team is ready to answer all your inquiries.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Location */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#8A252C] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#8A252C]/20 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 uppercase tracking-tight">Our Headquarters</h4>
                                        <p className="text-gray-500 leading-relaxed">Medisense House, 123 Pharma Business Square,<br />Lahore, Punjab, Pakistan.</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#8A252C] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#8A252C]/20 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 uppercase tracking-tight">Email Us</h4>
                                        <p className="text-gray-500 leading-relaxed font-semibold">info@medisensepharma.com</p>
                                        <p className="text-gray-500 text-sm italic">Response time: Within 24 hours</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#8A252C] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#8A252C]/20 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.061A29.937 29.937 0 013 4.364V5z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl mb-1 uppercase tracking-tight">Call Support</h4>
                                        <p className="text-gray-500 leading-relaxed font-semibold">+92 (42) 3578 9000</p>
                                        <p className="text-gray-500 text-sm">Mon - Fri, 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                {/* Social Links */}

                            </div>
                        </div>

                        {/* Contact Form side */}
                        <div className="animate-fade-in-up delay-300">
                            <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-gray-100">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#8A252C] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#8A252C] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="How can we help?"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#8A252C] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">Message</label>
                                        <textarea
                                            rows="5"
                                            placeholder="Write your message here..."
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#8A252C] focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-[#8A252C] text-white font-black rounded-[24px] hover:bg-[#7a2027] transition-all hover:shadow-[0_20px_40px_rgba(138,37,44,0.3)] hover:-translate-y-1 active:scale-95"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Interactive Map Section */}
                <section className="w-full">
                    <div className="w-full h-[450px] bg-gray-200 overflow-hidden relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108856.84558509315!2d74.24151598634865!3d31.50341517409259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc202c607751d8d51!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713464000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Medisense Headquarters Location"
                        ></iframe>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default ContactUs
