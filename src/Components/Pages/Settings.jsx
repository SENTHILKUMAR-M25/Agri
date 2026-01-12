import React from 'react';
import { 
  User, MapPin, Settings, ShoppingCart, 
  Package, Bookmark, Map, CreditCard, Headphones, 
  LogOut, Share2, ChevronRight, Bell, ShieldCheck,
  TrendingUp, Calendar,
  ExternalLink
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Slice/authSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfileWebPage = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };

  const menuGroups = [
    {
      title: "Management Console",
      items: [
        { icon: <User size={18} />, path:'/profile', label: 'Identity & Access', desc: 'Secure your personal credentials' },
        { icon: <MapPin size={18} />, path:'/farm', label: 'Farm Assets', desc: 'Geospatial data and field analysis' },
        { icon: <ShieldCheck size={18} />, path:"", label: 'Security', desc: 'Privacy controls and 2FA' },
        { icon: <Settings size={18} />, path:"", label: 'Preferences', desc: 'Global app and notification settings' },
      ]
    },
    {
      title: "Commercial Activity",
      items: [
        { icon: <ShoppingCart size={18} />, path:"/mycart", label: 'Active Cart', desc: 'Items pending procurement' },
        { icon: <Package size={18} />, path:"/myorder", label: 'Fulfillment', desc: 'Shipment tracking and history' },
        { icon: <Bookmark size={18} />, path:"/savedpicture", label: 'Watchlist', desc: 'Saved equipment and supplies' },
        { icon: <CreditCard size={18} />, path:'/address', label: 'Billing & Delivery', desc: 'Managed payment & addresses' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      
      {/* Header Spacer for Fixed Navbars */}
      <div className="h-20" />

      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Identity & Impact */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Professional Profile Header */}
            <section className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200/60 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-emerald-600 to-green-800 relative">
                <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white backdrop-blur-md transition-all">
                  <Settings size={18} />
                </button>
              </div>
              <div className="px-8 pb-8 relative">
                <div className="relative -mt-16 mb-6 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" 
                    className="w-32 h-32 rounded-3xl border-[6px] border-white object-cover shadow-xl shadow-slate-200"
                    alt="Raj Rathod"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full"></div>
                </div>
                
                <h2 className="text-3xl font-black tracking-tight text-slate-800">Raj Rathod</h2>
                <p className="text-slate-500 font-medium flex items-center gap-1.5 mt-1">
                  <MapPin size={16} className="text-emerald-500" /> Akola, MS
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Total Yield</p>
                    <p className="text-xl font-bold text-slate-800">128 Tons</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Network</p>
                    <p className="text-xl font-bold text-slate-800">1.2k Farmers</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Refer & Earn - Modernized */}
            <section className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
              <TrendingUp className="absolute -right-4 -bottom-4 text-white/5 w-40 h-40" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-500 rounded-2xl">
                    <Share2 size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full">Partner Program</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Scale the Network</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Earn enterprise credits for every successful farmer onboarded to the platform.
                </p>
                <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                  Generate Invite Link <ExternalLink size={14} />
                </button>
              </div>
            </section>
          </div>

          {/* RIGHT: Functional Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Command Center</h1>
                <div className="flex gap-2">
                  <div className="p-2 bg-white rounded-xl border border-slate-200 text-slate-500"><Bell size={18} /></div>
                  <div className="p-2 bg-white rounded-xl border border-slate-200 text-slate-500"><Calendar size={18} /></div>
                </div>
            </div>

            <div className="space-y-12">
              {menuGroups.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-slate-800 font-bold text-lg mb-6 flex items-center gap-2">
                    <div className="w-1 h-5 bg-emerald-500 rounded-full" />
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {group.items.map((item, iIdx) => (
                      <Link 
                        to={item.path} 
                        key={iIdx}
                        className="group flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300"
                      >
                        <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 text-lg group-hover:text-emerald-700 transition-colors">
                            {item.label}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Support & Logout Footer */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="bg-slate-50 p-4 rounded-2xl text-emerald-600 border border-slate-100">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Enterprise Support</h4>
                    <p className="text-slate-400 text-xs font-medium">Priority 24/7 technical assistance for farmers.</p>
                  </div>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest">
                    Contact Rep
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex-1 md:flex-none px-8 py-4 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <LogOut size={16} /> LOGOUT
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProfileWebPage;