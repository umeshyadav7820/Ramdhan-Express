import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ token, isAdmin, onLogout }) => {
  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <nav className="bg-[#0B3C5D] text-white px-6 py-3 flex justify-between items-center">
      
      {/* LOGO + NAME */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Ramdhan Express" className="h-10 w-auto" />
        <h1 className="text-lg font-bold">Ramdhan Express</h1>
      </div>

      {/* NAV LINKS */}
      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Book</Link>
        <Link to="/track">Track</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
        {token || isAdmin ? (
          <button
            onClick={handleLogoutClick}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition inline-block"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
