import React from "react";
import agriProducts from "./ProductsData";
import ProductCard from "./ProductCard";

const categories = [
  { key: "fruits", title: "🍎 Fruits" },
  { key: "vegetables", title: "🥕 Vegetables" },
  { key: "seeds", title: "🌱 Seeds" },
  { key: "medicines", title: "💊 Medicines" },
  { key: "leafs", title: "🍃 Leaf Items" },
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      {categories.map((cat) => {
        const filteredProducts = agriProducts.filter(
          (p) => p.category === cat.key
        );

        if (filteredProducts.length === 0) return null;

        return (
          <section key={cat.key} className="mb-16">
            <h2 className="text-2xl font-black text-green-700 mb-6">
              {cat.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductPage;
