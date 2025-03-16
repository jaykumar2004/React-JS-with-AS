import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  py-4 mt-auto w-full text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Column 1: Logo and Description */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img 
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" 
                alt="Logo" 
                className="h-8 w-15 rounded-full mr-3"
              />
              <h2 className="text-lg font-bold">SWIGGY</h2>
            </div>
            <p className="text-black ">
              Delivering the best experiences since 2025. Join us on our journey to make life easier and better.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-orange-400 text-base font-bold">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-black hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-black hover:text-orange-400 transition">About</Link></li>
              <li><Link to="/contact" className="text-black hover:text-orange-400 transition">Contact</Link></li>
              <li><Link to="/grocery" className="text-black hover:text-orange-400 transition">Grocery</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3">
            <h3 className="text-orange-400 text-base font-bold">Legal</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy-policy" className="text-black hover:text-orange-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-black hover:text-orange-400 transition">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-black hover:text-orange-400 transition">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-3">
            <h3 className="text-orange-400 text-base font-bold">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 transition"><FaFacebook size={20} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 transition"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 transition"><FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 transition"><FaLinkedin size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-3 text-center text-black text-xs">
          <p>&copy; {new Date().getFullYear()} JayDaDabha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
