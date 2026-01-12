import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  ChevronLeft,
  Clock,
  Hash
} from "lucide-react";
import servicesData from "../Service/ServiceData";

const ServiceBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    farmSize: "1-5 Acres" // Added professional context field
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      setTimeout(() => navigate("/services"), 5000);
    }, 2000);
  };

  if (!service) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
        
        {/* LEFT SIDE: SERVICE BRIEF (4 Columns) */}
        <div className="lg:col-span-4 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-400 hover:text-white mb-12 text-xs font-black uppercase tracking-widest transition-colors"
            >
              <ChevronLeft size={16} /> Cancel Booking
            </button>

            <div className="w-16 h-16 bg-emerald-500 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20">
              <service.icon size={32} className="text-slate-900" />
            </div>
            
            <h2 className="text-3xl font-black tracking-tight mb-4 leading-tight">
              Requesting <br />
              <span className="text-emerald-400">{service.title}</span>
            </h2>
            
            <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <Clock size={16} className="text-emerald-500" />
                    <span>Est. Duration: 4-6 Hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span>Verified Professional Service</span>
                </div>
            </div>
          </div>

          <div className="relative z-10 pt-10 border-t border-white/10">
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                    </div>
                  ))}
               </div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {Math.floor(Math.random() * 20 + 5)} Experts available
               </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FORM INTERFACE (8 Columns) */}
        <div className="lg:col-span-8 p-10 lg:p-16 flex flex-col justify-center">
          
          {/* PROGRESS INDICATOR */}
          {step < 3 && (
            <div className="flex items-center gap-4 mb-12">
               {[1, 2].map((i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${step >= i ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-slate-100 text-slate-400"}`}>
                        {step > i ? <CheckCircle2 size={16} /> : i}
                    </div>
                    <span className={`text-xs font-black uppercase tracking-widest ${step >= i ? "text-slate-900" : "text-slate-300"}`}>
                        {i === 1 ? "Credentials" : "Logistics"}
                    </span>
                    {i === 1 && <div className={`w-12 h-[2px] ${step > 1 ? "bg-emerald-600" : "bg-slate-100"}`} />}
                 </div>
               ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <header>
                  <h3 className="text-2xl font-black text-slate-900">Personal Credentials</h3>
                  <p className="text-slate-400 text-sm mt-1 font-medium">Please enter your registered farming identity details.</p>
                </header>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-emerald-600 transition-colors">Legal Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-emerald-600 transition-colors">Contact Information</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.name || !form.phone}
                    className="w-full py-5 bg-slate-900 hover:bg-emerald-600 disabled:bg-slate-200 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-900/10"
                  >
                    Continue to Logistics <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ) : step === 2 ? (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <header>
                  <h3 className="text-2xl font-black text-slate-900">Deployment Logistics</h3>
                  <p className="text-slate-400 text-sm mt-1 font-medium">Specify the precise location and timing for service delivery.</p>
                </header>

                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-emerald-600">Site Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                      <input
                        name="location"
                        placeholder="Village, District, Farm Gate Number"
                        onChange={handleChange}
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Preferred Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <input
                                type="date"
                                name="date"
                                onChange={handleChange}
                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 transition-all outline-none font-medium text-slate-900"
                            />
                        </div>
                    </div>
                    <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Farm Size</label>
                        <select 
                            name="farmSize" 
                            onChange={handleChange}
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 transition-all outline-none font-medium text-slate-900 appearance-none cursor-pointer"
                        >
                            <option>1-5 Acres</option>
                            <option>5-20 Acres</option>
                            <option>20+ Acres</option>
                        </select>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-5 border border-slate-200 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!form.location || !form.date || isSubmitting}
                      className="flex-[2] py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transition-all"
                    >
                      {isSubmitting ? "Processing..." : "Confirm Deployment"}
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 rotate-12 shadow-inner">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Acknowledged</h3>
                <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-8">
                    <Hash size={14} className="text-slate-400" />
                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest">REF: AK-{Math.random().toString(36).substring(7).toUpperCase()}</span>
                </div>
                <p className="text-slate-500 font-medium mb-12 max-w-sm mx-auto leading-relaxed">
                  Your procurement request for <b>{service.title}</b> has been prioritized. An agricultural consultant will contact you at <b>{form.phone}</b> to confirm deployment.
                </p>
                
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5 }}
                            className="h-full bg-emerald-500"
                        />
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Returning to Dashboard</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;