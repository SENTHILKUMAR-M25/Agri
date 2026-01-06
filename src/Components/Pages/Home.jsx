import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // npm install framer-motion
import {
  PlayCircle,
  CloudSun,
  IndianRupee,
  BarChart3,
  ArrowUpRight,
  UserCircle,
} from "lucide-react";

const Home = () => {
  const cards = [
    {
      title: "Demo Video",
      desc: "Watch modern farming methods & tutorials",
      icon: <PlayCircle size={32} />,
      path: "/demo",
      color: "from-green-600 to-emerald-500",
      shadow: "shadow-green-200",
    },
    {
      title: "Climate Report",
      desc: "Live local weather & rainfall predictions",
      icon: <CloudSun size={32} />,
      path: "/climate",
      color: "from-sky-500 to-blue-400",
      shadow: "shadow-sky-200",
    },
    {
      title: "Product Price",
      desc: "Daily crop market rates from Mandi",
      icon: <IndianRupee size={32} />,
      path: "/prices",
      color: "from-amber-500 to-orange-400",
      shadow: "shadow-amber-200",
    },
    {
      title: "Trade Report",
      desc: "Connect to buy & sell agricultural goods",
      icon: <BarChart3 size={32} />,
      path: "/trade",
      color: "from-purple-600 to-indigo-500",
      shadow: "shadow-purple-200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] relative  relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="relative top-15">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#059669 1px, transparent 1px)`, size: '30px 30px' }} />

      <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto">
        
        {/* Top Bar / Profile */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full text-green-700">
              <UserCircle size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Welcome Back</p>
              <h3 className="text-lg font-bold text-gray-800">Namaste, Kisan Bhai</h3>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-400">Monday, Jan 5</p>
            <p className="text-xs text-green-600 font-bold">Live Market Open</p>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-green-900 tracking-tight"
          >
            Agri Kisan <span className="text-green-600">Hub</span> 🌱
          </motion.h1>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Empowering Indian farmers with real-time data and modern agricultural technology.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link
                to={card.path}
                className={`group relative flex flex-col h-full bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 ${card.shadow}`}
              >
                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight size={20} />
                </div>

                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-3xl flex items-center justify-center text-white bg-gradient-to-br ${card.color} shadow-lg mb-6 transform group-hover:rotate-6 transition-transform`}
                >
                  {card.icon}
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>

                {/* Interactive Footer */}
                <div className="mt-auto flex items-center gap-2 text-xs font-black text-green-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Open Tool <div className="h-1 w-4 bg-green-600 rounded-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating Action / Footer Quote */}
        <footer className="mt-20 text-center py-10 border-t border-gray-100">
          <p className="text-gray-400 italic">"Prosperity through smart farming."</p>
        </footer>
      </div>
      </div>
    </div>
  );
};

export default Home;