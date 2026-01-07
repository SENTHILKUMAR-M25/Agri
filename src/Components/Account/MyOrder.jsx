import React, { useState } from "react";
import {
  Search,
  Package,
  CheckCircle,
  Truck,
  Home
} from "lucide-react";

/* 🔹 DUMMY DATA */
const activeOrder = {
  id: "2101233278342",
  name: "Panchangaa Onion Royal Pink (500g)",
  status: "Package out for Delivery",
  estimated: "25 Nov 2021"
};

const pastOrders = [
  {
    id: "2101201122334",
    name: "Fresh Tomato (1kg)",
    date: "20 Nov 2021",
    price: "₹120",
    status: "Delivered"
  },
  {
    id: "2101199988776",
    name: "Organic Potato (2kg)",
    date: "18 Nov 2021",
    price: "₹180",
    status: "Delivered"
  },
  {
    id: "2101185566778",
    name: "Green Chilli (250g)",
    date: "15 Nov 2021",
    price: "₹60",
    status: "Delivered"
  }
];

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="min-h-screen bg-slate-100 p-4 py-[40px] sm:p-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
          My Order
        </h1>

        {/* SEARCH */}
        <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow mb-4">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search orders"
            className="ml-3 w-full outline-none text-sm"
          />
        </div>

        {/* TABS */}
        <div className="flex bg-white rounded-xl overflow-hidden shadow mb-5">
          {["active", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-semibold transition
                ${
                  activeTab === tab
                    ? "bg-green-600 text-white"
                    : "text-slate-600"
                }`}
            >
              {tab === "active" ? "Active Order" : "Past Order"}
            </button>
          ))}
        </div>

        {/* ================= ACTIVE ORDER ================= */}
        {activeTab === "active" && (
          <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
            <h3 className="font-bold text-slate-800 mb-1">
              {activeOrder.name}
            </h3>
            <p className="text-sm text-green-600 font-semibold mb-3">
              {activeOrder.status}
            </p>

            <div className="text-xs text-slate-500 mb-5">
              Estimated Delivery: {activeOrder.estimated} <br />
              Order ID: {activeOrder.id}
            </div>

            {/* DELIVERY TIMELINE */}
            <div className="space-y-4">
              <TimelineItem title="Ordered & Approved" active />
              <TimelineItem title="Packed" active />
              <TimelineItem title="Shipped" active />
              <TimelineItem title="Out for Delivery" active />
            </div>
          </div>
        )}

        {/* ================= PAST ORDERS ================= */}
        {activeTab === "past" && (
          <div className="space-y-4">
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {order.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Order ID: {order.id}
                  </p>
                  <p className="text-xs text-slate-500">
                    Delivered on {order.date}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className="text-sm font-bold text-slate-700">
                    {order.price}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

/* 🔹 TIMELINE ITEM */
const TimelineItem = ({ title, active }) => (
  <div className="flex items-center gap-4">
    <div
      className={`w-3 h-3 rounded-full ${
        active ? "bg-green-600" : "bg-slate-300"
      }`}
    />
    <p
      className={`text-sm font-semibold ${
        active ? "text-slate-800" : "text-slate-400"
      }`}
    >
      {title}
    </p>
  </div>
);

export default MyOrders;
