import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StyleHub
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Products
            </Link>
            <a
              href="#categories"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Categories
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <Search size={24} className="text-gray-700" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <ShoppingCart size={24} className="text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleSearch}
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <Search size={20} className="text-gray-700" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <ShoppingCart size={20} className="text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <a
              href="#categories"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
            >
              Categories
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
            >
              Contact
            </a>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 border-t">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
