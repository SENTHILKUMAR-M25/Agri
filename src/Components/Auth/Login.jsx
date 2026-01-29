
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Mail, 
//   Phone, 
//   ShieldCheck, 
//   ArrowRight, 
//   Smartphone, 
//   MailCheck, 
//   Fingerprint, 
//   ChevronLeft,
//   Loader2
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../Redux/Slice/authSlice";
// import google from '../../assets/google.png'
// const LoginForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [step, setStep] = useState(1);
//   const [identifier, setIdentifier] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [robot, setRobot] = useState(false);

//   const isEmail = identifier.includes("@");
//   const isPhone = /^[0-9]{10}$/.test(identifier);
//   const isValid = isEmail || isPhone;

//   // 🛡️ MOCK OTP SENDING PROCESS
//   const sendOtp = async () => {
//     if (!robot) return;
//     setIsLoading(true);
    
//     // Simulate API Call
//     setTimeout(() => {
//       setIsLoading(false);
//       setStep(2);
//     }, 1500);
//   };

//   const verifyOtp = () => {
//     if (otp.length !== 6) return;
    
//     setIsLoading(true);
//     setTimeout(() => {
//       dispatch(
//         loginSuccess({
//           name: isEmail ? identifier.split("@")[0] : "Premium User",
//           email: isEmail ? identifier : null,
//           mobile: isPhone ? identifier : null,
//           verified: true
//         })
//       );
//       navigate("/home");
//     }, 1200);
//   };

//   // 🌐 GOOGLE LOGIN HANDLER
//   const handleGoogleLogin = () => {
//     console.log("Redirecting to Google OAuth...");
//     // Integration logic here (e.g., Firebase or Auth0)
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 font-sans">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent -z-10" />
      
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-[440px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 sm:p-10"
//       >
//         <AnimatePresence mode="wait">
//           {step === 1 ? (
//             <motion.div
//               key="login"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 20 }}
//               className="space-y-8"
//             >
//               <div className="text-center space-y-2">
//                 <h2 className="text-3xl font-black text-slate-900 tracking-tight">Login</h2>
//                 <p className="text-slate-500 font-medium">Secure access to your agricultural hub</p>
//               </div>

//               {/* SOCIAL LOGIN */}
//               <button 
//                 onClick={handleGoogleLogin}
//                 className="w-full py-4 px-6 border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-[0.98]"
//               >
//                 <img src={google} className="w-10 h-10" alt="google" />
//                 Continue with Google
//               </button>

//               <div className="relative flex items-center py-2">
//                 <div className="flex-grow border-t border-slate-100"></div>
//                 <span className="flex-shrink mx-4 text-slate-400 text-xs font-black uppercase tracking-widest">or email/phone</span>
//                 <div className="flex-grow border-t border-slate-100"></div>
//               </div>

//               {/* INPUT FIELDS */}
//               <div className="space-y-4">
//                 <div className="relative group">
//                   <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${identifier ? 'text-emerald-500' : 'text-slate-300'}`}>
//                     {isEmail ? <Mail size={20} /> : <Phone size={20} />}
//                   </div>
//                   <input
//                     value={identifier}
//                     onChange={(e) => setIdentifier(e.target.value)}
//                     placeholder="Email or 10-digit mobile"
//                     className="w-full pl-14 pr-6 py-4 rounded-[1.25rem] border-2 border-slate-100 focus:border-emerald-500 bg-slate-50/50 focus:bg-white outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300"
//                   />
//                 </div>

//                 <div
//                   onClick={() => setRobot(!robot)}
//                   className={`p-4 rounded-2xl border-2 cursor-pointer flex justify-between items-center transition-all
//                     ${robot ? "border-emerald-500 bg-emerald-50/50" : "border-slate-100 hover:border-slate-200"}
//                   `}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${robot ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
//                       {robot && <ShieldCheck size={14} className="text-white" />}
//                     </div>
//                     <span className="font-bold text-sm text-slate-600">I verify I'm a human</span>
//                   </div>
//                   <ShieldCheck className={robot ? "text-emerald-600" : "text-slate-200"} />
//                 </div>
//               </div>

//               <button
//                 onClick={sendOtp}
//                 disabled={!robot || !isValid || isLoading}
//                 className={`w-full py-5 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-lg
//                   ${robot && isValid && !isLoading 
//                     ? "bg-slate-900 text-white shadow-slate-200 hover:-translate-y-1 active:scale-95" 
//                     : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"}
//                 `}
//               >
//                 {isLoading ? <Loader2 className="animate-spin" /> : <>Get Started <ArrowRight size={20} /></>}
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="otp"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="space-y-8 text-center"
//             >
//               <div className="space-y-4">
//                 <div className="mx-auto w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center">
//                   {isEmail ? <MailCheck size={36} /> : <Smartphone size={36} />}
//                 </div>
//                 <div className="space-y-1">
//                   <h3 className="text-2xl font-black text-slate-900">Verify Code</h3>
//                   <p className="text-slate-500 text-sm font-medium">Sent to {identifier}</p>
//                 </div>
//               </div>

//               <div className="relative">
//                 <input
//                   maxLength={6}
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
//                   placeholder="0 0 0 0 0 0"
//                   className="w-full text-center text-4xl tracking-[0.5em] font-black outline-none bg-slate-50 py-6 rounded-3xl border-2 border-transparent focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-200"
//                 />
//               </div>

//               <div className="space-y-3">
//                 <button
//                   onClick={verifyOtp}
//                   disabled={otp.length !== 6 || isLoading}
//                   className="w-full py-5 bg-emerald-500 text-white rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-100 hover:bg-emerald-600 transition-all active:scale-95 disabled:bg-emerald-200"
//                 >
//                   {isLoading ? <Loader2 className="animate-spin" /> : <><Fingerprint size={22} /> Confirm Access</>}
//                 </button>

//                 <button
//                   onClick={() => setStep(1)}
//                   className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2 hover:text-slate-600 transition-colors py-2 w-full"
//                 >
//                   <ChevronLeft size={16} /> Edit Details
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <p className="text-center mt-10 text-sm text-slate-500 font-medium">
//           New to the platform? <a href="/register" className="text-emerald-600 font-black hover:underline underline-offset-4">Join Community</a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginForm;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  MailCheck,
  Fingerprint,
  ChevronLeft,
  Loader2,
  Tractor,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Slice/authSlice";
import google from "../../assets/google.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [robot, setRobot] = useState(false);
  const [role, setRole] = useState("user");

  const isEmail = identifier.includes("@");
  const isPhone = /^[0-9]{10}$/.test(identifier);
  const isValid = isEmail || isPhone;

  const sendOtp = async () => {
    if (!robot || !isValid) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1200);
  };

  const verifyOtp = () => {
    if (otp.length !== 6) return;

    setIsLoading(true);

    setTimeout(() => {
      dispatch(
        loginSuccess({
          name: isEmail ? identifier.split("@")[0] : "Farmer User",
          email: isEmail ? identifier : null,
          mobile: isPhone ? identifier : null,
          role,
          verified: true
        })
      );

      navigate("/home");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    console.log("Google OAuth login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[440px] bg-white rounded-3xl shadow-xl border p-8"
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              className="space-y-6"
            >
              <div className="text-center space-y-1">
                <h2 className="text-3xl font-black">Login</h2>
                <p className="text-slate-500 text-sm">
                  Secure access to platform
                </p>
              </div>

              {/* Role Selector */}
              <div className="flex gap-3">
                <button
                  onClick={() => setRole("user")}
                  className={`flex-1 py-3 rounded-xl font-bold border ${
                    role === "user"
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-100"
                  }`}
                >
                  <User size={18} className="inline mr-2" />
                  User
                </button>

                <button
                  onClick={() => setRole("farmer")}
                  className={`flex-1 py-3 rounded-xl font-bold border ${
                    role === "farmer"
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-100"
                  }`}
                >
                  <Tractor size={18} className="inline mr-2" />
                  Farmer
                </button>
              </div>

              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="w-full py-3 border rounded-xl flex justify-center gap-3 font-bold hover:bg-slate-50"
              >
                <img src={google} className="w-6 h-6" alt="google" />
                Continue with Google
              </button>

              <div className="text-center text-xs text-slate-400">
                OR use Email / Mobile
              </div>

              {/* Identifier Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  {isEmail ? <Mail size={18} /> : <Phone size={18} />}
                </div>
                <input
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Email or mobile number"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none"
                />
              </div>

              {/* Human Check */}
              <div
                onClick={() => setRobot(!robot)}
                className={`p-3 rounded-xl border cursor-pointer flex justify-between ${
                  robot
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-100"
                }`}
              >
                I am not a robot
                <ShieldCheck />
              </div>

              <button
                onClick={sendOtp}
                disabled={!robot || !isValid || isLoading}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Continue <ArrowRight size={18} />
                  </>
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="space-y-6 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                {isEmail ? (
                  <MailCheck size={28} />
                ) : (
                  <Smartphone size={28} />
                )}
              </div>

              <h3 className="text-2xl font-black">Verify OTP</h3>
              <p className="text-sm text-slate-500">
                Code sent to {identifier}
              </p>

              <input
                maxLength={6}
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
                className="w-full text-center text-3xl tracking-widest py-5 border rounded-xl outline-none"
                placeholder="000000"
              />

              <button
                onClick={verifyOtp}
                disabled={otp.length !== 6 || isLoading}
                className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold flex justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Fingerprint size={18} /> Verify
                  </>
                )}
              </button>

              <button
                onClick={() => setStep(1)}
                className="text-sm text-slate-400 flex justify-center gap-2"
              >
                <ChevronLeft size={16} /> Edit details
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center mt-6 text-sm text-slate-500">
          New user?{" "}
          <a href="/register" className="text-emerald-600 font-bold">
            Register here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginForm;
