import React from 'react';
import { 
  User, MapPin,  Settings, ShoppingCart, 
  Package, Bookmark, Map, CreditCard, Headphones, 
  MessageSquare, Star, Info, LogOut, Share2, Users, Wallet,
  ChevronRight, ExternalLink
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Slice/authSlice';

const ProfileWebPage = () => {
     const dispatch = useDispatch();
      const handleLogout = () => {
         dispatch(logout());
        
       };
     
  const menuGroups = [
    {
      title: "Account Settings",
      items: [
        { icon: <User size={20} />, label: 'My Profile', desc: 'Manage your personal details' },
        { icon: <MapPin size={20} />, label: 'My Farm', desc: 'View farm locations and data' },
        // { icon: <Plant size={20} />, label: 'My Crop', desc: 'Monitor your harvest progress' },
        { icon: <Settings size={20} />, label: 'Settings', desc: 'App preferences and security' },
      ]
    },
    {
      title: "Orders & Activity",
      items: [
        { icon: <ShoppingCart size={20} />, label: 'My Cart', desc: 'Items ready for checkout' },
        { icon: <Package size={20} />, label: 'My Order', desc: 'Track your deliveries' },
        { icon: <Bookmark size={20} />, label: 'Saved Products', desc: 'Your wishlist' },
        { icon: <Map size={20} />, label: 'Saved Addresses', desc: 'Manage delivery locations' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
     

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Profile & Referrals */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="bg-[#4CAF50] h-24"></div>
              <div className="px-6 pb-6">
                <div className="relative -mt-12 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" 
                    className="w-24 h-24 rounded-2xl border-4 border-white object-cover shadow-md"
                    alt="Raj Rathod"
                  />
                </div>
                <h2 className="text-2xl font-bold text-zinc-800">Raj Rathod, <span className="text-zinc-500 font-medium text-lg">38</span></h2>
                <p className="text-zinc-500 text-sm mb-4 flex items-center gap-1">
                  <MapPin size={14} /> Akola, Maharashtra
                </p>
                
                <div className="flex gap-6 py-4 border-t border-zinc-100">
                  <div>
                    <div className="font-bold text-lg">10k</div>
                    <div className="text-[10px] text-zinc-400 uppercase font-bold">Followers</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">230</div>
                    <div className="text-[10px] text-zinc-400 uppercase font-bold">Following</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refer & Earn Card */}
            <div className="bg-green-50 rounded-3xl p-6 border border-green-100 relative overflow-hidden group">
              <div className="absolute top-[-10px] right-[-10px] text-green-200/50 group-hover:rotate-12 transition-transform">
                <Share2 size={120} />
              </div>
              <div className="relative z-10">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-xl">🎁</span>
                </div>
                <h3 className="text-[#2E7D32] font-bold text-xl mb-1">Refer & Earn</h3>
                <p className="text-sm text-green-700/70 mb-6">Invite friends and earn ₹150 for every signup.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 p-3 rounded-2xl">
                    <p className="text-[10px] text-green-800 uppercase font-bold mb-1">Friends</p>
                    <p className="text-xl font-bold text-green-900">10</p>
                  </div>
                  <div className="bg-white/60 p-3 rounded-2xl">
                    <p className="text-[10px] text-green-800 uppercase font-bold mb-1">Earnings</p>
                    <p className="text-xl font-bold text-green-900">₹1500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Navigation Grid */}
          <div className="lg:col-span-8 space-y-8">
            {menuGroups.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4 ml-2">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item, iIdx) => (
                    <button 
                      key={iIdx}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-200 hover:border-[#4CAF50] hover:shadow-md transition-all text-left group"
                    >
                      <div className="p-3 bg-zinc-50 rounded-xl text-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-zinc-800 flex items-center gap-2">
                          {item.label}
                        </div>
                        <p className="text-xs text-zinc-500">{item.desc}</p>
                      </div>
                      <ChevronRight size={16} className="text-zinc-300" />
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Support & Logout Section */}
            <div className="bg-zinc-900 rounded-3xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 p-4 rounded-2xl">
                  <Headphones className="text-[#4CAF50]" />
                </div>
                <div>
                  <h4 className="font-bold">Need assistance?</h4>
                  <p className="text-zinc-400 text-sm">Our support team is available 24/7</p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors font-medium">
                  Contact Support
                </button>
                <button className="flex-1 md:flex-none px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors font-medium flex items-center justify-center gap-2"
                onClick={handleLogout}>
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProfileWebPage;