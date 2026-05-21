import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              StyleHub
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Curated fashion essentials and premium collections crafted for bold, modern silhouettes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">Explore</h4>
            <ul className="space-y-3 text-slate-400">
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
                <a href="#categories" className="hover:text-white transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">Customer Care</h4>
            <ul className="space-y-3 text-slate-400">
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

          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">Contact</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@stylehub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>New York, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-slate-400">
          <p>© 2026 StyleHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition transform hover:scale-110 text-slate-400 hover:text-cyan-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="transition transform hover:scale-110 text-slate-400 hover:text-cyan-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="transition transform hover:scale-110 text-slate-400 hover:text-pink-400">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
