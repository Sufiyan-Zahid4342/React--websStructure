import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>
              Welcome to E-Shop, your number one source for all products. We are dedicated to giving you the best shopping experience, with a focus on reliability, customer service, and uniqueness.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <p>Get updates on new arrivals, offers, and more.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> 123 Main Street, City, Country</p>
            <p><FaPhone /> +123 456 789</p>
            <p><FaEnvelope /> support@eshop.com</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 E-Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
