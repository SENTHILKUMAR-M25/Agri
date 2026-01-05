import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Reviews", path: "/reviews" },
  { name: "Download", path: "/download" },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: 1,
        y: 0,
        top: scrolled ? "2.5rem" : "0.5rem",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed left-0 w-full z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold text-green-600 text-lg">
            Agri <span className="text-black">Kisan</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative transition hover:text-green-600 ${
                    isActive ? "text-green-600" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-600 rounded"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg w-[90%] max-w-md p-6 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-4 rounded-lg transition ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "hover:bg-green-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
