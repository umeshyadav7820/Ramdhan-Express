import { useState } from "react";

const Track = () => {
  const [id, setId] = useState("");

  return (
    <div>
      <h2>Track Shipment</h2>

      <input
        placeholder="Enter Tracking ID"
        onChange={(e) => setId(e.target.value)}
      />

      <button>Track</button>

      <p>Status: Pending</p>
    </div>
  );
};

export default Track;