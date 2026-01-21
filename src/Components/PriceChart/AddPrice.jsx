import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCropPrice } from "../Redux/Slice/priceSlice";
import { PlusCircle, Image as ImageIcon, MapPin, Tag, Leaf } from "lucide-react"; // Using Lucide icons for a pro look

export default function AddPriceForm() {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock delay for "Professional" feel/API simulation
    setTimeout(() => {
      dispatch(
        addCropPrice({
          ...form,
          price: Number(form.price),
          unit: "Q",
          date: new Date().toLocaleDateString(),
          id: Date.now(), // Professional practice to ensure unique keys
        })
      );

      setForm({ name: "", location: "", price: "", image: "" });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="bg-white/80 my-18 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 transition-all"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Leaf className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Post Market Price</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Crop Name */}
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Crop Name</label>
            <div className="flex items-center mt-1">
              <Tag className="absolute ml-3 w-4 h-4 text-gray-400" />
              <input
                name="name"
                placeholder="e.g. Organic Wheat"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Location */}
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Market Location</label>
            <div className="flex items-center mt-1">
              <MapPin className="absolute ml-3 w-4 h-4 text-gray-400" />
              <input
                name="location"
                placeholder="City, State"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Price */}
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Price (per Quintal)</label>
            <div className="flex items-center mt-1">
              <span className="absolute ml-3 text-gray-400 font-medium">$</span>
              <input
                type="number"
                name="price"
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Image Reference URL</label>
            <div className="flex items-center mt-1">
              <ImageIcon className="absolute ml-3 w-4 h-4 text-gray-400" />
              <input
                name="image"
                placeholder="https://..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                value={form.image}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Innovative Preview Feature */}
          {form.image && (
            <div className="md:col-span-2 flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <img 
                src={form.image} 
                alt="Preview" 
                className="w-12 h-12 rounded-lg object-cover bg-gray-200"
                onError={(e) => (e.target.style.display = 'none')} 
              />
              <span className="text-sm text-gray-500 italic truncate">Image preview loaded successfully</span>
            </div>
          )}

          <button
            disabled={isSubmitting}
            className={`md:col-span-2 mt-2 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all transform active:scale-[0.98] ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 hover:shadow-lg shadow-green-200"
            }`}
          >
            {isSubmitting ? (
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                <PlusCircle className="w-5 h-5" />
                List Crop Price
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}