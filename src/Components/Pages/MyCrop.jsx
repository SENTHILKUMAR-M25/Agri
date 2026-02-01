import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaWater, FaCamera, FaPen } from "react-icons/fa";

// Mock Data for Crops
const crops = [
  {
    name: "Tomato",
    image: "https://cdn-icons-png.flaticon.com/512/135/135759.png",
    stage: "Flowering",
    progress: 70,
    alerts: ["Watering", "Pest Warning"],
    plantingDate: "2026-01-01",
    harvestDate: "2026-04-01",
    stages: [
      { name: "Sowing", completed: true },
      { name: "Germination", completed: true },
      { name: "Vegetative", completed: true },
      { name: "Flowering", completed: false },
      { name: "Harvest", completed: false },
    ],
    yield: 120,
    marketPrice: "₹30/kg",
    fertilizer: "Nitrogen-based",
    irrigation: "Daily",
    activities: [
      { date: "2026-01-10", action: "Fertilized", photo: "https://cdn-icons-png.flaticon.com/512/414/414927.png" },
      { date: "2026-01-15", action: "Watered", photo: "" },
    ],
  },
  {
    name: "Wheat",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    stage: "Vegetative",
    progress: 50,
    alerts: ["Irrigation"],
    plantingDate: "2026-01-05",
    harvestDate: "2026-05-01",
    stages: [
      { name: "Sowing", completed: true },
      { name: "Germination", completed: true },
      { name: "Vegetative", completed: false },
      { name: "Flowering", completed: false },
      { name: "Harvest", completed: false },
    ],
    yield: 200,
    marketPrice: "₹25/kg",
    fertilizer: "Phosphorus-based",
    irrigation: "Every 2 days",
    activities: [
      { date: "2026-01-12", action: "Planted Seeds", photo: "" },
      { date: "2026-01-20", action: "Irrigation Applied", photo: "" },
    ],
  },
];

// --- Crop Card Component ---
const CropCard = ({ crop }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between cursor-pointer"
  >
    <div className="flex items-center space-x-3">
      <img src={crop.image} alt={crop.name} className="w-12 h-12 rounded-full object-cover" />
      <h2 className="font-semibold text-lg text-[#8B5E3C]">{crop.name}</h2>
    </div>

    <div className="mt-3">
      <p className="text-sm font-medium text-gray-500">{crop.stage}</p>
      <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${crop.progress}%` }}
          className="bg-[#4CAF50] h-3 rounded-full"
        />
      </div>
    </div>

    <div className="flex mt-3 space-x-2">
      {crop.alerts.map((alert, idx) => (
        <span
          key={idx}
          className="px-2 py-1 text-xs rounded-full bg-[#FFC107] text-white"
        >
          {alert}
        </span>
      ))}
    </div>

    <div className="flex justify-around mt-4 text-gray-600">
      <FaPen className="cursor-pointer hover:text-[#4CAF50]" title="Update Growth" />
      <FaLeaf className="cursor-pointer hover:text-[#4CAF50]" title="Add Notes" />
      <FaCamera className="cursor-pointer hover:text-[#4CAF50]" title="Upload Photo" />
    </div>
  </motion.div>
);

// --- Crop Timeline Component ---
const CropTimeline = ({ crop }) => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="text-lg font-semibold text-[#8B5E3C] mb-2">{crop.name} Timeline</h3>
    <div className="flex items-center justify-between">
      {crop.stages.map((stage, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className={`w-4 h-4 rounded-full ${stage.completed ? 'bg-[#4CAF50]' : 'bg-gray-300'}`}
          />
          <span className="text-xs mt-1">{stage.name}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 text-sm text-gray-500">
      Planting: {crop.plantingDate} | Expected Harvest: {crop.harvestDate}
    </div>
  </div>
);

// --- Stats Panel ---
const StatsPanel = ({ crop }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-3">
    <h3 className="text-lg font-semibold text-[#8B5E3C]">Statistics</h3>
    <p>Expected Yield: <span className="font-medium text-[#4CAF50]">{crop.yield} kg</span></p>
    <p>Market Price Trend: <span className="font-medium text-[#FFC107]">{crop.marketPrice}</span></p>
    <p>Fertilizer Recommendation: {crop.fertilizer}</p>
    <p>Irrigation Recommendation: {crop.irrigation}</p>
  </div>
);

// --- Activity Log ---
const ActivityLog = ({ activities }) => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="text-lg font-semibold text-[#8B5E3C] mb-2">Activity Log</h3>
    <ul className="space-y-2">
      {activities.map((act, idx) => (
        <li key={idx} className="flex justify-between items-center border-b pb-2">
          <span>{act.date}: {act.action}</span>
          {act.photo && <img src={act.photo} alt="crop activity" className="w-12 h-12 rounded-md" />}
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Dashboard ---
export default function MyCropDashboard() {
  return (
    <div className="p-4  md:p-8 bg-[#F9FAFB] min-h-screen space-y-6">
      
      {/* Header */}
      <div className="flex   flex-col md:flex-row md:justify-between items-start md:items-center p-4 bg-[#F9FAFB] rounded-xl shadow-md">
        <div>
          <h1 className="text-2xl font-bold font-heading text-[#4CAF50]">My Crop</h1>
          <p className="text-sm text-gray-600 mt-1">
            Total Crops: {crops.length} | Active Alerts: 3
          </p>
        </div>
        <input
          type="text"
          placeholder="Search crops..."
          className="mt-4 md:mt-0 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
        />
      </div>

      {/* Crop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {crops.map((crop, idx) => <CropCard key={idx} crop={crop} />)}
      </div>

      {/* Timeline & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CropTimeline crop={crops[0]} />
        <StatsPanel crop={crops[0]} />
      </div>

      {/* Activity Log */}
      <ActivityLog activities={crops[0].activities} />
    </div>
  );
}
