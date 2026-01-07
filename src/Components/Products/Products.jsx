import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import agriProducts from "./ProductsData";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? agriProducts
      : agriProducts.filter(
          (product) => product.category === activeCategory
        );

  return (
    <div className="px-6 py-18 relative top-10">
      {/* FILTER */}
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* PRODUCTS GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <p className="text-center mt-20 text-slate-400 font-semibold">
          No products found
        </p>
      )}
    </div>
  );
};

export default Products;
