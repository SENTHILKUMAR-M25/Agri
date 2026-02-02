// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, LogOut, User, ChevronDown } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../Redux/Slice/authSlice";
// import logo from '../../assets/logo.png';

// const navItems = [
//   { name: "Home", path: "/home" },
//   { name: "Products", path: "/products" },
//   { name: "Feed", path: "/feed" },
//   { name: "My Crop", path: "/mycrop" },
//   { name: "Mandi", path: "/mandi" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated, user } = useSelector((state) => state.auth);
//   const firstLetter = user?.name?.charAt(0)?.toUpperCase();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="fixed w-full z-50 flex justify-center px-4 transition-all duration-300"
//     >
//       <div className={`
//         w-full max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-300
//         ${scrolled
//           ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 rounded-2xl md:rounded-full"
//           : "bg-transparent py-5"
//         }
//       `}>

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <img src={logo} alt="Logo" className="h-10 w-10" />
//           <h1 className="font-black text-2xl sm:text-3xl tracking-tighter text-zinc-900 uppercase italic">
//             BHU<span className="text-green-600">MMI</span>
//           </h1>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) => `
//                 relative px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300
//                 ${isActive ? "text-white" : "text-zinc-600 hover:text-green-600"}
//               `}
//             >
//               {({ isActive }) => (
//                 <>
//                   <span className="relative z-10">{item.name}</span>
//                   {isActive && (
//                     <motion.div
//                       layoutId="nav-pill"
//                       className="absolute inset-0 bg-green-600 rounded-full shadow-md"
//                       transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
//                     />
//                   )}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </div>

//         {/* Right Actions */}
//         <div className="flex items-center gap-3">
//           {!isAuthenticated ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 sm:px-6 py-2.5 bg-zinc-900 text-white rounded-full text-sm sm:text-base font-bold hover:bg-green-600 hover:scale-105 active:scale-95 transition-all shadow-sm"
//             >
//               Get Started
//             </button>
//           ) : (
//             <div className="relative">
//               <button
//                 onClick={() => setProfileOpen(!profileOpen)}
//                 className="flex items-center gap-2 p-1 pr-3 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors"
//               >
//                 <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow-inner">
//                   {firstLetter}
//                 </div>
//                 <ChevronDown size={14} className={`text-zinc-500 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
//               </button>

//               <AnimatePresence>
//                 {profileOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95, y: 10 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: 10 }}
//                     className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-zinc-100 p-2 overflow-hidden"
//                   >
//                     <div className="px-4 py-3 border-b border-zinc-50 mb-1">
//                       <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Welcome</p>
//                       <p className="text-sm font-bold text-zinc-800 truncate">{user?.name || "User"}</p>
//                     </div>

//                     <button
//                       onClick={() => { navigate('/settings'); setProfileOpen(false); }}
//                       className="w-full px-4 py-2 flex items-center gap-3 text-sm text-zinc-600 hover:bg-green-50 hover:text-green-700 rounded-xl transition-all active:scale-95"
//                     >
//                       <User size={16} /> My Profile
//                     </button>

//                     <button
//                       onClick={() => { handleLogout(); setProfileOpen(false); }}
//                       className="w-full px-4 py-2 mt-1 flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-95"
//                     >
//                       <LogOut size={16} /> Logout
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           )}

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden p-2 bg-zinc-100 rounded-xl text-green-700"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-zinc-100 p-4 md:hidden overflow-hidden"
//           >
//             <div className="flex flex-col gap-2">
//               {navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) => `
//                     flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all
//                     ${isActive ? "bg-green-600 text-white" : "bg-zinc-50 text-zinc-600"}
//                   `}
//                 >
//                   {item.name}
//                   <ChevronDown size={16} className="-rotate-90 opacity-50" />
//                 </NavLink>
//               ))}
//               {!isAuthenticated ? (
//                 <button
//                   onClick={() => { navigate("/login"); setOpen(false); }}
//                   className="w-full mt-2 bg-zinc-900 text-white py-4 rounded-2xl font-bold"
//                 >
//                   Login
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => { handleLogout(); setOpen(false); }}
//                   className="w-full mt-2 bg-red-50 text-red-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
//                 >
//                   <LogOut size={18} /> Logout
//                 </button>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogOut,
  User,
  ChevronDown,
  Home,
  Package,
  MessageCircle,
  Sprout,
  Store,
  Settings
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slice/authSlice";
import logo from "../../assets/logo.png";

const navItems = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Products", path: "/products", icon: Package },
  { name: "Feed", path: "/feed", icon: MessageCircle },
  { name: "My Crop", path: "/mycrop", icon: Sprout },
  { name: "Mandi", path: "/mandi", icon: Store },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {/* ================= DESKTOP & SHARED TOP NAV ================= */}
      <nav className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`
            w-full max-w-7xl pointer-events-auto flex items-center justify-between px-5 py-2.5 transition-all duration-500
            ${scrolled 
              ? "bg-green-200/70 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 rounded-2xl" 
              : "bg-transparent rounded-none"}
          `}
        >
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              whileHover={{ rotate: 15 }}
              src={logo} 
              alt="Logo" 
              className="h-10 w-10 object-contain" 
            />
            <span className="font-extrabold text-2xl tracking-tighter text-zinc-900">
              BHU<span className="text-green-600">MMI</span>
            </span>
          </Link>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex items-center bg-zinc-200/40 backdrop-blur-sm p-1 rounded-full border border-zinc-200/50">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-5 py-2 text-sm font-medium transition-colors duration-300
                  ${isActive ? "text-white" : "text-zinc-600 hover:text-zinc-900"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        className="absolute inset-0 bg-green-600 rounded-full shadow-md shadow-green-200"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-green-600 transition-colors"
              >
                Sign In
              </motion.button>
            ) : (
              <div className="relative ">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 group"
                >
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 text-white flex items-center justify-center font-bold shadow-sm ring-2 ring-transparent group-hover:ring-green-100 transition-all`}>
                    {firstLetter}
                  </div>
      
                </button>

                {/* Professional Dropdown */}
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 p-2 overflow-hidden"
                    >
                      <div className="px-4 py-3 mb-2 border-bottom bg-zinc-50 rounded-xl">
                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Account</p>
                        <p className="text-sm font-bold text-zinc-800 truncate">{user?.name || "User"}</p>
                      </div>
                      
                      <DropdownItem onClick={() => {navigate("/settings"); setProfileOpen(false)}} icon={<User size={16}/>} label="My Profile" />
                      <DropdownItem onClick={() => {navigate("/settings"); setProfileOpen(false)}} icon={<Settings size={16}/>} label="Settings" />
                      
                      <div className="h-px bg-zinc-100 my-1 mx-2" />
                      
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2.5 flex items-center gap-3 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
      </nav>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      {/* {isAuthenticated && (
        <div className="md:hidden fixed bottom-6 bg-green-400 left-1/2 -translate-x-1/2 w-[90%] z-50">
          <div className="bg-green-200/80 backdrop-blur-lg border border-zinc-200/50 rounded-[2rem] shadow-2xl flex justify-around items-center px-4 py-3">
            {navItems.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => ` relative flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? "text-green-600 scale-110" : "text-zinc-400"}`}
              >
                {({ isActive }) => (
                  <>
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{name}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="bottomTab" 
                        className="absolute -bottom-1 w-1 h-1 bg-green-600 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )} */}
      {/* ================= MOBILE BOTTOM BAR ================= */}
{isAuthenticated && (
  <div className="md:hidden  fixed bottom-6 left-0 right-0 px-4 z-50 pointer-events-none">
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="max-w-md mx-auto pointer-events-auto bg-green-300/90 backdrop-blur-xl border border-zinc-200/50 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex justify-around items-center px-2 py-3"
    >
      {navItems.map(({ name, path, icon: Icon }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) => 
            `relative flex flex-col items-center gap-1.5 transition-all duration-300 w-full
            ${isActive ? "text-green-600" : "text-black hover:text-zinc-500"}`
          }
        >
          {({ isActive }) => (
            <>
              {/* Icon with scaling effect */}
              <motion.div
                animate={isActive ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2}  />
              </motion.div>

              {/* Label */}
              <span className={`text-[12px] font-bold uppercase tracking-tighter transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
                {name}
              </span>

              {/* Animated Underline/Dot */}
              {isActive && (
                <motion.div 
                  layoutId="bottomTabIndicator" 
                  className="absolute -bottom-1 w-5 h-1 bg-green-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </motion.div>
  </div>
)}
    </>
  );
};

/* Helper Component for Dropdown Items */
const DropdownItem = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full px-4 py-2.5 flex items-center gap-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-green-600 rounded-xl transition-colors"
  >
    {icon} {label}
  </button>
);

export default Navbar;