import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Leaf, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative bg-white rounded-[2.5rem] shadow-xl shadow-green-900/5 p-5 border border-slate-100 group max-w-[300px]"
    >
      {/* 🌱 Organic Badge */}
      {product.organic && (
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-green-200">
            <Leaf size={10} fill="white" />
            Organic
          </div>
        </div>
      )}

      {/* ❤️ Wishlist */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-red-50 transition-colors"
      >
        <Heart
          size={18}
          className={
            isLiked ? "fill-red-500 text-red-500" : "text-slate-400"
          }
        />
      </button>

      {/* 🖼 Image */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer relative h-56 w-full flex items-center justify-center overflow-hidden rounded-[2rem] bg-slate-50 border-4 border-white shadow-inner"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* 📦 Content */}
      <div className="mt-6 px-2">
        {/* ⭐ Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-amber-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
            <Star size={12} className="text-slate-200" fill="currentColor" />
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            ({product.seller?.rating || 4.5}★)
          </span>
        </div>

        {/* 🏷 Name */}
        <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>

        {/* 💰 Price */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Price per {product.unit}
            </p>
            <p className="text-2xl font-black text-green-700">
              ₹{product.price}
              <span className="text-sm font-medium text-slate-400">
                {" "}
                / {product.unit}
              </span>
            </p>
          </div>
        </div>

        {/* 📊 Stock */}
        <div className="mt-2 flex items-center gap-2 text-xs font-bold">
          <Package size={14} className="text-slate-400" />
          <span
            className={
              product.stock > 100 ? "text-green-600" : "text-red-500"
            }
          >
            {product.stock} Available
          </span>
        </div>

        {/* 🛒 Actions */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/product/${product.id}`)}
          className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-green-100 flex items-center justify-center gap-3 transition-all"
        >
          <ShoppingCart size={18} />
          <span>View Details</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
