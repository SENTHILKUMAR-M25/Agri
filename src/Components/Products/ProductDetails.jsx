import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Leaf,
  Star,
  MapPin,
  Truck,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowLeft,
  Share2,
  Heart
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

// Redux slice
import { addToCart } from "../Redux/Slice/cartSlice";
import { toggleSave } from "../Redux/Slice/savedSlice";

// Product data
import agriProducts from "./ProductsData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get product
  const product = agriProducts.find((p) => p.id === Number(id));

  // Get saved products from Redux
  const savedProducts = useSelector((state) => state.saved.items);

  // Check if this product is saved
  const isSaved = savedProducts.some((p) => p.id === product?.id);

  // Local state
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [liked, setLiked] = useState(isSaved);

  useEffect(() => {
    setLiked(isSaved);
  }, [isSaved]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfdfa]">
        <h2 className="text-2xl font-bold text-slate-800">Product Not Found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 text-green-600 font-bold"
        >
          Return to Marketplace
        </button>
      </div>
    );
  }

  // Add to cart
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success(`${qty} ${product.unit} added to cart! 🌱`, {
      style: { borderRadius: "12px", background: "#059669", color: "#fff" },
    });
  };

  // Like / Save toggle
  const handleToggleSave = () => {
    dispatch(toggleSave(product));
    setLiked(!liked);

    toast.success(
      !liked
        ? "Added to Liked Resources ❤️"
        : "Removed from Liked Resources 💔",
      {
        style: { borderRadius: "12px", background: "#334155", color: "#fff" },
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] pb-20">
      <Toaster position="bottom-center" />

      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-18 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-green-600 font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Seeds
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-blue-500 transition-all shadow-sm"
          >
            <Share2 size={18} />
          </button>

          <button
            onClick={handleToggleSave}
            className={`p-3 bg-white border border-slate-100 rounded-2xl transition-all shadow-sm ${
              liked ? "text-red-500" : "text-slate-400"
            }`}
          >
            <Heart size={18} fill={liked ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-12">
        {/* Left: Image */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[400px] object-contain transition-transform group-hover:scale-110 duration-700"
            />
          </motion.div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-7">
          <h1 className="text-5xl font-black text-slate-900 mb-4">
            {product.name}
          </h1>

          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-black">₹{product.price}/{product.unit}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-12 h-12 font-bold text-slate-400 hover:text-green-600"
                >
                  −
                </button>
                <span className="w-8 text-center font-black">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-12 h-12 font-bold text-slate-400 hover:text-green-600"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white h-14 rounded-2xl font-black shadow-lg flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
