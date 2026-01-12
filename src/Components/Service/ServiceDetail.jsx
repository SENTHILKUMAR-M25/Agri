// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { 
//   ArrowLeft, 
//   CheckCircle, 
//   Star, 
//   ChevronRight, 
//   HelpCircle, 
//   Zap, 
//   Clock 
// } from "lucide-react";
// import servicesData from "../Service/ServiceData";

// const ServiceDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const service = servicesData.find((s) => s.id === id);

//   if (!service) return <div className="h-screen flex items-center justify-center">Service not found</div>;

//   return (
//     <div className="min-h-screen bg-slate-50/50 pb-20">
//       {/* Dynamic Header Banner */}
//       <div className="h-64 w-full  relative">
//         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
//         <div className="max-w-6xl mx-auto px-6 pt-10">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"
//           >
//             <ArrowLeft size={18} /> Back to Services
//           </button>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 -mt-32">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Main Content (Left 2 Columns) */}
//           <div className="lg:col-span-2 space-y-8">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className={`p-4 rounded-2xl bg-green-100 text-green-700`}>
//                   <service.icon size={32} />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold uppercase tracking-widest text-green-600">{service.category}</span>
//                   <h1 className="text-3xl font-black text-slate-900">{service.title}</h1>
//                 </div>
//               </div>

//               <p className="text-slate-600 text-lg leading-relaxed mb-8">
//                 {service.longDescription}
//               </p>

//               {/* Stats Grid */}
//               <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-50">
//                 {Object.entries(service.stats).map(([key, value]) => (
//                   <div key={key} className="text-center">
//                     <p className="text-2xl font-black text-green-600">{value}</p>
//                     <p className="text-xs uppercase font-bold text-slate-400 mt-1">{key.replace(/([A-Z])/g, ' $1')}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Step-by-Step Process */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8"
//             >
//               <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
//                 <Zap className="text-amber-500" size={20} /> How it Works
//               </h2>
//               <div className="relative flex justify-between">
//                 {service.process.map((step, idx) => (
//                   <div key={idx} className="flex flex-col items-center flex-1 relative z-10">
//                     <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-3 shadow-lg shadow-green-100">
//                       {idx + 1}
//                     </div>
//                     <p className="text-xs font-bold text-slate-600 text-center px-2">{step}</p>
//                     {idx !== service.process.length - 1 && (
//                       <div className="absolute top-5 left-[60%] w-full h-[2px] bg-slate-100 -z-10" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* FAQs */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {service.faqs.map((faq, i) => (
//                 <div key={i} className="bg-slate-100/50 p-6 rounded-2xl">
//                   <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
//                     <HelpCircle size={16} className="text-green-600" /> {faq.q}
//                   </h4>
//                   <p className="text-sm text-slate-600">{faq.a}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Sidebar (Right 1 Column) */}
//           <div className="space-y-6">
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-3xl shadow-xl shadow-green-900/5 border border-slate-100 p-8 sticky top-6"
//             >
//               <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-tight">Core Features</h3>
//               <ul className="space-y-4 mb-8">
//                 {service.details.map((item, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <div className="mt-1 bg-green-100 rounded-full p-1">
//                       <CheckCircle className="text-green-600" size={14} />
//                     </div>
//                     <span className="text-slate-600 text-sm font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="p-4 bg-slate-50 rounded-2xl mb-8">
//                 <div className="flex items-center justify-between text-sm mb-2">
//                   <span className="text-slate-500">Estimated Impact</span>
//                   <span className="text-green-600 font-bold">High</span>
//                 </div>
//                 <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
//                   <div className="bg-green-500 h-full w-[85%]" />
//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate(`/services/${service.id}/book`)}
//                 className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-green-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
//               >
//                 Secure Booking <ChevronRight size={20} />
//               </button>
              
//               <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
//                 <Clock size={12} /> Response within 24 hours
//               </p>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  HelpCircle, 
  Zap, 
  Clock, 
  ShieldCheck,
  TrendingUp,
  Award
} from "lucide-react";
import servicesData from "../Service/ServiceData";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id);

  if (!service) return (
    <div className="h-screen flex items-center justify-center font-bold text-slate-400">
      SYSTEM ERROR: SERVICE_NOT_FOUND
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-[45vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 to-slate-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" 
          alt="Agriculture Tech" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 hover:scale-105"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/80 hover:text-white font-bold transition-all text-xs uppercase tracking-widest bg-white/10 hover:bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20"
          >
            <ArrowLeft size={16} /> Back to Ecosystem
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-48 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT CONTENT: 8 COLUMNS */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Main Header Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-10 border border-slate-100"
            >
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                      <div className="flex text-amber-400"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">{service.title}</h1>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-xl leading-relaxed font-medium mb-10 border-l-4 border-emerald-500 pl-6">
                {service.longDescription}
              </p>

              {/* High-Impact Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-50 rounded-[2rem]">
                {Object.entries(service.stats).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-3xl font-black text-slate-900">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Implementation Lifecycle */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3">
                <div className="p-2 bg-slate-900 text-white rounded-xl"><TrendingUp size={20} /></div>
                Implementation Roadmap
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-100">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-8 group">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-white border-4 border-slate-50 text-emerald-600 flex items-center justify-center font-black shadow-sm group-hover:border-emerald-500 group-hover:text-emerald-700 transition-all">
                      {idx + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{step}</h4>
                      <p className="text-sm text-slate-500">Systematized workflow ensuring maximum resource efficiency and data accuracy.</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Knowledge Base (FAQ) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-all">
                  <h4 className="font-black text-slate-800 mb-3 flex items-start gap-3">
                    <HelpCircle size={18} className="text-emerald-600 mt-0.5 shrink-0" /> {faq.q}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR: 4 COLUMNS */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-6">
              
              {/* Feature Checklist Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-2 bg-emerald-500 rounded-xl text-slate-900"><ShieldCheck size={20}/></div>
                   <h3 className="text-lg font-black uppercase tracking-widest">Specifications</h3>
                </div>
                
                <ul className="space-y-5 mb-10">
                  {service.details.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1 group-hover:scale-125 transition-transform" size={18} />
                      <span className="text-slate-300 text-sm font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-slate-800">
                    <button
                        onClick={() => navigate(`/services/${service.id}/book`)}
                        className="w-full py-5 bg-emerald-500 hover:bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-3"
                    >
                        Initialize Booking <ChevronRight size={18} />
                    </button>
                    <p className="text-center text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <Clock size={12} /> Priority Support: 24h Response
                    </p>
                </div>
              </motion.div>

              {/* Trust Badge Card */}
              <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100 flex items-center gap-5">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                    <Award size={28} />
                 </div>
                 <div>
                    <h5 className="font-bold text-emerald-900 text-sm">Certified Expert Service</h5>
                    <p className="text-xs text-emerald-700/70 font-medium">Compliant with ISO-9001 Agricultural Standards.</p>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;