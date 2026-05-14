import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-[#0B3C5D] text-white text-center py-20 px-6">

        <img
          src={logo}
          alt="Ramdhan Express"
          className="mx-auto h-28 mb-6 bg-white p-2 rounded-lg shadow-md"
        />

        <h1 className="text-5xl font-bold mb-4 tracking-wide">
          Ramdhan Express
        </h1>

        <p className="text-lg mb-6 text-gray-200">
          Fast. Safe. Reliable Transport Across India
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Book Now
        </button>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-6 shadow-lg rounded-xl hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Mini Truck</h3>
            <p className="text-gray-600">
              Ideal for small deliveries and quick transport.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Full Truck</h3>
            <p className="text-gray-600">
              Perfect for heavy goods and long-distance transport.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Packers & Movers</h3>
            <p className="text-gray-600">
              Safe and secure shifting for homes and offices.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
          Our Experience
        </h2>

        <div className="flex justify-center gap-12 flex-wrap">

          <div className="bg-white p-6 rounded-xl shadow-md w-40">
            <h3 className="text-3xl font-bold text-[#0B3C5D]">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md w-40">
            <h3 className="text-3xl font-bold text-[#0B3C5D]">5000+</h3>
            <p className="text-gray-600">Deliveries</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md w-40">
            <h3 className="text-3xl font-bold text-[#0B3C5D]">1000+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>

        </div>
      </section>

      {/* TRUSTED USERS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
          Trusted By
        </h2>

        <div className="flex justify-center gap-10 flex-wrap text-gray-600 text-lg font-medium">
          <p className="hover:text-black transition">Flipkart</p>
          <p className="hover:text-black transition">Amazon</p>
          <p className="hover:text-black transition">Meesho</p>
          <p className="hover:text-black transition">Local Businesses</p>
        </div>
      </section>

      {/* MOTTO */}
      <section className="bg-[#0B3C5D] text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold italic">
          "Delivering Trust, One Mile at a Time"
        </h2>
      </section>

    </div>
  );
};

export default Home;