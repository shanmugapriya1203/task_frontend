import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaBars } from "react-icons/fa";
import logo from "../images/logoNav.png";

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white-200 p-4 flex justify-between items-center">
      <div className="text-black text-lg font-semibold flex items-center">
        <img
          src={logo}
          alt="Your App Logo"
          className="w-8 h-8 inline-block mr-2"
        />
        <span className="text-blue-700">Planner</span>Plus
      </div>
      <div className="md:hidden">
        <button className="text-black hover:text-blue-700" onClick={toggleMenu}>
          <FaBars />
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white p-2 rounded-md shadow-md">
            <div className="space-y-2">
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  className="block text-black hover:text-blue-700"
                  onClick={toggleMenu}
                >
                  My Tasks
                </Link>
              )}
              <a
                href="/about"
                className="block text-black hover:text-blue-700"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="/pricing"
                className="block text-black hover:text-blue-700"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              {isLoggedIn ? (
                <button
                  className="block bg-black text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md"
                  onClick={() => {
                    handleLogoutClick();
                    toggleMenu();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={toggleMenu}>
                  <button className="block bg-black text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="md:flex items-center space-x-4 hidden">
        {isLoggedIn && (
          <Link to="/dashboard" className="text-black hover:text-blue-700">
            My Tasks
          </Link>
        )}
        <a href="/about" className="text-black hover:text-blue-700">
          About
        </a>
        <a href="/pricing" className="text-black hover:text-blue-700">
          Pricing
        </a>
        {isLoggedIn ? (
          <button
            className="bg-black text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-black text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
