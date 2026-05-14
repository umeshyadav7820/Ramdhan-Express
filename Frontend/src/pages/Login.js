import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../services/api";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    mobile: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("isUser", "true");
      setToken(res.token);
      navigate("/booking");
    } else {
      alert(res.message || "Login failed");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await signupUser(form);
    if (res.message === "User created") {
      alert("Account created successfully. Please log in.");
      setIsSignup(false);
      setForm({ email: "", password: "", username: "", mobile: "", address: "" });
    } else {
      alert(res.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={isSignup ? handleSignup : handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Create an Account" : "User Login"}
        </h2>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        {isSignup && (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              rows="3"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-[#0B3C5D] text-white py-2 rounded hover:bg-[#09304d] transition mt-4"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              First time here?{' '}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </form>

    </div>
  );
};

export default Login;