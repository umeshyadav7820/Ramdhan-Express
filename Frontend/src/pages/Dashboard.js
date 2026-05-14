import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">Bookings</h2>
          <p className="text-2xl">120</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">Vehicles</h2>
          <p className="text-2xl">25</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">Revenue</h2>
          <p className="text-2xl">₹50,000</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;