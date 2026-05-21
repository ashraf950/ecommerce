import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Share2, ShoppingCart, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  // Related products
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-8 text-sm text-gray-600"
        >
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronLeft size={16} className="rotate-180" />
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <ChevronLeft size={16} className="rotate-180" />
          <span className="text-gray-900">{product.name}</span>
        </motion.div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg max-w-md"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg text-gray-700">
                {product.rating} ({Math.floor(Math.random() * 500) + 50} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-2xl text-gray-500 line-through">
                ₹{Math.round(product.price * 1.3).toLocaleString()}
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                23% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

            <p className="text-gray-700 mb-8">{product.details}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-semibold text-gray-900">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border-l border-r border-gray-300 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-4 rounded-lg font-semibold border-2 transition duration-300 ${
                  isWishlisted
                    ? 'bg-red-50 border-red-500 text-red-600'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                <Heart size={24} className={isWishlisted ? 'fill-red-600' : ''} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-6 py-4 rounded-lg font-semibold border-2 border-gray-300 text-gray-600 hover:border-gray-400 transition duration-300"
              >
                <Share2 size={24} />
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 border-t pt-6">
              <div className="border-r">
                <p className="text-sm text-gray-600 mb-1">Delivery</p>
                <p className="font-semibold text-gray-900">Free Delivery</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Returns</p>
                <p className="font-semibold text-gray-900">30 Days Easy Return</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-gray-100 h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        ₹{relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
