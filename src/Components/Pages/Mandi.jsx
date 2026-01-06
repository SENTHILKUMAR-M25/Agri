import { useState } from "react";
import {
  Search, Mic, Phone, Share2, Heart, Plus, CheckCircle
} from "lucide-react";

const tabs = ["Buyers", "Sellers", "My Listing"];

const data = [
  {
    name: "Shailender Dhakar",
    location: "Amravati, Maharashtra",
    product: "Ginger",
    qty: "30.0 Quintal",
    price: "₹1750/Quintal",
    date: "06/11/2021 - 27/12/2021",
    verified: true,
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
  {
    name: "Raj Rathod",
    location: "Akola, Maharashtra",
    product: "Cotton",
    qty: "20.0 Quintal",
    price: "₹9500/Quintal",
    date: "21/11/2021 - 31/12/2021",
    verified: true,
    img: "https://images.unsplash.com/photo-1592997572594-34a7d7f1b07b",
  },
];

export default function Mandi() {
  const [activeTab, setActiveTab] = useState("Sellers");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">

      {/* App Container */}
      <div className="w-full max-w-7xl">

        {/* Header */}
        <div className="bg-green-600 p-4 md:p-6 text-white sticky top-0 z-20">
          <h1 className="text-xl md:text-2xl font-semibold">Mandi</h1>

          {/* Search */}
          <div className="mt-3 flex items-center bg-white rounded-lg px-3 py-2 text-gray-600 max-w-2xl">
            <Search size={18} />
            <input
              placeholder={`Search ${activeTab.toLowerCase()} name`}
              className="flex-1 px-2 outline-none text-sm md:text-base"
            />
            <Mic size={18} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white shadow sticky top-[96px] z-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm md:text-base font-medium ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="
          p-3 sm:p-4 lg:p-6
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        ">
          {data.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">

              {/* User */}
              <div className="flex items-center justify-between p-3">
                <div>
                  <p className="font-semibold text-sm md:text-base">{item.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{item.location}</p>
                </div>
                <Phone className="text-orange-500" />
              </div>

              {/* Product */}
              <div className="flex gap-3 p-3 border-t">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  {item.verified && (
                    <span className="inline-flex items-center text-green-600 text-xs">
                      <CheckCircle size={14} className="mr-1" /> Verified
                    </span>
                  )}

                  <h3 className="font-semibold mt-1 text-sm md:text-base">
                    {item.product}
                  </h3>

                  <div className="text-xs md:text-sm text-gray-600 mt-1 space-y-0.5">
                    <p>Quantity: <b>{item.qty}</b></p>
                    <p>Rate: <b>{item.price}</b></p>
                    <p className="text-gray-400">{item.date}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col justify-between">
                  <Share2 size={16} className="text-gray-400 hover:text-green-600" />
                  <Heart size={16} className="text-gray-400 hover:text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Button */}
        <button className="
          fixed bottom-6 right-6
          bg-green-600 text-white
          p-4 rounded-full shadow-lg
          hover:bg-green-700
        ">
          <Plus />
        </button>
      </div>
    </div>
  );
}
