import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.18; // 18% GST
  const shipping = totalPrice > 500 ? 0 : 99;
  const finalTotal = totalPrice + tax + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-lg text-gray-600">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="divide-y">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 hover:bg-gray-50 transition"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link
                        to={`/product/${item.id}`}
                        className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform"
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-blue-600 font-semibold mb-2">
                          {item.category}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          ₹{item.price.toLocaleString()} × {item.quantity}
                        </p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col items-end gap-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          <Trash2 size={20} />
                        </button>

                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                          >
                            <Minus size={16} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                Math.max(1, parseInt(e.target.value) || 1)
                              )
                            }
                            className="w-12 text-center py-1 border-l border-r border-gray-300 focus:outline-none"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Continue Shopping */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
              >
                <ArrowLeft size={20} />
                Continue Shopping
              </Link>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 border-b pb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ₹{totalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (18% GST)</span>
                  <span className="font-semibold text-gray-900">
                    ₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-6 bg-blue-50 p-4 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ₹{finalTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-3 transition duration-300"
              >
                Proceed to Checkout
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
              >
                Save for Later
              </motion.button>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t">
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <button className="w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
                  Apply
                </button>
              </div>

              {/* Clear Cart */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 font-semibold mt-6 transition"
              >
                Clear Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
