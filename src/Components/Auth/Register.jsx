import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Mail,
  ChevronLeft,
  Sprout
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [robot, setRobot] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const isFormValid = formData.name && formData.mobile.length >= 10 && formData.email.includes("@");

  const handleNext = () => {
    if (!robot) return alert("Please confirm you are a farmer 🤖");
    if (!isFormValid) return alert("Please complete all fields correctly");
    setStep(2);
  };

  const handleSubmit = () => {
    alert("Account created successfully ✅");
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 1. Creative Stepper with Shimmer */}
      <div className="relative flex items-center justify-between mb-10 px-2">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: step === 1 ? "50%" : "100%" }}
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700"
          />
        </div>
        
        {[1, 2].map((i) => (
          <div key={i} className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: step === i ? 1.2 : 1,
                backgroundColor: step >= i ? "#16a34a" : "#f3f4f6"
              }}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl transition-colors duration-500`}
            >
              {step > i ? <CheckCircle size={20} className="text-white" /> : 
               <span className={step >= i ? "text-white font-bold" : "text-gray-400 font-bold"}>{i}</span>}
            </motion.div>
            <span className={`absolute -bottom-7 text-[10px] font-black uppercase tracking-tighter ${step >= i ? "text-green-700" : "text-gray-400"}`}>
              {i === 1 ? "Identify" : "Verify"}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="mb-2">
              <h3 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                Join the Fold <Sprout className="text-green-500" />
              </h3>
              <p className="text-gray-500 text-sm">Start your digital farming journey today.</p>
            </div>

            {/* Form Inputs with Floating Effect Feel */}
            {[
              { id: 'name', icon: User, placeholder: 'Full Name', type: 'text' },
              { id: 'mobile', icon: Phone, placeholder: 'Mobile Number', type: 'number' },
              { id: 'email', icon: Mail, placeholder: 'Email Address', type: 'email' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-green-500 transition-colors" size={20} />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-green-500 focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium shadow-sm"
                />
              </div>
            ))}

            {/* Farmer Check - Interactive Card */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setRobot(!robot)}
              className={`group flex items-center justify-between p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                robot ? "border-green-500 bg-green-50/50 shadow-inner" : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${robot ? "bg-green-600 rotate-[360deg] scale-110 shadow-lg shadow-green-200" : "bg-gray-100"}`}>
                  {robot ? <ShieldCheck size={20} className="text-white" /> : <Sprout size={20} className="text-gray-300" />}
                </div>
                <div>
                  <p className={`font-bold text-sm ${robot ? "text-green-800" : "text-gray-500"}`}>Identity Check</p>
                  <p className="text-xs text-gray-400">I am a proud farmer 👨‍🌾</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${robot ? "border-green-600 bg-green-600" : "border-gray-200"}`}>
                {robot && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </motion.div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={handleNext}
              className={`w-full py-5 rounded-3xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-100
                ${isFormValid && robot ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
            >
              Continue to Verify <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-8 text-center"
          >
            <div className="relative inline-block">
              <div className="p-6 bg-green-100 rounded-[2rem] text-green-600 relative z-10">
                <Smartphone size={44} />
              </div>
              <div className="absolute inset-0 bg-green-200/40 blur-2xl rounded-full scale-150 animate-pulse" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-gray-800">Check your phone</h3>
              <p className="text-sm text-gray-500 px-8">
                We've sent a 6-digit code to <span className="text-green-600 font-bold">{formData.mobile}</span>
              </p>
            </div>

            <div className="flex justify-center gap-2 max-w-[300px] mx-auto">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-1 h-14 bg-gray-50 border-b-4 border-gray-200 rounded-xl" />
              ))}
              <input
                autoFocus
                maxLength="6"
                className="absolute w-[240px] opacity-0 cursor-pointer"
                placeholder="· · · · · ·"
              />
              <div className="absolute pointer-events-none text-2xl font-black tracking-[1.3em] pl-4">
                {/* Visual overlay for OTP would go here */}
              </div>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-5 bg-gray-900 text-white rounded-[2rem] font-bold shadow-2xl"
              >
                Confirm & Create Account
              </motion.button>

              <button
                onClick={() => setStep(1)}
                className="flex items-center justify-center gap-2 mx-auto text-sm font-bold text-gray-400 hover:text-green-600 transition-colors"
              >
                <ChevronLeft size={16} /> Use a different number
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegisterForm;