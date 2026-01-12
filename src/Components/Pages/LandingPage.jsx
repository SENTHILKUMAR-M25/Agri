
import React, { useEffect, useState } from 'react';
import farm from "../../assets/Homebg1.jpg";
import {
    CloudSun, TrendingUp, Stethoscope, BookOpen,
    ShoppingCart, Tag, Smile, Truck, Users, RefreshCw, Play,
    Instagram, Twitter, Facebook, Youtube, ChevronRight, Download, Menu, X, Leaf
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Professionalized Data
const stats = [
    { value: "50M+", label: "Empowered Farmers", icon: Smile },
    { value: "1M+", label: "Deliveries Completed", icon: Truck },
    { value: "15M+", label: "Community Members", icon: Users },
    { value: "100M+", label: "Trade Volume", icon: RefreshCw },
];

const features = [
    {
        title: "Precision Weather",
        desc: "Hyper-local forecasts and real-time alerts tailored to your specific crop cycles.",
        icon: CloudSun,
        active: true
    },
    {
        title: "Market Intelligence",
        desc: "Advanced APMC price tracking with AI-driven trend analysis for better bargaining.",
        icon: TrendingUp
    },
    {
        title: "Agri-Expert Consultation",
        desc: "Instant diagnostic support from certified agronomists for disease management.",
        icon: Stethoscope
    },
    {
        title: "Knowledge Hub",
        desc: "Curated technical posts and video tutorials on modern sustainable farming.",
        icon: BookOpen
    },
    {
        title: "Digital Mandi",
        desc: "Secure B2B marketplace to trade commodities with verified pan-India buyers.",
        icon: Tag
    },
    {
        title: "Supply Chain",
        desc: "Seamless procurement of high-quality inputs with guaranteed doorstep delivery.",
        icon: ShoppingCart
    }
];

const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate =useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Community', href: '#community' },
        { name: 'Resources', href: '#resource' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-green-100">
            
            {/* --- Floating Navigation --- */}
            <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${isScrolled ? 'top-2' : 'top-4'}`}>
                <div className={`backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 md:px-8 py-4 flex items-center justify-between transition-all ${isScrolled ? 'bg-white/90 py-3' : 'bg-white/70'}`}>
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-green-600 p-1.5 rounded-lg text-white transition-transform group-hover:rotate-12">
                            <Leaf size={20} fill="currentColor" />
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight text-slate-800">
                            Hi<span className="text-green-600">Kisan</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
                        {navLinks.map((link) => (
                            <li key={link.name} className="hover:text-green-600 transition-colors cursor-pointer relative group">
                                <a href={link.href}>{link.name}</a>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700 transition-all active:scale-95 shadow-md">
                            Download <Download size={16} />
                        </button>
                        <button 
                            className="md:hidden p-2 text-slate-800" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`absolute top-20 left-0 w-full bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-slate-100 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-lg font-bold text-slate-700 hover:text-green-600 border-b border-slate-50 pb-2">
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                        Get the App <Download size={20} />
                    </button>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section id='home' className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={farm}
                        alt="Modern Farming Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-50 backdrop-blur-[1px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center mt-20">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Revolutionizing Indian Agriculture
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-8 drop-shadow-2xl">
                        Smart Solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Prosperous Farmers
                        </span>
                    </h1>

                    <p className="text-slate-100 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        Bridging the gap between traditional wisdom and modern technology to empower <span className="text-green-400 font-bold">15 million farmers</span> across the nation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="group bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-green-900/40 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                            Start Your Journey <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        </button>

                        <button className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all">
                            Watch Demo
                            <div className="bg-white text-slate-900 rounded-full p-1 group-hover:scale-110 transition-transform">
                                <Play size={16} fill="currentColor" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="relative z-10 -mt-10 pb-10 px-6 relative top-14">
                <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <div key={i} className="group text-center">
                                <div className="inline-flex p-4 rounded-2xl bg-green-50 text-green-600 mb-4 transition-all group-hover:bg-green-600 group-hover:text-white group-hover:rotate-6">
                                    <s.icon size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-1">{s.value}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Features Section --- */}
            <section id="solutions" className="py-24 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Precision Tools for Every Field</h2>
                            <p className="text-slate-500 font-medium">We provide an integrated ecosystem designed to maximize yield and minimize risk throughout the agricultural lifecycle.</p>
                        </div>
                        <button className="text-green-600 font-bold cursor-pointer flex items-center gap-1 hover:gap-3 transition-all" onClick={() => navigate('/home')}>
                            View All Features <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className={`p-10 rounded-[2rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${f.active ? 'bg-green-600 border-green-600 shadow-xl shadow-green-200 text-white' : 'bg-white border-slate-100'}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${f.active ? 'bg-white/20 text-white' : 'bg-green-50 text-green-600'}`}>
                                    <f.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                <p className={`leading-relaxed font-medium ${f.active ? 'text-green-50' : 'text-slate-500'}`}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Community CTA --- */}
            <section id="community" className="py-20 px-6">
                <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden bg-slate-900 py-24 px-12">
                    <img
                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                        alt="Background"
                    />
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Join the Digital Revolution in Farming</h2>
                        <p className="text-slate-300 text-lg mb-10 font-medium">
                            Our community is more than just an app. It's a support system helping farmers increase their profits by an average of 70%.
                        </p>
                        <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-green-500 hover:text-white transition-all transform hover:scale-105">
                            Become a Member
                        </button>
                    </div>
                </div>
            </section>

            {/* --- High-End Footer --- */}
            <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 text-green-600 font-black text-2xl">
                            HiKisan
                        </div>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">
                            Empowering the backbone of our nation through innovative technology and sustainable practices.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                                <div key={i} className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer transition-all">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-bold">
                            {['Market View', 'Weather Forecast', 'Agri Shop', 'Expert Advice'].map(item => (
                                <li key={item} className="hover:text-green-600 cursor-pointer transition-colors">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-bold">
                            {['About Us', 'Success Stories', 'Privacy Policy', 'Contact'].map(item => (
                                <li key={item} className="hover:text-green-600 cursor-pointer transition-colors">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Stay Informed</h4>
                        <p className="text-xs text-slate-500 mb-4 font-medium">Get the latest agricultural insights.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
                            />
                            <button className="bg-slate-900 text-white p-2.5 rounded-xl hover:bg-green-600 transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-slate-100 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                    © 2026 Hi Kisan Agriculture Technologies Pvt. Ltd. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;