import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookings } from "../services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const loadBookings = async () => {
      try {
        const data = await getBookings();
        if (data.message) {
          setError(data.message);
          setBookings([]);
        } else {
          setBookings(data.reverse());
          setError(null);
        }
      } catch (err) {
        setError("Unable to load bookings");
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">View all booking orders and manage admin access.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Orders</h2>
          <p className="text-3xl font-bold text-[#0B3C5D]">{bookings.length}</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Pending Shipments</h2>
          <p className="text-3xl font-bold text-[#0B3C5D]">{bookings.length}</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Active Users</h2>
          <p className="text-3xl font-bold text-[#0B3C5D]">{bookings.length > 0 ? 1 : 0}</p>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Booking Orders</h2>
          <span className="text-sm text-gray-500">Latest requests are shown first</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-600">Loading bookings...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-600">{error}</div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-10 text-gray-600">No bookings yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Pickup</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Drop</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Truck</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">User ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{booking.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{booking.phone}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{booking.pickup}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{booking.drop}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{booking.vehicle || "N/A"}</td>
                    <td className="px-4 py-3 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">{booking.userId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
