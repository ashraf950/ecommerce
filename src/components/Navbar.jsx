import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Moon, Sun } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/80 backdrop-blur-xl border-b border-white/10 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              StyleHub
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs uppercase tracking-[0.4em] bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg">
              Luxury
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition">
              Products
            </Link>
            <a href="#categories" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition">
              Categories
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2 shadow-sm transition">
              <Search size={18} className="text-slate-500 dark:text-slate-400" />
              <input
                type="text"
                placeholder="Search premium fashion"
                className="w-52 bg-transparent focus:outline-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:ring-2 hover:ring-blue-500 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/cart"
              className="relative p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
            >
              <ShoppingCart size={20} className="text-slate-900 dark:text-white" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-slate-200 dark:border-slate-800">
            <Link to="/" className="block px-4 py-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="block px-4 py-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <a href="#categories" className="block px-4 py-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Categories
            </a>
            <a href="#contact" className="block px-4 py-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
