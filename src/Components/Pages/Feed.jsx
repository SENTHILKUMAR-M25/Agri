import React from "react";

const agriNewsData = [
  {
    id: 1,
    title: "MSP Increased for Paddy Crops",
    description:
      "The government has announced an increase in Minimum Support Price for paddy to support farmers this season.",
    category: "Government Policy",
    date: "28 Jan 2026",
  },
  {
    id: 2,
    title: "Heavy Rainfall Expected in Tamil Nadu",
    description:
      "Weather department predicts heavy rainfall in coastal districts, farmers advised to take precautions.",
    category: "Weather",
    date: "27 Jan 2026",
  },
  {
    id: 3,
    title: "New Pest Found in Cotton Crops",
    description:
      "Agriculture officials have warned farmers about a new pest attack affecting cotton crops.",
    category: "Crop Alert",
    date: "26 Jan 2026",
  },
  {
    id: 4,
    title: "AI-Based Smart Farming Gaining Popularity",
    description:
      "Farmers are adopting AI tools to monitor crops and improve productivity.",
    category: "Agri Technology",
    date: "25 Jan 2026",
  },
];

export default function AgriNews() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          🌾 Agri News
        </h1>
        <p className="text-gray-600 mt-2">
          Latest updates from the agriculture sector
        </p>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agriNewsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-green-100"
          >
            {/* Category */}
            <span className="inline-block mb-3 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              {news.category}
            </span>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {news.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {news.description}
            </p>

            {/* Date */}
            <div className="text-xs text-gray-500">
              📅 {news.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
