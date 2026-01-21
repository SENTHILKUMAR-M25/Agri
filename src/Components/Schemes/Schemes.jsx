import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import SchemeCard from "./SchemesCard";
import { Link } from "react-router-dom";
import { Plus, Search, Filter } from "lucide-react"; // Optional: Use lucide-react for icons

export default function Schemes() {
  const schemes = useSelector((state) => state.schemes.list);
  const [searchTerm, setSearchTerm] = useState("");

  // Innovation: Real-time filtering for better UX
  const filteredSchemes = useMemo(() => {
    return schemes?.filter((s) =>
      s.schemeName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [schemes, searchTerm]);

  if (!schemes || schemes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-green-700 font-medium">Fetching latest schemes...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-600">
              Agriculture Hub
            </h1>
            <p className="text-gray-600 mt-1">Discover and manage government initiatives</p>
          </div>
          
          <Link
            to="/add-scheme"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-0.5 transition-all"
          >
            <Plus size={20} />
            <span>New Scheme</span>
          </Link>
        </div>

        {/* Search & Filter Bar */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400 group-focus-within:text-green-600 transition-colors" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search schemes by name..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Dynamic Grid */}
        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchemes.map((item, index) => (
              <div 
                key={item.schemeId} 
                className="transform transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SchemeCard scheme={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500">No schemes found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}