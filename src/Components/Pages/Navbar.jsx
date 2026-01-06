// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, LogOut } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../Redux/Slice/authSlice";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "Products", path: "/products" },
//   { name: "Feed", path: "/reviews" },
//   { name: "My Corp", path: "/download" },
//   { name: "Mandi", path: "/mandi" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // ✅ FIXED HERE
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
//       initial={{ opacity: 0, y: -40 }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         top: scrolled ? "2.5rem" : "0.5rem",
//       }}
//       transition={{ duration: 0.35 }}
//       className="fixed left-0 w-full z-50 flex justify-center px-4"
//     >
//       <div className="w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <h1 className="font-bold text-green-600 text-lg">
//             Agri <span className="text-black">Kisan</span>
//           </h1>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `transition ${
//                     isActive ? "text-green-600" : "hover:text-green-600"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Right Actions */}
//         <div className="flex items-center gap-3">
//           {/* LOGIN */}
//           {!isAuthenticated && (
//             <button
//               onClick={() => navigate("/login")}
//               className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full text-sm hover:bg-green-700"
//             >
//               Login
//             </button>
//           )}

//           {/* AVATAR */}
//           {isAuthenticated && (
//             <div className="relative group hidden md:block">
//               <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold cursor-pointer">
//                 {firstLetter}
//               </div>

//               <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-gray-100 rounded-xl"
//                 >
//                   <LogOut size={16} /> Logout
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-green-700"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute top-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg w-[90%] max-w-md p-6 md:hidden"
//           >
//             <ul className="flex flex-col gap-4 text-gray-700 font-medium">
//               {navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) =>
//                     `py-2 px-4 rounded-lg ${
//                       isActive
//                         ? "bg-green-100 text-green-700"
//                         : "hover:bg-green-50"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </ul>

//             <div className="mt-4">
//               {!isAuthenticated ? (
//                 <button
//                   onClick={() => {
//                     navigate("/login");
//                     setOpen(false);
//                   }}
//                   className="w-full bg-green-600 text-white py-2 rounded-lg"
//                 >
//                   Login
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-600 py-2 rounded-lg"
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
import { Menu, X, LogOut, User, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slice/authSlice";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Feed", path: "/reviews" },
  { name: "My Corp", path: "/download" },
  { name: "Mandi", path: "/mandi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const firstLetter = user?.name?.charAt(0)?.toUpperCase();

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        top: scrolled ? "1rem" : "0rem",
      }}
      className="fixed left-0 w-full z-50 flex justify-center px-4 transition-all duration-300"
    >
      <div className={`
        w-full max-w-7xl flex items-center justify-between px-6 py-3 transition-all duration-300
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 rounded-2xl md:rounded-full"
          : "bg-transparent py-5"
        }
      `}>

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-1.5 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <h1 className="font-extrabold text-xl tracking-tight">
            <span className="text-green-600">Agri</span>
            <span className={scrolled ? "text-zinc-800" : "text-zinc-900"}>Kisan</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${isActive ? "text-white" : "text-zinc-600 hover:text-green-600"}
              `}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-green-600 rounded-full shadow-md"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-green-600 hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Get Started
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1 pr-3 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow-inner">
                  {firstLetter}
                </div>
                <ChevronDown size={14} className={`text-zinc-500 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-zinc-100 p-2 overflow-hidden"
                  >
                    {/* User Header */}
                    <div className="px-4 py-3 border-b border-zinc-50 mb-1">
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Welcome</p>
                      <p className="text-sm font-bold text-zinc-800 truncate">{user?.name || "User"}</p>
                    </div>

                    {/* Profile Link */}
                    <button
                      className="w-full px-4 py-2 flex items-center gap-3 text-sm text-zinc-600 hover:bg-green-50 hover:text-green-700 rounded-xl transition-all active:scale-95"
                      onClick={() => {
                        navigate('/settings'); // Use the 'navigate' variable defined at the top of your component
                        setProfileOpen(false); // Close the menu after clicking
                      }}
                    >
                      <User size={16} />
                      <span>My Profile</span>
                    </button>

                    {/* Logout Button */}
                    <button
                      onClick={() => {
                        handleLogout();
                        setProfileOpen(false);
                      }}
                      className="w-full px-4 py-2 mt-1 flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-95"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 bg-zinc-100 rounded-xl text-green-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-zinc-100 p-4 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all
                    ${isActive ? "bg-green-600 text-white" : "bg-zinc-50 text-zinc-600"}
                  `}
                >
                  {item.name}
                  <ChevronDown size={16} className="-rotate-90 opacity-50" />
                </NavLink>
              ))}
              {!isAuthenticated ? (
                <button
                  onClick={() => { navigate("/login"); setOpen(false); }}
                  className="w-full mt-2 bg-zinc-900 text-white py-4 rounded-2xl font-bold"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-red-50 text-red-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                >
                  <LogOut size={18} /> Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;