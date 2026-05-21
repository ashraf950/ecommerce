import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              StyleHub
            </h3>
            <p className="text-gray-400">
              Your premium destination for fashion and style. Discover the latest trends and timeless classics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>support@stylehub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>New York, USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 StyleHub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
