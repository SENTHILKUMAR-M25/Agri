// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Mail, Phone, ShieldCheck, ArrowRight, 
//   Smartphone, MailCheck, Fingerprint, ChevronLeft 
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [identifier, setIdentifier] = useState("");
//   const [robot, setRobot] = useState(false);
//   const [otp, setOtp] = useState("");

//   const isEmail = identifier.includes("@");
//   const isPhone = /^[0-9]{10}$/.test(identifier.replace(/\D/g, ""));
//   const isValid = isEmail || isPhone;

//   const handleSendOtp = () => {
//     if (!robot) return alert("Please verify you are a human 🤖");
//     if (!isValid) return alert("Enter a valid Email or 10-digit Phone");
//     setStep(2);
//   };

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0 }
//   };

//   return (
//     <div className="relative max-w-md mx-auto min-h-[400px]">
//       <AnimatePresence mode="wait">
//         {step === 1 ? (
//           <motion.div
//             key="step1"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="space-y-6"
//           >
//             {/* Header section inside the form for context */}
//             <motion.div variants={itemVariants} className="mb-8">
//               <h2 className="text-2xl font-black text-gray-800">Welcome Back!</h2>
//               <p className="text-gray-500 text-sm">Login to manage your digital farm.</p>
//             </motion.div>

//             {/* Input Group */}
//             <motion.div variants={itemVariants} className="relative group">
//               <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isValid ? 'text-green-600' : 'text-gray-400'}`}>
//                 {isEmail ? <Mail size={22} /> : <Phone size={22} />}
//               </div>
//               <input
//                 type="text"
//                 placeholder="Email or Phone Number"
//                 value={identifier}
//                 onChange={(e) => setIdentifier(e.target.value)}
//                 className="w-full pl-12 pr-4 py-5 bg-white border-2 border-gray-100 rounded-3xl focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all font-medium text-gray-700 shadow-sm"
//               />
//               {isValid && (
//                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
//                   <ShieldCheck size={20} />
//                 </motion.div>
//               )}
//             </motion.div>

//             {/* Creative Robot Check */}
//             <motion.div
//               variants={itemVariants}
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setRobot(!robot)}
//               className={`flex items-center justify-between p-5 rounded-3xl border-2 transition-all cursor-pointer shadow-sm
//                 ${robot ? "border-green-500 bg-green-50/50" : "border-gray-100 bg-white"}`}
//             >
//               <div className="flex items-center gap-4">
//                 <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${robot ? "bg-green-600 rotate-[360deg]" : "bg-gray-100"}`}>
//                   {robot ? <ShieldCheck size={18} className="text-white" /> : <div className="w-2 h-2 bg-gray-300 rounded-full" />}
//                 </div>
//                 <span className={`text-sm font-bold ${robot ? "text-green-800" : "text-gray-500"}`}>
//                   Secure Human Verification
//                 </span>
//               </div>
//               <span className="text-xl">🌱</span>
//             </motion.div>

//             {/* Action Button */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{ y: -2 }}
//               whileTap={{ y: 0 }}
//               onClick={handleSendOtp}
//               className="w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-3xl font-bold shadow-xl shadow-green-200 flex items-center justify-center gap-3 transition-all"
//             >
//               Request Access <ArrowRight size={20} />
//             </motion.button>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="step2"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 1.1 }}
//             className="space-y-8 py-4"
//           >
//             {/* OTP Illustration Area */}
//             <div className="relative flex justify-center mb-4">
//                <motion.div 
//                 initial={{ scale: 0 }} animate={{ scale: 1 }}
//                 className="p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-[2.5rem] text-green-600 relative z-10"
//                >
//                  {isEmail ? <MailCheck size={40} /> : <Smartphone size={40} />}
//                </motion.div>
//                <div className="absolute inset-0 bg-green-200/30 blur-2xl rounded-full scale-150" />
//             </div>

//             <div className="text-center">
//               <h3 className="text-2xl font-black text-gray-800">Verification</h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 Enter the 6-digit code sent to <br/>
//                 <span className="text-green-700 font-bold">{identifier}</span>
//               </p>
//             </div>

//             {/* Segmented OTP Input Look */}
//             <div className="relative group max-w-[280px] mx-auto">
//               <input
//                 type="text"
//                 maxLength="6"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
//                 className="w-full p-4 bg-transparent text-center tracking-[1.2em] text-3xl font-black outline-none relative z-10"
//               />
//               <div className="absolute inset-0 flex justify-between items-center -z-0 pointer-events-none">
//                 {[...Array(6)].map((_, i) => (
//                   <div 
//                     key={i} 
//                     className={`w-10 h-14 border-b-4 rounded-lg transition-all 
//                     ${otp.length > i ? "border-green-500 bg-green-50" : "border-gray-200 bg-gray-50"}`} 
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-4">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => {
//                    if(otp.length === 6) navigate("/home");
//                    else alert("Invalid OTP");
//                 }}
//                 className="w-full py-5 bg-gray-900 text-white rounded-3xl font-bold shadow-2xl flex items-center justify-center gap-3"
//               >
//                 <Fingerprint size={20} /> Verify Identity
//               </motion.button>

//               <button
//                 onClick={() => setStep(1)}
//                 className="flex items-center justify-center gap-2 w-full text-sm font-bold text-gray-400 hover:text-green-600 transition-colors"
//               >
//                 <ChevronLeft size={16} /> Edit Phone / Email
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LoginForm;






import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, ShieldCheck, ArrowRight,
  Smartphone, MailCheck, Fingerprint, ChevronLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Slice/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [robot, setRobot] = useState(false);

  const isEmail = identifier.includes("@");
  const isPhone = /^[0-9]{10}$/.test(identifier);
  const isValid = isEmail || isPhone;

  const sendOtp = () => {
    if (!robot) return alert("Verify human");
    if (!isValid) return alert("Invalid Email / Phone");
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp.length !== 6) return alert("Invalid OTP");

    dispatch(
      loginSuccess({
        name: isEmail ? identifier.split("@")[0] : "Farmer",
        email: isEmail ? identifier : null,
        mobile: isPhone ? identifier : null,
      })
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-black">Welcome Back</h2>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {isEmail ? <Mail /> : <Phone />}
                </div>
                <input
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Email or Mobile"
                  className="w-full pl-12 py-4 rounded-2xl border-2 focus:border-green-500 outline-none"
                />
              </div>

              <div
                onClick={() => setRobot(!robot)}
                className={`p-4 rounded-2xl border-2 cursor-pointer flex justify-between
                  ${robot ? "border-green-500 bg-green-50" : "border-gray-200"}
                `}
              >
                <span className="font-semibold">I am not a robot</span>
                <ShieldCheck className={robot ? "text-green-600" : "text-gray-300"} />
              </div>

              <button
                onClick={sendOtp}
                className="w-full py-4 bg-green-600 text-white rounded-2xl font-bold flex justify-center gap-2"
              >
                Request OTP <ArrowRight />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="otp"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center"
            >
              <div className="mx-auto w-fit p-4 bg-green-100 rounded-2xl">
                {isEmail ? <MailCheck size={40} /> : <Smartphone size={40} />}
              </div>

              <p className="font-semibold">Enter 6-digit OTP</p>

              <input
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full text-center text-3xl tracking-widest font-bold outline-none"
              />

              <button
                onClick={verifyOtp}
                className="w-full py-4 bg-black text-white rounded-2xl font-bold flex justify-center gap-2"
              >
                <Fingerprint /> Verify
              </button>

              <button
                onClick={() => setStep(1)}
                className="text-sm text-gray-400 flex justify-center gap-1"
              >
                <ChevronLeft size={16} /> Change number
              </button>
            </motion.div>
          )}
        </AnimatePresence>
 <p>Don't have an account?  <a href="/register">Register</a> </p>
      </div>
    </div>
  );
};

export default LoginForm;


