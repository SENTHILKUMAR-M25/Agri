import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Leaf, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";
import { toggleSave } from "../Redux/Slice/savedSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🔹 REDUX WISHLIST STATE
  const savedItems = useSelector((state) => state.saved.items);
  const isLiked = savedItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleLike = () => {
    dispatch(toggleSave(product));
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
          onClick={handleLike}
          className="p-2.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:scale-110 active:scale-90 transition-all text-slate-400"
        >
          <Heart
            size={18}
            className={isLiked ? "fill-red-500 text-red-500" : ""}
          />
        </button>
      </div>

      {/* 🖼 FLOATING IMAGE CONTAINER */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative h-64 w-full cursor-pointer mt-2"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />

        <motion.img
          whileHover={{ scale: 1.1, rotate: -5 }}
          src={product.img}
          alt={product.name}
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_40px_rgba(22,101,52,0.2)] transition-all"
        />

        <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-md px-3 py-1 rounded-xl flex items-center gap-1 border border-white/50 shadow-sm">
          <MapPin size={10} className="text-green-600" />
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
            Nashik, MH
          </span>
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
            <span className="text-[10px] font-black text-amber-700 ml-1">
              4.9
            </span>
          </div>
        </div>

        {/* Freshness Meter */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              className="h-full bg-gradient-to-r from-orange-400 to-green-500"
            />
          </div>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            Freshness
          </span>
        </div>

        {/* 💰 PRICING & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
              Price
            </p>
            <p className="text-2xl font-black text-slate-900">
              ₹{product.price}
              <span className="text-sm font-medium text-slate-400">
                /{product.unit}
              </span>
            </p>
          </div>

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

      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200/20 blur-3xl -z-10 group-hover:bg-green-400/30 transition-colors" />
    </motion.div>
  );
};

export default ProductCard;
