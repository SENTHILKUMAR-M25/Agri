import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../Service/ServiceData";

const ServiceBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Service booked successfully!");
    navigate("/services");
  };

  if (!service) return null;

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8">

        <h1 className="text-2xl font-black text-green-700 mb-6">
          Book {service.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Farmer Name"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="location"
            placeholder="Village / Location"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <button
            type="submit"
            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceBooking;
