// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Facebook, Instagram, Twitter, Mail, Phone, 
//   ArrowRight, Globe, ShieldCheck, Send 
// } from "lucide-react";
// import logo from '../../assets/logo.png';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#061e14] text-slate-300 relative overflow-hidden pt-20 pb-10">
//       {/* Decorative Background Element */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600" />
      
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Top Section: Brand & Newsletter */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-green-900/50">
//           <div className="lg:col-span-4">
//             <div className="flex items-center gap-3 mb-6">
//               <img src={logo} alt="Agri Kisan" className="h-12 w-12 brightness-110" />
//               <span className="text-2xl font-black text-white tracking-tight">AGRI KISAN</span>
//             </div>
//             <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
//               Revolutionizing the agricultural landscape through precision data, 
//               direct market access, and sustainable digital infrastructure.
//             </p>
//             <div className="flex gap-4">
//               <SocialIcon icon={<Facebook size={18} />} />
//               <SocialIcon icon={<Twitter size={18} />} />
//               <SocialIcon icon={<Instagram size={18} />} />
//             </div>
//           </div>

//           <div className="lg:col-span-8 bg-green-800/10 rounded-[2.5rem] p-8 md:p-10 border border-green-800/30">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">Join the Agri-Intelligence</h3>
//                 <p className="text-sm text-green-200/60">Receive weekly market insights and climate alerts directly in your inbox.</p>
//               </div>
//               <form className="relative">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="w-full bg-white/5 border border-green-700/50 rounded-2xl py-4 px-6 focus:outline-none focus:border-green-400 transition-all text-white placeholder:text-slate-500"
//                 />
//                 <button className="absolute right-2 top-2 bottom-2 bg-green-500 hover:bg-green-400 text-[#061e14] px-6 rounded-xl transition-all flex items-center gap-2 font-bold text-sm">
//                   Subscribe <Send size={14} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Middle Section: Links */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
//           <LinkGroup title="Ecosystem" links={['Marketplace', 'Precision Farming', 'Farm Finance', 'Logistics']} />
//           <LinkGroup title="Resources" links={['Crop Advisory', 'Weather Station', 'Price Index', 'Success Stories']} />
//           <LinkGroup title="Company" links={['About Mission', 'Careers', 'Partner Network', 'Newsroom']} />
          
//           <div>
//             <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Global Support</h3>
//             <div className="space-y-4">
//               <ContactItem icon={<Phone size={16} />} text="+91 98765 43210" />
//               <ContactItem icon={<Mail size={16} />} text="ops@agrikisan.com" />
//               <div className="pt-4">
//                 <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full w-fit">
//                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                   <span className="text-[10px] font-black text-green-400 uppercase tracking-tighter">System Status: Optimal</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-10 border-t border-green-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-xs font-medium text-slate-500">
//             © {currentYear} Agri Kisan Technologies Pvt. Ltd. All Rights Reserved.
//           </p>
          
//           <div className="flex items-center gap-2 text-slate-500 text-xs">
//             <Globe size={14} />
//             <span>EN (India)</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// /* Internal Components for Innovation & Cleanliness */

// const SocialIcon = ({ icon }) => (
//   <motion.div 
//     whileHover={{ y: -3, backgroundColor: '#22c55e', color: '#061e14' }}
//     className="w-10 h-10 rounded-xl border border-green-800 flex items-center justify-center cursor-pointer transition-colors text-green-500"
//   >
//     {icon}
//   </motion.div>
// );

// const LinkGroup = ({ title, links }) => (
//   <div>
//     <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{title}</h3>
//     <ul className="space-y-4">
//       {links.map((link) => (
//         <li key={link} className="group flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors text-sm">
//           <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-green-500" />
//           {link}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const ContactItem = ({ icon, text }) => (
//   <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer group">
//     <div className="text-green-600 group-hover:text-green-400 transition-colors">{icon}</div>
//     <span>{text}</span>
//   </div>
// );

// const footerLink = ({ text }) => (
//   <span className="text-xs font-medium hover:text-green-400 cursor-pointer transition-colors">
//     {text}
//   </span>
// );

// export default Footer;



import React from "react";
import { motion } from "framer-motion";
import { 
  Facebook, Instagram, Twitter, Mail, Phone, 
  ArrowRight, Globe, Send, Sprout, Map, 
  Cpu, Zap, BarChart3, Fingerprint 
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fafaf9] pt-32 pb-12 overflow-hidden">
      
      {/* 🌑 THE HORIZON: A subtle curved SVG top to create a "world" effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(150%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* 🌫 AMBIENT TEXTURE */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100/20 via-transparent to-transparent opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🚀 THE INNOVATION HUB: Floating Action Newsletter */}
        <div className="relative mb-32">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="grid lg:grid-cols-12 gap-0 bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-zinc-100 overflow-hidden"
          >
            <div className="lg:col-span-7 p-8 md:p-16 bg-gradient-to-br from-white to-zinc-50/50">
               <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
                 <Zap size={14} className="text-green-600 fill-green-600" />
                 <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Live Ecosystem Updates</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-[1.1] tracking-tighter">
                 Cultivating <span className="text-green-600">Intelligence.</span>
               </h2>
               <p className="mt-6 text-zinc-500 font-medium max-w-md">
                 Join 50,000+ modern farmers receiving satellite crop insights and weekly market fluctuations.
               </p>
            </div>

            <div className="lg:col-span-5 p-8 md:p-16 bg-green-600 flex flex-col justify-center">
               <form className="relative group">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-green-700/30 border border-green-400/30 rounded-2xl py-5 px-6 outline-none transition-all text-white placeholder:text-green-100/50 focus:bg-green-700/50"
                 />
                 <button className="mt-4 w-full bg-white text-green-700 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-500 shadow-xl">
                   Join Network
                 </button>
               </form>
               <p className="mt-6 text-[10px] text-green-100/40 text-center uppercase font-bold tracking-[0.2em]">
                 No Spam. Just Harvest.
               </p>
            </div>
          </motion.div>
        </div>

        {/* 🗺 THE NAV ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pb-24">
          
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="bg-zinc-900 p-2 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform">
                  <img src={logo} alt="Logo" className="h-8 w-8 brightness-200" />
                </div>
                <h1 className="font-black text-3xl tracking-tighter text-zinc-900 uppercase italic">
                  BHU<span className="text-green-600">MMI</span>
                </h1>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-zinc-400">
                <Fingerprint size={32} strokeWidth={1} />
                <p className="text-xs font-medium leading-relaxed italic">
                  "Every seed has a digital twin. <br />Every farmer has a voice."
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <SocialPill icon={<Instagram size={16} />} />
                <SocialPill icon={<Twitter size={16} />} />
                <SocialPill icon={<Facebook size={16} />} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <LinkList 
              title="Ecosystem" 
              items={[{label:'Sourcing', to:'/products'}, {label:'Mandi Live', to:'/mandi'}, {label:'Field Feed', to:'/feed'}]} 
            />
            <LinkList 
              title="Architecture" 
              items={[{label:'Crop API', to:'#'}, {label:'Soil Sensors', to:'#'}, {label:'Climate AI', to:'#'}]} 
            />
          </div>

          <div className="lg:col-span-3 space-y-8">
             <div className="bg-zinc-100/50 p-6 rounded-[2rem] border border-zinc-200/50 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <h3 className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.25em] mb-4">Operations Center</h3>
                <div className="space-y-3">
                   {/* <ContactRow icon={<Smartphone size={14} />} label="1800-BHUMMI" /> */}
                   <ContactRow icon={<Mail size={14} />} label="ops@bhummi.tech" />
                   <ContactRow icon={<Map size={14} />} label="Global HQ, India" />
                </div>
             </div>
          </div>
        </div>

        {/* 🔒 THE DECENTRALIZED FOOTER BAR */}
        <div className="pt-12 border-t border-zinc-200 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <StatusDot label="Market: Open" color="bg-green-500" />
            <StatusDot label="Nodes: 4,209" color="bg-emerald-400" />
          </div>

          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
            © {currentYear} Bhummi Tech. Decentralizing the Earth.
          </p>

          <div className="flex items-center gap-6">
             <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
               <Cpu size={20} className="text-zinc-300 hover:text-green-600 transition-colors" />
             </motion.div>
             <div className="h-4 w-[1px] bg-zinc-200" />
             <div className="flex items-center gap-2 text-zinc-900 font-black text-xs">
                <Globe size={14} />
                <span>BH-IN</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- INNOVATIVE SUB-COMPONENTS --- */

const SocialPill = ({ icon }) => (
  <motion.div 
    whileHover={{ scale: 1.1, backgroundColor: '#10b981', color: '#fff' }}
    className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 transition-all cursor-pointer shadow-sm"
  >
    {icon}
  </motion.div>
);

const LinkList = ({ title, items }) => (
  <div className="space-y-6">
    <h3 className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.25em]">{title}</h3>
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.to} className="text-zinc-400 hover:text-green-600 text-sm font-bold transition-all flex items-center gap-2 group">
            <span className="h-[2px] w-0 bg-green-500 group-hover:w-4 transition-all duration-300" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactRow = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">
    <div className="text-green-600 bg-white p-2 rounded-lg shadow-sm border border-zinc-100">{icon}</div>
    <span className="text-xs font-bold">{label}</span>
  </div>
);

const StatusDot = ({ label, color }) => (
  <div className="flex items-center gap-2">
    <span className={`h-1.5 w-1.5 rounded-full ${color} animate-pulse`} />
    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{label}</span>
  </div>
);

export default Footer;