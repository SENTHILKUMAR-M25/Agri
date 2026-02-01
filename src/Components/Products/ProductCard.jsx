
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingCart, Heart, Star, Leaf, MapPin, Plus, Minus } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../Redux/Slice/cartSlice";
// import { toggleSave } from "../Redux/Slice/savedSlice";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isHovered, setIsHovered] = useState(false);

//   const savedItems = useSelector((state) => state.saved.items);
//   const isLiked = savedItems.some((item) => item.id === product.id);

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     dispatch(addToCart(product));
//   };

//   const handleLike = (e) => {
//     e.stopPropagation();
//     dispatch(toggleSave(product));
//     // Implementation of your instruction: details stored in saved knowledge when liked
//   };

//   return (
//     <motion.div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       whileHover={{ y: -8 }}
//       className="relative group w-full max-w-[340px] bg-white rounded-[2.5rem] p-3 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out overflow-hidden"
//     >
//       {/* 🟢 AMBIENT BACKGROUND GLOW */}
//       <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//       {/* 🖼 VISUAL ASSET SECTION */}
//       <div className="relative h-72 w-full overflow-hidden rounded-[2rem] bg-slate-50/50 flex items-center justify-center">
//         {/* Top Badges */}
//         <div className="absolute top-4 inset-x-4 z-20 flex justify-between items-start">
//           <div className="flex flex-col gap-2">
//             {product.organic && (
//               <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-100 shadow-sm flex items-center gap-1.5">
//                 <Leaf size={10} className="text-emerald-500 fill-emerald-500" />
//                 <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Organic</span>
//               </div>
//             )}
//             <div className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest w-fit shadow-lg shadow-emerald-200/50">
//               In Stock
//             </div>
//           </div>

//           <motion.button
//             whileTap={{ scale: 0.8 }}
//             onClick={handleLike}
//             className={`p-3 rounded-2xl transition-all shadow-sm ${
//               isLiked ? "bg-red-50 text-red-500" : "bg-white text-slate-300"
//             }`}
//           >
//             <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
//           </motion.button>
//         </div>

//         {/* Product Image with Parallax */}
//         <motion.img
//           animate={isHovered ? { scale: 1.1, y: -10, rotate: 2 } : { scale: 1, y: 0, rotate: 0 }}
//           transition={{ type: "spring", stiffness: 100, damping: 15 }}
//           src={product.img}
//           alt={product.name}
//           onClick={() => navigate(`/product/${product.id}`)}
//           className="w-4/5 h-4/5 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] cursor-pointer z-10"
//         />

//         {/* Origin Label */}
//         <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-slate-900/5 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
//           <MapPin size={10} className="text-slate-600" />
//           <span className="text-[9px] font-bold text-slate-600 tracking-tight uppercase">Direct from Nashik</span>
//         </div>
//       </div>

//       {/* 📦 INFORMATION SUITE */}
//       <div className="mt-6 px-4 pb-4">
//         <div className="flex justify-between items-end mb-4">
//           <div>
//             <div className="flex items-center gap-2 mb-1">
//               <div className="flex text-amber-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={10} fill="currentColor" />
//                 ))}
//               </div>
//               <span className="text-[10px] font-bold text-slate-400">(2.4k)</span>
//             </div>
//             <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
//               {product.name}
//             </h3>
//           </div>
//           <div className="text-right">
//             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Per {product.unit}</span>
//             <span className="text-2xl font-black text-emerald-600">₹{product.price}</span>
//           </div>
//         </div>

//         {/* Dynamic Freshness Indicator */}
//         <div className="p-3 bg-slate-50 rounded-[1.5rem] flex items-center justify-between mb-6 border border-slate-100/50">
//           <div className="flex items-center gap-2">
//              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
//              <span className="text-[10px] font-black text-slate-500 uppercase">Super Fresh</span>
//           </div>
//           <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100">98% Quality Score</span>
//         </div>

//         {/* 💰 ACTION CTA: Quantitative Button */}
//         <div className="flex gap-2">
//             <motion.button
//                 onClick={() => navigate(`/product/${product.id}`)}
//                 className="flex-1 h-14 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-[1.2rem] transition-colors text-sm"
//             >
//                 Details
//             </motion.button>
            
//             <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleAddToCart}
//                 className="h-14 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[1.2rem] flex items-center justify-center gap-3 shadow-lg shadow-emerald-200 transition-all group/btn"
//             >
//                 <ShoppingCart size={20} />
//                 <span className="font-bold text-sm">Add</span>
//             </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Star, Leaf, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";
import { toggleSave } from "../Redux/Slice/savedSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const savedItems = useSelector((state) => state.saved.items);
  const isLiked = savedItems.some((item) => item.id === product.id);

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(toggleSave(product));
  };

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[320px] group"
    >
      {/* 🔮 THE AURA: Dynamic background glow that follows product color */}
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-transparent blur-3xl rounded-[3rem] transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

      <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_32px_64px_rgba(16,185,129,0.1)]">
        
        {/* 🏷 TOP UTILITY BAR */}
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="flex gap-2">
            {product.organic && (
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                <Leaf size={14} fill="currentColor" />
              </div>
            )}
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
              <Star size={10} className="fill-amber-400 text-amber-400" />
              <span className="text-[10px] font-bold text-amber-700">4.9</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={`h-10 w-10 rounded-2xl flex items-center justify-center transition-all ${
              isLiked ? "bg-red-500 text-white shadow-lg shadow-red-200" : "bg-white text-slate-400 shadow-sm"
            }`}
          >
            <Heart size={18} fill={isLiked ? "white" : "none"} />
          </motion.button>
        </div>

        {/* 📷 VIRTUAL STAGING: Product Image */}
        <div className="relative h-56 w-full flex items-center justify-center mb-4">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute inset-0 bg-emerald-400/5 rounded-full blur-2xl"
              />
            )}
          </AnimatePresence>
          
          <motion.img
            animate={isHovered ? { y: -15, rotate: -5, scale: 1.1 } : { y: 0, rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            src={product.img}
            alt={product.name}
            className="h-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.15)] z-10 cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          />
        </div>

        {/* ✍️ TEXT CONTENT */}
        <div className="px-2">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-1">Premium Harvest</p>
              <h3 className="text-xl font-extrabold text-slate-800 leading-tight">{product.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-slate-900 leading-none">₹{product.price}</span>
              <p className="text-[10px] font-medium text-slate-400">/{product.unit}</p>
            </div>
          </div>

          {/* ⚡️ SMART SPEC: Quick Info Bar */}
          <div className="flex gap-4 py-3 my-4 border-y border-slate-50">
            <div className="flex items-center gap-1.5">
              <Zap size={12} className="text-amber-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase">Instant Delivery</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-100" />
            <div className="text-[10px] font-bold text-slate-500 uppercase">98% Fresh</div>
          </div>

          {/* 🛒 INTERACTIVE FOOTER */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ x: 3 }}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex items-center justify-center bg-slate-100 h-14 w-14 rounded-2xl text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.stopPropagation(); dispatch(addToCart(product)); }}
              className="flex-1 bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-emerald-200"
            >
              <ShoppingCart size={18} />
              <span className="font-bold text-sm tracking-wide">Add to Basket</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;