import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowUp, ArrowDown, ChevronLeft, TrendingUp, Calendar, Hash, Image as ImageIcon } from "lucide-react";

export default function PriceHistory() {
  const { name, location } = useParams();
  const navigate = useNavigate();
  const crops = useSelector((state) => state.prices.crops);

  // Filter and sort history (newest first)
  const history = crops
    .filter((c) => c.name === name && c.location === location)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the product image from the latest entry
  const productImage = history[0]?.image;

  // Calculate quick stats
  const prices = history.map((h) => h.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const avgPrice = (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(0);

  if (history.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 font-medium">No history found for this selection.</p>
        <button onClick={() => navigate(-1)} className="text-green-600 font-bold mt-4 hover:underline">
          Go Back to Market
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-18">
      {/* Header Section with Navigation */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-90"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-none">{name}</h1>
          <p className="text-gray-500 flex items-center gap-1 text-sm mt-1">
            <TrendingUp className="w-3 h-3" /> Historical trends for {location}
          </p>
        </div>
      </div>

      {/* Innovative Product Hero Image */}
      <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden mb-8 shadow-lg border border-gray-100">
        {productImage ? (
          <img 
            src={productImage} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="w-12 h-12 mb-2 opacity-20" />
            <p className="text-xs font-semibold uppercase tracking-widest">No Image Available</p>
          </div>
        )}
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
          <span className="text-white text-xs font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            Official Market Data
          </span>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8">
        <StatCard label="Highest" value={`₹${maxPrice}`} color="text-green-700" bg="bg-green-50" />
        <StatCard label="Average" value={`₹${avgPrice}`} color="text-blue-700" bg="bg-blue-50" />
        <StatCard label="Lowest" value={`₹${minPrice}`} color="text-red-700" bg="bg-red-50" />
      </div>

      {/* History List */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 tracking-tight">
            <Calendar className="w-4 h-4 text-green-600" /> Price Logs
          </h3>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
            {history.length} Updates
          </span>
        </div>

        <div className="divide-y divide-gray-50">
          {history.map((item, index) => {
            const isUp = item.percentage >= 0;
            const isFirst = index === history.length - 1;

            return (
              <div
                key={item.id || index}
                className="flex justify-between items-center p-5 hover:bg-green-50/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:shadow-sm transition-all">
                    <Hash className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-800 tracking-tight">
                      ₹{item.price.toLocaleString()} <span className="text-xs font-medium text-gray-400 uppercase tracking-tighter">/{item.unit}</span>
                    </p>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  {!isFirst ? (
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-black tracking-tight ${
                      isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {isUp ? <ArrowUp className="w-3 h-3 stroke-[3px]" /> : <ArrowDown className="w-3 h-3 stroke-[3px]" />}
                      {Math.abs(item.percentage)}%
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Base Price</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, bg }) {
  return (
    <div className={`${bg} p-4 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all cursor-default`}>
      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-1">{label}</p>
      <p className={`text-xl font-black ${color}`}>{value}</p>
    </div>
  );
}