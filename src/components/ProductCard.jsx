import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-gray-100 h-56 group">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">
              ({product.rating})
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 line-through">
              ₹{Math.round(product.price * 1.3)}
            </span>
          </div>
        </div>
      </Link>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 flex items-center justify-center gap-2 transition duration-300 font-semibold"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
