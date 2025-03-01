import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <span className="logo">🛍️ Products</span>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>

      {/* Center Section */}
      <h1 className="navbar-title">E-Shop</h1>

      {/* Right Section */}
      <div className="navbar-right">
        <FaSearch className="icon" />
        <span className="phone">📞 +123 456 789</span>
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
        <FaBars className="icon menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
