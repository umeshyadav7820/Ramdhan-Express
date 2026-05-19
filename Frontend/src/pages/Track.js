import { useState } from "react";

const Track = () => {
  const [id, setId] = useState("");

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#0B3C5D]">Track Shipment</h2>

      <div className="mb-6 flex gap-4">
        <input
          placeholder="Enter Tracking ID"
          onChange={(e) => setId(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
        />

        <button className="px-6 py-2 bg-[#0B3C5D] text-white rounded-lg hover:bg-[#09304d] transition font-semibold">
          Track
        </button>
      </div>

      <p className="text-lg text-gray-700">Status: <span className="font-semibold text-orange-500">Pending</span></p>
    </div>
  );
};

export default Track;