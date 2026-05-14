import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Track from "./pages/Track";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isUser");
    localStorage.removeItem("isAdmin");
    setToken(null);
    window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <Navbar token={token} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/booking"
          element={
            token ? (
              <Booking />
            ) : (
              <Navigate to="/login" state={{ from: "/booking" }} replace />
            )
          }
        />
        <Route path="/track" element={<Track />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={isAdmin ? <Dashboard /> : <AdminLogin />}
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;