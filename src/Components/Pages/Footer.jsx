import React from "react";
import { motion } from "framer-motion";
import { 
  Facebook, Instagram, Twitter, Mail, Phone, 
  ArrowRight, Globe, ShieldCheck, Send 
} from "lucide-react";
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061e14] text-slate-300 relative overflow-hidden pt-20 pb-10">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-green-900/50">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Agri Kisan" className="h-12 w-12 brightness-110" />
              <span className="text-2xl font-black text-white tracking-tight">AGRI KISAN</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
              Revolutionizing the agricultural landscape through precision data, 
              direct market access, and sustainable digital infrastructure.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          <div className="lg:col-span-8 bg-green-800/10 rounded-[2.5rem] p-8 md:p-10 border border-green-800/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Join the Agri-Intelligence</h3>
                <p className="text-sm text-green-200/60">Receive weekly market insights and climate alerts directly in your inbox.</p>
              </div>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-green-700/50 rounded-2xl py-4 px-6 focus:outline-none focus:border-green-400 transition-all text-white placeholder:text-slate-500"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-green-500 hover:bg-green-400 text-[#061e14] px-6 rounded-xl transition-all flex items-center gap-2 font-bold text-sm">
                  Subscribe <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <LinkGroup title="Ecosystem" links={['Marketplace', 'Precision Farming', 'Farm Finance', 'Logistics']} />
          <LinkGroup title="Resources" links={['Crop Advisory', 'Weather Station', 'Price Index', 'Success Stories']} />
          <LinkGroup title="Company" links={['About Mission', 'Careers', 'Partner Network', 'Newsroom']} />
          
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Global Support</h3>
            <div className="space-y-4">
              <ContactItem icon={<Phone size={16} />} text="+91 98765 43210" />
              <ContactItem icon={<Mail size={16} />} text="ops@agrikisan.com" />
              <div className="pt-4">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full w-fit">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-tighter">System Status: Optimal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-green-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-slate-500">
            © {currentYear} Agri Kisan Technologies Pvt. Ltd. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Globe size={14} />
            <span>EN (India)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Internal Components for Innovation & Cleanliness */

const SocialIcon = ({ icon }) => (
  <motion.div 
    whileHover={{ y: -3, backgroundColor: '#22c55e', color: '#061e14' }}
    className="w-10 h-10 rounded-xl border border-green-800 flex items-center justify-center cursor-pointer transition-colors text-green-500"
  >
    {icon}
  </motion.div>
);

const LinkGroup = ({ title, links }) => (
  <div>
    <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{title}</h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link} className="group flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors text-sm">
          <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-green-500" />
          {link}
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer group">
    <div className="text-green-600 group-hover:text-green-400 transition-colors">{icon}</div>
    <span>{text}</span>
  </div>
);

const footerLink = ({ text }) => (
  <span className="text-xs font-medium hover:text-green-400 cursor-pointer transition-colors">
    {text}
  </span>
);

export default Footer;