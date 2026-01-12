import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import services from "../Service/ServiceData";

const ProfessionalAgriServices = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* 1. HERO SECTION - STRATEGIC POSITIONING */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle Professional Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#065f46 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-emerald-600"></span>
            <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
              Operational Excellence
            </span>
            <span className="h-[1px] w-8 bg-emerald-600"></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
          >
            Digital Infrastructure for <br />
            <span className="text-emerald-600 italic font-serif">High-Yield</span> Agriculture
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
          >
            Deploying precision data and automated logistics to optimize the 
            agricultural lifecycle from soil to shelf.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES GRID - ENTERPRISE DESIGN */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  {/* High-End Icon Treatment */}
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-[-6deg] transition-all duration-500 shadow-inner">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">
                    ID: 0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                {/* Value Tags - Adds Professionalism */}
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="flex items-center gap-1 text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600 uppercase">
                    <Zap size={10} /> Real-time
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600 uppercase">
                    <ShieldCheck size={10} /> Verified
                  </span>
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <button 
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-emerald-600 flex items-center gap-2 transition-colors"
                >
                  Configure Service <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight size={14} className="text-emerald-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. TRUST BANNER - INNOVATIVE FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-emerald-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          <div className="relative z-10 space-y-2">
            <h4 className="text-2xl font-bold">Ready to digitize your harvest?</h4>
            <p className="text-emerald-200/60 font-medium">Schedule a consultation with our regional crop experts.</p>
          </div>
          <button className="relative z-10 mt-8 md:mt-0 px-10 py-4 bg-emerald-500 hover:bg-white hover:text-emerald-900 text-emerald-950 font-bold rounded-2xl transition-all shadow-xl shadow-emerald-950/20">
            Request Enterprise Demo
          </button>
          
          {/* Background Graphic */}
          <BarChart3 className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 rotate-[-15deg]" />
        </motion.div>
      </section>
    </div>
  );
};

export default ProfessionalAgriServices;