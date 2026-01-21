import { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowUp, ArrowDown, Search, Plus, MapPin, Filter, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PriceMonitoring() {
  const crops = useSelector((state) => state.prices.crops);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Professional Logic: Extracting latest entry per crop/location pair
  const latestCrops = Object.values(
    crops.reduce((acc, curr) => {
      const key = `${curr.name}-${curr.location}`;
      if (!acc[key]) acc[key] = curr;
      return acc;
    }, {})
  ).filter(crop => 
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    crop.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-[#f8fafc] min-h-screen">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Market Watch</h1>
          <p className="text-gray-500 font-medium">Real-time commodity price tracking</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
            <input 
              type="text"
              placeholder="Search crops or markets..."
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 outline-none w-full md:w-64 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button 
            onClick={() => navigate('/add-price')} 
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition-all active:scale-95"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Update</span>
          </button>
        </div>
      </div>

      {/* Market Grid */}
      {latestCrops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {latestCrops.map((crop) => {
            const isUp = crop.percentage >= 0;

            return (
              <div
                key={crop.id}
                onClick={() => navigate(`/price-history/${crop.name}/${crop.location}`)}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all cursor-pointer overflow-hidden"
              >
                {/* Decorative background element */}
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-[0.03] transition-transform group-hover:scale-150 ${isUp ? 'bg-green-600' : 'bg-red-600'}`} />

                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={crop.image}
                        alt={crop.name}
                        className="w-14 h-14 rounded-2xl object-cover shadow-inner bg-gray-50"
                      />
                      <div className={`absolute -bottom-1 -right-1 p-1 rounded-md shadow-sm ${isUp ? 'bg-green-500' : 'bg-red-500'}`}>
                         {isUp ? <ArrowUp className="w-3 h-3 text-white" /> : <ArrowDown className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors">{crop.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {crop.location}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-300 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-end justify-between border-t border-gray-50 pt-4 mt-4">
                  <div>
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">Latest Price</span>
                    <div className="flex items-baseline gap-1">
                      <p className="text-2xl font-black text-gray-900">₹{crop.price.toLocaleString()}</p>
                      <span className="text-sm font-bold text-gray-400">/{crop.unit}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-sm font-black px-3 py-1 rounded-lg ${isUp ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {isUp ? '+' : ''}{crop.percentage}%
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">Updated {crop.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">No results found</h3>
          <p className="text-gray-500 max-w-xs mx-auto">We couldn't find any crops matching "{searchTerm}". Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
}