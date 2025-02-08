import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://i.pinimg.com/736x/50/25/c2/5025c2d7b50f1b0f69e735483accd2fc.jpg" 
                alt="Logo" 
                className="h-12 w-12 rounded-full mr-4"
              />
              <h2 className="text-2xl font-bold">JAY DA DABHA</h2>
            </div>
            <p className="text-gray-400">
              Delivering the best experiences since 2025. Join us on our journey to make life easier and better.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              </li>
              <li>
                <Link to="/grocery" className="text-gray-400 hover:text-white transition">Grocery</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-white transition">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ONIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;