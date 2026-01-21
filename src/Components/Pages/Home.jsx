import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PlayCircle,
  CloudSun,
  IndianRupee,
  BarChart3,
  ArrowUpRight,
  UserCircle,
  Sprout,
  TrendingUp,
  Leaf,
} from "lucide-react";
import { useSelector } from "react-redux";
import SchemeCarousel from "../Schemes/SchemeCarousal";
import VideoCarousel from "../Videos/VideoCarousal";
import PriceMonitoring from "../PriceChart/Chart";

const Home = () => {
  // 🔹 Get user data from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Dynamic greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

  // Cards - can later be made dynamic from Redux if needed
  const cards = [
    {
      title: "Demo Video",
      desc: "Master modern farming with 4K expert tutorials.",
      icon: <PlayCircle size={28} />,
      path: "/demo",
      color: "from-emerald-500 to-teal-600",
      stats: "24 New Videos",
    },
    {
      title: "Climate Report",
      desc: "Hyper-local weather insights & rain alerts.",
      icon: <CloudSun size={28} />,
      path: "/climate",
      color: "from-blue-500 to-cyan-500",
      stats: "98% Accuracy",
    },
    {
      title: "Product Price",
      desc: "Real-time Mandi rates across 500+ markets.",
      icon: <IndianRupee size={28} />,
      path: "/prices",
      color: "from-orange-500 to-amber-600",
      stats: "Updated 2m ago",
    },
    {
      title: "Trade Report",
      desc: "Direct farm-to-buyer marketplace access.",
      icon: <BarChart3 size={28} />,
      path: "/trade",
      color: "from-violet-600 to-purple-500",
      stats: "1.2k Active Leads",
    },
    {
      title: "Plant Disease Diagnosis",
      desc: "AI-powered plant and leaf disease detection with treatment guidance.",
      icon: <Leaf size={28} />,
      path: "/diagnosis",
      color: "from-green-600 to-emerald-500",
      stats: "95% Detection Accuracy",
    }

  ];

  return (
    <div className="min-h-screen pt-12 bg-[#f0f4f2] text-slate-900 relative overflow-hidden font-sans">
      {/* --- Background Elements --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-200/40 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="relative z-10 px-6 py-8 max-w-7xl mx-auto">

        {/* --- Hero Section --- */}
        <header className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6"
          >
            <Sprout size={16} className="text-green-500" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                <UserCircle size={45} className="text-green-600 relative z-10" />
              </div>
              <div>
                <p className="text-[10px] text-green-600 font-black uppercase tracking-[0.2em] mb-0.5">
                  {greeting}
                </p>
                <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  {isAuthenticated && user?.name ? user.name : "Kisan Friend"}
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Agri <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Kisan</span> Hub
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Precision farming at your fingertips. Join the community of smart Indian farmers.
          </p>
        </header>

        {/* --- Interactive Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to={card.path} className="block h-full">
                <div className="relative h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(5,150,105,0.1)] transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-lg shadow-green-200 group-hover:rotate-12 transition-transform duration-500`}>
                      {card.icon}
                    </div>
                    <div className="bg-slate-50 p-2 rounded-full text-slate-300 group-hover:text-green-500 group-hover:bg-green-50 transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    {card.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{card.stats}</span>
                    <TrendingUp size={14} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
          <SchemeCarousel />
          <VideoCarousel />
          <PriceMonitoring />
        {/* --- Footer --- */}
        <footer className="mt-24 mb-10">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-3xl rounded-full" />
            <h2 className="text-white text-3xl font-bold mb-4 relative z-10">Ready to grow your yield?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">
              Join over 50,000+ farmers using our platform daily to improve their harvest.
            </p>
            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] relative z-10">
              Explore All Tools
            </button>
          </div>
        
        </footer>
      </div>
    </div>
  );
};

export default Home;
