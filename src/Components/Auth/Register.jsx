
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, ShieldCheck, CheckCircle, ArrowRight, Smartphone, Mail } from "lucide-react";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [robot, setRobot] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });

  const handleNext = () => {
    if (!robot) {
      alert("Please confirm you are a farmer (not a robot) 🤖");
      return;
    }
    if (!formData.name || !formData.mobile) {
      alert("Please fill in all details");
      return;
    }
    setStep(2);
  };

  return (
    <div className="w-full">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-8 px-4">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
              step >= i ? "bg-green-600 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
            }`}>
              {step > i ? <CheckCircle size={18} /> : i}
            </div>
            {i === 1 && (
              <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-500 ${
                step > 1 ? "bg-green-600" : "bg-gray-200"
              }`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-5"
          >
            <div className="text-left mb-2">
              <h3 className="text-lg font-bold text-gray-800">Farmer Details</h3>
              <p className="text-sm text-gray-500">Let's get your farm registered</p>
            </div>

            {/* Name Input */}
            <div className="relative group">
              <User className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white outline-none transition-all"
              />
            </div>

            {/* Mobile Input */}
            <div className="relative group">
              <Phone className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-600 transition-colors" size={20} />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="relative group">
              <Mail className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-600 transition-colors" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white outline-none transition-all"
              />
                
            </div>

            {/* Robot Check Card */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setRobot(!robot)}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all 
                ${robot ? "border-green-500 bg-green-50 shadow-inner" : "border-gray-200 bg-white hover:border-green-200"}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                  ${robot ? "bg-green-600 border-green-600 shadow-md shadow-green-200" : "bg-white border-gray-300"}`}
                >
                  {robot && <ShieldCheck size={14} className="text-white" />}
                </div>
                <span className={`font-semibold text-sm ${robot ? "text-green-800" : "text-gray-500"}`}>
                  I am a Farmer
                </span>
              </div>
              <span className="text-2xl">👨‍🌾</span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-200 flex items-center justify-center gap-2 transition-all"
            >
              <span>Register & Send OTP</span>
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 text-center"
          >
            <div className="flex justify-center">
              <div className="p-4 bg-green-100 rounded-full text-green-600">
                <Smartphone size={40} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800">Verify Mobile</h3>
              <p className="text-sm text-gray-500">Entering code sent to <span className="font-bold text-gray-700">{formData.mobile}</span></p>
            </div>

            <input
              type="text"
              maxLength="6"
              placeholder="· · · · · ·"
              className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl text-center tracking-[1em] text-3xl font-black focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-200"
            >
              Create Account
            </motion.button>

            <button
              onClick={() => setStep(1)}
              className="text-sm font-bold text-green-600 hover:text-green-800 transition-colors uppercase tracking-widest"
            >
              ← Edit Details
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegisterForm;