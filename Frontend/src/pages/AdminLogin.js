import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AdminLogin = ({ setAdmin }) => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = "rao.umesh.2021@gmail.com";
    const adminPassword = "rsy0794@";

    if (form.email === adminEmail && form.password === adminPassword) {
      localStorage.setItem("isAdmin", "true");
      setAdmin?.(true);
      navigate("/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  if (isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full pr-24 p-2 border rounded"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-sm font-medium text-[#0B3C5D] bg-gray-100 rounded hover:bg-gray-200"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0B3C5D] text-white py-2 rounded hover:bg-blue-900 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
