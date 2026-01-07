// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ShoppingCart, Heart, Star, Leaf, Package } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       whileHover={{ y: -10 }}
//       className="relative bg-white rounded-[2.5rem] shadow-xl shadow-green-900/5 p-5 border border-slate-100 group max-w-[300px]"
//     >
//       {/* 🌱 Organic Badge */}
//       {product.organic && (
//         <div className="absolute top-6 left-6 z-10">
//           <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-green-200">
//             <Leaf size={10} fill="white" />
//             Organic
//           </div>
//         </div>
//       )}

//       {/* ❤️ Wishlist */}
//       <button
//         onClick={() => setIsLiked(!isLiked)}
//         className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-red-50 transition-colors"
//       >
//         <Heart
//           size={18}
//           className={
//             isLiked ? "fill-red-500 text-red-500" : "text-slate-400"
//           }
//         />
//       </button>

//       {/* 🖼 Image */}
//       <div
//         onClick={() => navigate(`/product/${product.id}`)}
//         className="cursor-pointer relative h-56 w-full flex items-center justify-center overflow-hidden rounded-[2rem] bg-slate-50 border-4 border-white shadow-inner"
//       >
//         <motion.img
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.5 }}
//           src={product.img}
//           alt={product.name}
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       </div>

//       {/* 📦 Content */}
//       <div className="mt-6 px-2">
//         {/* ⭐ Rating */}
//         <div className="flex items-center gap-1 mb-2">
//           <div className="flex text-amber-400">
//             {[...Array(4)].map((_, i) => (
//               <Star key={i} size={12} fill="currentColor" />
//             ))}
//             <Star size={12} className="text-slate-200" fill="currentColor" />
//           </div>
//           <span className="text-[10px] font-bold text-slate-400">
//             ({product.seller?.rating || 4.5}★)
//           </span>
//         </div>

//         {/* 🏷 Name */}
//         <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-green-700 transition-colors">
//           {product.name}
//         </h3>

//         {/* 💰 Price */}
//         <div className="mt-4 flex items-end justify-between">
//           <div>
//             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
//               Price per {product.unit}
//             </p>
//             <p className="text-2xl font-black text-green-700">
//               ₹{product.price}
//               <span className="text-sm font-medium text-slate-400">
//                 {" "}
//                 / {product.unit}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* 📊 Stock */}
//         <div className="mt-2 flex items-center gap-2 text-xs font-bold">
//           <Package size={14} className="text-slate-400" />
//           <span
//             className={
//               product.stock > 100 ? "text-green-600" : "text-red-500"
//             }
//           >
//             {product.stock} Available
//           </span>
//         </div>

//         {/* 🛒 Actions */}
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate(`/product/${product.id}`)}
//           className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-green-100 flex items-center justify-center gap-3 transition-all"
//         >
//           <ShoppingCart size={18} />
//           <span>View Details</span>
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Star, Leaf, MapPin, Gauge } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      className="relative group w-full max-w-[320px] bg-white/70 backdrop-blur-xl rounded-[3rem] p-4 border border-white shadow-[0_20px_50px_rgba(0,45,0,0.05)] hover:shadow-[0_40px_80px_rgba(22,101,52,0.15)] transition-all duration-500"
    >
      {/* 🟢 TOP ACTION BAR */}
      <div className="absolute top-6 inset-x-8 z-20 flex justify-between items-center">
        {product.organic && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-green-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-2xl text-[10px] font-bold flex items-center gap-1.5 shadow-lg shadow-green-200"
          >
            <Leaf size={12} fill="white" className="animate-pulse" />
            FRESH
          </motion.div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="p-2.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:scale-110 active:scale-90 transition-all text-slate-400"
        >
          <Heart size={18} className={isLiked ? "fill-red-500 text-red-500" : ""} />
        </button>
      </div>

      {/* 🖼 FLOATING IMAGE CONTAINER */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative h-64 w-full cursor-pointer mt-2"
      >
        {/* Decorative Background Shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />

        {/* The Image (Pops Out) */}
        <motion.img
          whileHover={{ scale: 1.1, rotate: -5 }}
          src={product.img}
          alt={product.name}
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_40px_rgba(22,101,52,0.2)] transition-all"
        />

        {/* Floating Location Tag */}
        <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-md px-3 py-1 rounded-xl flex items-center gap-1 border border-white/50 shadow-sm">
          <MapPin size={10} className="text-green-600" />
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Nashik, MH</span>
        </div>
      </div>

      {/* 📦 CONTENT SECTION */}
      <div className="mt-4 px-3 pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none">
            {product.name}
          </h3>
          <div className="flex items-center bg-amber-50 px-2 py-1 rounded-lg">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-black text-amber-700 ml-1">4.9</span>
          </div>
        </div>

        {/* Freshness Meter (Innovative Stock Indicator) */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              className="h-full bg-gradient-to-r from-orange-400 to-green-500"
            />
          </div>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Freshness</span>
        </div>

        {/* 💰 PRICING & CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Price</p>
            <p className="text-2xl font-black text-slate-900">
              ₹{product.price}
              <span className="text-sm font-medium text-slate-400">/{product.unit}</span>
            </p>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/product/${product.id}`)}
            className="h-14 w-14 bg-slate-900 hover:bg-green-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-slate-200 transition-colors"
          >
            <ShoppingCart size={22} />
          </motion.button> */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="h-14 w-14 bg-slate-900 hover:bg-green-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl transition-colors"
          >
            <ShoppingCart size={22} />
          </motion.button>

        </div>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200/20 blur-3xl -z-10 group-hover:bg-green-400/30 transition-colors" />
    </motion.div>
  );
};

export default ProductCard;