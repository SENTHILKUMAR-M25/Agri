

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, Phone, Mail, ShieldCheck, ArrowRight, MapPin, 
  Home, Sprout, CheckCircle2, ChevronLeft 
} from "lucide-react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Slice/authSlice";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [robot, setRobot] = useState(false);
  const [data, setData] = useState({ name: "", mobile: "", email: "", farmName: "", location: "" });

  const valid = data.name && data.mobile.length === 10 && data.email.includes("@") && data.farmName && data.location;

  const submit = () => {
    if (!robot || !valid) return;
    dispatch(loginSuccess({ ...data, verified: true }));
    navigate("/login");
  };

  const fields = [
    { id: "name", icon: User, placeholder: "Full Name", type: "text" },
    { id: "mobile", icon: Phone, placeholder: "Mobile Number", type: "tel" },
    { id: "email", icon: Mail, placeholder: "Email Address", type: "email" },
    { id: "farmName", icon: Home, placeholder: "Farm Name", type: "text" },
    { id: "location", icon: MapPin, placeholder: "Location", type: "text" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex  justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* 🌿 BRANDING SIDEBAR (Hidden on small mobile, shown on Tablet/Desktop) */}
          <div className="bg-slate-900 lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between text-white relative overflow-hidden">
            {/* Abstract background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                <Sprout size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Producer Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">Grow your business with us.</h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Join 5,000+ farmers selling directly to verified retail partners.
              </p>
            </div>

            <div className="hidden lg:block space-y-4 pt-12">
              {["Verified Status", "Real-time Analytics", "Secure Payments"].map((check, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-bold text-emerald-500">
                  <CheckCircle2 size={16} /> {check}
                </div>
              ))}
            </div>
          </div>

          {/* 📝 FORM SECTION */}
          <div className="flex-1 p-6 sm:p-10 lg:p-16">
            <div className="max-w-md mx-auto lg:mx-0 space-y-8">
              <div className="flex items-center justify-between">
                <Link to="/login" className="p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <ChevronLeft size={24} className="text-slate-400" />
                </Link>
                <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Register</h1>
                <p className="text-slate-500 text-sm font-medium">Please enter your farm and contact details.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name & Mobile - Responsive Grid */}
                {fields.map((f, i) => (
                  <div key={f.id} className={`relative group ${i === 2 ? 'sm:col-span-2' : ''}`}>
                    <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={data[f.id]}
                      onChange={(e) => setData({ ...data, [f.id]: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50/30 focus:bg-white focus:border-emerald-500 outline-none font-bold text-slate-700 transition-all text-sm sm:text-base"
                    />
                  </div>
                ))}
              </div>

              <motion.div
                whileTap={{ scale: 0.98 }}
                onClick={() => setRobot(!robot)}
                className={`p-4 rounded-2xl border-2 cursor-pointer flex justify-between items-center transition-all ${
                  robot ? "border-emerald-500 bg-emerald-50/50" : "border-slate-50 hover:border-slate-100"
                }`}
              >
                <span className="text-xs sm:text-sm font-bold text-slate-600">I confirm I am a producer</span>
                <ShieldCheck className={robot ? "text-emerald-500" : "text-slate-200"} size={22} />
              </motion.div>

              <button
                onClick={submit}
                disabled={!valid || !robot}
                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${
                  valid && robot 
                  ? "bg-slate-900 text-white shadow-xl hover:-translate-y-1 active:scale-95" 
                  : "bg-slate-100 text-slate-300 cursor-not-allowed"
                }`}
              >
                Create Account <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;