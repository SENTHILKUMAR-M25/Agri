import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  Truck,
  Info
} from "lucide-react";
import { addToCart, removeFromCart } from "../Redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";

const ProfessionalCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const tax = subtotal * 0.05;
  const deliveryFee = subtotal > 1500 ? 0 : 99;
  const totalAmount = subtotal + tax + deliveryFee;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600"
            >
              <ArrowLeft size={14} /> Back to Marketplace
            </button>
            <h1 className="text-4xl font-black text-slate-900">
              Procurement <span className="text-emerald-600 italic">Basket</span>
            </h1>
          </div>
        </header>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] py-32 text-center border shadow-sm"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <ShoppingBag size={32} className="text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold">Your basket is empty</h2>
            <button
              onClick={() => navigate("/products")}
              className="mt-8 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase"
            >
              Browse Catalog
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2.5rem] border overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="px-8 py-5 text-xs text-slate-400">Details</th>
                      <th className="px-6 py-5 text-xs text-center text-slate-400">Qty</th>
                      <th className="px-8 py-5 text-xs text-right text-slate-400">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    <AnimatePresence>
                      {cartItems.map((item) => (
                        <motion.tr
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="border-b"
                        >
                          <td className="px-8 py-6">
                            <div className="flex gap-6">
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 object-contain bg-slate-50 rounded-xl"
                              />
                              <div>
                                <h3 className="font-bold text-lg">{item.name}</h3>

                                {/* ✅ FIXED SKU */}
                                <p className="text-xs text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded mt-1">
                                  SKU: AG-{String(item.id).padStart(5, "0")}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-6 text-center">
                            <div className="inline-flex items-center bg-slate-100 rounded-xl p-1">
                              <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="p-1"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-4 font-bold">{item.qty}</span>
                              <button
                                onClick={() => dispatch(addToCart(item))}
                                className="p-1"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </td>

                          <td className="px-8 py-6 text-right">
                            <p className="font-black text-lg">
                              ₹{(item.price * item.qty).toLocaleString()}
                            </p>
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                              className="text-xs text-rose-500 flex items-center gap-1 mt-1"
                            >
                              <Trash2 size={12} /> Remove
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {/* DELIVERY INFO */}
              <div className="mt-6 flex items-center gap-4 p-6 bg-emerald-50 rounded-2xl">
                <Truck className="text-emerald-600" />
                <p className="text-sm">
                  {subtotal > 1500
                    ? "Free delivery unlocked 🎉"
                    : `Add ₹${1500 - subtotal} more for free delivery`}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <aside className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] shadow-xl sticky top-8">
              <h2 className="font-black text-xl mb-6 flex items-center gap-2">
                Summary <Info size={16} />
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between font-black text-lg">
                  <span>Total</span>
                  <span className="text-emerald-600">
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/payment")}
                className="w-full py-5 bg-emerald-700 text-white rounded-2xl font-black uppercase tracking-widest"
              >
                Confirm & Pay
              </button>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck size={14} /> SSL Secure
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CreditCard size={14} /> EMI Available
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalCart;
