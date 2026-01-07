import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import servicesData from "../Service/ServiceData";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id);

  if (!service) return <p className="text-center mt-20">Service not found</p>;

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-700 font-semibold mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-black text-green-700 mb-4">
          {service.title}
        </h1>

        <p className="text-slate-600 mb-8 text-lg">
          {service.description}
        </p>

        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Service Includes
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.details.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-green-50 p-4 rounded-xl"
            >
              <CheckCircle className="text-green-600" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate(`/services/${service.id}/book`)}
          className="mt-10 w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg"
        >
          Book This Service
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
