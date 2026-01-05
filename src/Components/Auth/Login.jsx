

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ShieldCheck, ArrowRight, Smartphone, MailCheck } from "lucide-react";

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [robot, setRobot] = useState(false);
  const [otp, setOtp] = useState("");

  // Logic to detect input type
  const isEmail = identifier.includes("@");
  const isPhone = /^\d+$/.test(identifier.replace(/\D/g, ""));

  const handleSendOtp = () => {
    if (!robot) {
      alert("Please verify you are a human! 🤖");
      return;
    }

    if (isEmail) {
      alert(`✅ OTP has been sent to your email id: ${identifier}`);
    } else if (isPhone) {
      alert(`✅ OTP has been sent to your phone number: ${identifier}`);
    } else {
      alert("Please enter a valid Email or Phone Number");
      return;
    }

    setStep(2);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mt-8 space-y-5"
          >
            {/* Smart Input */}
            <div className="relative group">
              <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-600 transition-colors">
                {isEmail ? <Mail size={20} /> : <Phone size={20} />}
              </div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white focus:border-green-200 outline-none transition-all"
              />
            </div>

            {/* Creative Robot Verification */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setRobot(!robot)}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all 
                ${robot ? "border-green-500 bg-green-50 shadow-inner" : "border-gray-100 bg-gray-50 hover:bg-gray-100"}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                  ${robot ? "bg-green-600 border-green-600 shadow-md shadow-green-200" : "bg-white border-gray-300"}`}
                >
                  {robot && <ShieldCheck size={14} className="text-white" />}
                </div>
                <span className={`font-semibold text-sm ${robot ? "text-green-800" : "text-gray-500"}`}>
                  I'm not a robot
                </span>
              </div>
              <span className="text-2xl grayscale group-hover:grayscale-0">🤖</span>
            </motion.div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSendOtp}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold shadow-lg shadow-green-200 flex items-center justify-center gap-2"
            >
              <span>Get Verification Code</span>
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mt-8 space-y-6 text-center"
          >
            <div className="flex justify-center mb-4">
               <div className="p-4 bg-green-100 rounded-full text-green-600">
                  {isEmail ? <MailCheck size={32} /> : <Smartphone size={32} />}
               </div>
            </div>
            
            <div>
               <h3 className="text-lg font-bold text-gray-800">Enter OTP</h3>
               <p className="text-sm text-gray-500">Code sent to {identifier}</p>
            </div>

            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="0 0 0 0 0 0"
              className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl text-center tracking-[1em] text-2xl font-black focus:ring-2 focus:ring-green-500 outline-none transition-all"
            />

            <button className="w-full py-4 bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-100 active:scale-95 transition-transform">
              Verify & Secure Login
            </button>

            <button
              onClick={() => setStep(1)}
              className="text-sm font-bold text-green-600 hover:text-green-800 transition-colors uppercase tracking-widest"
            >
              ← Back to Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;
