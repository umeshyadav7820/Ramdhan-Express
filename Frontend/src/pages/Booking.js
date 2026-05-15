import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createBooking } from "../services/api";
import { trucks } from "../data/trucks";

const Booking = () => {
  const location = useLocation();
  const initialVehicle = location.state?.vehicle || trucks[0].title;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    vehicle: initialVehicle,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

    const res = await createBooking(form, token);

    if (res.message === "Booking created successfully") {
      setSubmitted(true);
      setForm({ name: "", phone: "", pickup: "", drop: "", vehicle: initialVehicle });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert(res.message || "Booking failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Book Your Transport
          </h1>
          <p className="text-gray-600 text-lg">
            Quick and easy booking process with Ramdhan Express
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold">
              ✓ Booking created successfully! We'll contact you soon.
            </p>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C5D] focus:border-transparent transition"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C5D] focus:border-transparent transition"
              />
            </div>

            {/* Pickup Location Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                name="pickup"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Where should we pick you up?"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C5D] focus:border-transparent transition"
              />
            </div>

            {/* Drop Location Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Drop Location
              </label>
              <input
                type="text"
                name="drop"
                value={form.drop}
                onChange={handleChange}
                placeholder="Where should we drop you?"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C5D] focus:border-transparent transition"
              />
            </div>

            {/* Select Truck Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Truck Type
              </label>
              <select
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C5D] focus:border-transparent transition"
              >
                {trucks.map((truck) => (
                  <option key={truck.title} value={truck.title}>
                    {truck.title} - {truck.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-600 mb-2">Selected truck details</p>
              <div className="flex items-center gap-4">
                <img
                  src={trucks.find((truck) => truck.title === form.vehicle)?.image}
                  alt={form.vehicle}
                  className="h-20 w-28 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{form.vehicle}</p>
                  <p className="text-sm text-gray-600">
                    Min booking price: {trucks.find((truck) => truck.title === form.vehicle)?.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0B3C5D] hover:bg-[#09304d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </button>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Quick Tips:
          </h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>✓ Provide accurate location details for faster pickup</li>
            <li>✓ Double-check your phone number for booking confirmation</li>
            <li>✓ Our team will contact you within 5 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Booking;