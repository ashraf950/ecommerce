import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      {/* Carousel Container */}
      <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Content */}
        <div className="flex items-center justify-start px-8 md:px-16 z-20">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.6 },
              }}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
                  {currentProduct.category}
                </p>
                <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
                  {currentProduct.name}
                </h2>
                <p className="text-xl text-gray-300 mb-6 max-w-lg">
                  {currentProduct.description}
                </p>
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <span className="text-4xl font-bold text-white">
                    ₹{currentProduct.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{Math.round(currentProduct.price * 1.3).toLocaleString()}
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    23% OFF
                  </span>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    to={`/product/${currentProduct.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                  >
                    View Product
                  </Link>
                  <Link
                    to="/products"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Product Image */}
        <div className="relative h-full flex items-center justify-center px-4 md:px-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: { opacity: 0, scale: 0.8 },
                center: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-md flex items-center justify-center">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8 h-3 rounded-full'
                  : 'bg-white/50 w-3 h-3 rounded-full hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Product Counter */}
        <div className="absolute top-8 right-8 z-40 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="font-semibold">{currentIndex + 1}</span>
          <span className="text-gray-300"> / {products.length}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
