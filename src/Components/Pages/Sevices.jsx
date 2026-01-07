import React from "react";
import {
  Tractor,
  Leaf,
  Droplet,
  Wheat,
  ShoppingBasket,
  ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import services from "../Service/ServiceData";

// const services = [
//   {
//     title: "Farm Equipment Rental",
//     desc: "Rent tractors, harvesters, and modern farming tools at affordable prices.",
//     icon: Tractor
//   },
//   {
//     title: "Organic Farming Support",
//     desc: "Guidance and resources for organic and natural farming practices.",
//     icon: Leaf
//   },
//   {
//     title: "Irrigation Services",
//     desc: "Drip irrigation, sprinkler systems, and water management solutions.",
//     icon: Droplet
//   },
//   {
//     title: "Crop Advisory",
//     desc: "Expert advice on crop selection, disease control, and yield improvement.",
//     icon: Wheat
//   },
//   {
//     title: "Agri Product Marketplace",
//     desc: "Buy seeds, fertilizers, pesticides, and tools directly from sellers.",
//     icon: ShoppingBasket
//   },
//   {
//     title: "Crop Insurance",
//     desc: "Protect crops against climate risks and natural disasters.",
//     icon: ShieldCheck
//   }
// ];

const AgriServices = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-green-700">
            Agricultural Services
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Empowering farmers with modern agricultural solutions and trusted services.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
             >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 mb-4">
                <service.icon className="text-green-700" size={28} />
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {service.desc}
              </p>

              <button onClick={() => navigate(`/services/${service.id}`)}
  className="mt-5 text-green-700 font-semibold text-sm hover:underline"
>
  Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AgriServices;
