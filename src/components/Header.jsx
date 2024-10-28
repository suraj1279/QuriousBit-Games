import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/toggle.css";

const Header = ({ isAuthenticated, onLogout }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 animate-fadeInDown">
      <div className="container flex justify-between items-center mx-auto px-6">
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="logo flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold cursor-pointer" onClick={() => navigate("/")}>
            EventSpot
          </h1>
          <p className="text-lg mt-2 hidden md:block">
            Discover upcoming events around you!
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav hidden md:flex space-x-6">
          {isAuthenticated && (
            <Link to="/events" className="hover:text-gray-300">Home</Link>
          )}
          <Link to={isAuthenticated ? "/profile" : "/signup"} className="hover:text-gray-300">
            {isAuthenticated ? "Profile" : "Account"}
          </Link>
          {isAuthenticated && (
            <button onClick={onLogout} className="hover:text-gray-300">Logout</button>
          )}
        </nav>

        <button className="theme-toggle-btn ml-4" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-20 left-6 bg-purple-600 p-6 rounded-md shadow-lg">
            {isAuthenticated && (
              <Link to="/events" className="block py-2 text-white hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
            )}
            <Link to={isAuthenticated ? "/profile" : "/signup"} className="block py-2 text-white hover:text-gray-300" onClick={toggleMenu}>
              {isAuthenticated ? "Profile" : "Account"}
            </Link>
            {isAuthenticated && (
              <button onClick={() => { onLogout(); toggleMenu(); }} className="block py-2 text-white hover:text-gray-300">
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
