import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Leaf,
  Star,
  MapPin,
  Phone,
  User,
  Truck
} from "lucide-react";
import agriProducts from "./ProductsData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = agriProducts.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 🔹 Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-6 shadow-xl"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[350px] object-contain"
          />
        </motion.div>

        {/* 🔹 Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="text-green-600" size={18} />
            <span className="text-xs font-bold uppercase text-green-600">
              Organic Certified
            </span>
          </div>

          <h1 className="text-3xl font-black text-slate-800">
            {product.name}
          </h1>

          <div className="flex items-center gap-1 mt-2">
            {[1,2,3,4].map(i => (
              <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
            ))}
            <Star size={14} className="text-slate-200" />
            <span className="text-xs text-slate-400 ml-2">(120 Reviews)</span>
          </div>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Freshly harvested <b>{product.name}</b> directly from trusted farmers.
            Quality tested and suitable for bulk & retail purchase.
          </p>

          <div className="mt-6">
            <p className="text-sm text-slate-400 font-bold uppercase">
              Price per Quintal
            </p>
            <p className="text-3xl font-black text-green-700">
              ₹{product.price}
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <span className="font-bold text-slate-700">Quantity:</span>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 border rounded-xl px-3 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button className="flex-1 border-2 border-green-600 text-green-700 py-4 rounded-2xl font-black">
              Buy Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* 🔹 Seller Details */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-black text-slate-800 mb-6">
          Seller Information
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-slate-700">
          <div className="flex items-center gap-3">
            <User className="text-green-600" />
            <div>
              <p className="font-bold">Farmer Name</p>
              <p className="text-sm text-slate-500">R. Senthil Kumar</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-green-600" />
            <div>
              <p className="font-bold">Location</p>
              <p className="text-sm text-slate-500">Erode, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-green-600" />
            <div>
              <p className="font-bold">Contact</p>
              <p className="text-sm text-slate-500">+91 9XXXXXXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="text-green-600" />
            <div>
              <p className="font-bold">Delivery</p>
              <p className="text-sm text-slate-500">Within 2–4 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
