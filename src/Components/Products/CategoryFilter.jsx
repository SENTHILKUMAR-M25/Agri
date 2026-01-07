import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All" },
  { id: "fruits", label: "Fruits" },
  { id: "vegetables", label: "Vegetables" },
  { id: "seeds", label: "Seeds" },
  { id: "medicines", label: "Medicines" },
  { id: "leafs", label: "Leafs" }
];

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-10 justify-center">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-6 py-2 rounded-full text-sm cursor-pointer font-bold transition-all
            ${
              activeCategory === cat.id
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white border hover:bg-green-100"
            }`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
