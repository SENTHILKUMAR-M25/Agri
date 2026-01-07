import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { addToCart, removeFromCart } from "../Redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* 🛍 HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <ShoppingBag className="text-green-600" size={32} />
          <h1 className="text-4xl font-black text-slate-800">
            Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-slate-500 text-lg">
            Your cart is empty 🛒
          </p>
        ) : (
          <>
            {/* 🧾 CART ITEMS */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg"
                >
                  {/* IMAGE & INFO */}
                  <div className="flex items-center gap-6">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 object-contain rounded-2xl bg-white p-2"
                    />

                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        ₹{item.price}/{item.unit}
                      </p>
                    </div>
                  </div>

                  {/* QUANTITY CONTROL */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-red-100 text-red-600"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-bold text-lg">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-green-100 text-green-600"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* PRICE */}
                  <div className="text-xl font-black text-slate-900">
                    ₹{item.price * item.qty}
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* 💰 SUMMARY */}
            <div className="mt-10 flex justify-between items-center bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-black text-slate-800">
                Total: ₹{totalAmount}
              </h2>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-lg font-bold shadow-lg"
                onClick={() => navigate("/payment")}
              >
                Checkout
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSection;
