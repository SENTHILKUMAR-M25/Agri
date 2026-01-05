// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Login from "./Login";
// import Register from "./Register";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 px-4 py-12">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
//       </div>

//       <motion.div 
//         layout
//         className="relative w-full max-w-md bg-white/95 backdrop-blur-sm rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-white/20"
//       >
//         {/* Logo / Title Area */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4 transform -rotate-6">
//             <span className="text-3xl">🌱</span>
//           </div>
//           <h2 className="text-4xl font-black text-green-800 tracking-tight">
//             Agri Kisan
//           </h2>
//           <p className="text-gray-500 font-medium mt-2">
//             {isLogin ? "Digital companion for farmers" : "Join the farming revolution"}
//           </p>
//         </div>

//         {/* Content with Animation */}
//         <div className="relative overflow-hidden min-h-[400px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={isLogin ? "login-mode" : "register-mode"}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isLogin ? <Login /> : <Register />}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Switch Toggle */}
//         <div className="mt-8 pt-6 border-t border-gray-100 text-center">
//           <p className="text-gray-600 text-sm font-medium">
//             {isLogin ? "New to the farm?" : "Part of the community?"}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="ml-2 text-green-700 font-bold hover:text-green-500 transition-colors underline decoration-2 underline-offset-4"
//             >
//               {isLogin ? "Register Now" : "Login Here"}
//             </button>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Auth;


import { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 px-4">

      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Agri Kisan
        </h1>
        <p className="text-center text-gray-500 mt-1">
          {isLogin ? "Login with OTP" : "Register new account"}
        </p>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <p className="text-center text-sm mt-6">
          {isLogin ? "New user?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-green-600 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
