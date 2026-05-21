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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_28%)] pointer-events-none" />
      <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center px-8 md:px-16 z-20">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentProduct.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ opacity: { duration: 0.6 } }}
              className="w-full max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.5em] mb-4">
                  {currentProduct.category}
                </p>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  {currentProduct.name}
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                  {currentProduct.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    ₹{currentProduct.price.toLocaleString()}
                  </span>
                  <span className="text-xl text-slate-400 line-through">
                    ₹{Math.round(currentProduct.price * 1.3).toLocaleString()}
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full bg-rose-500 px-3 py-1 text-sm font-semibold text-white">
                    23% OFF
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/product/${currentProduct.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 hover:bg-cyan-400 transition"
                  >
                    View Product
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative h-full flex items-center justify-center px-6 md:px-10">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentProduct.id}
              custom={direction}
              variants={{
                enter: { opacity: 0, x: 60 },
                center: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -60 },
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ opacity: { duration: 0.6 }, x: { duration: 0.6 } }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-3xl h-[32rem] md:h-[36rem] lg:h-[40rem] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950/30 shadow-2xl shadow-black/40">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/900x900?text=Fashion+Hero';
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white shadow-lg shadow-black/20 transition hover:bg-white/20"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white shadow-lg shadow-black/20 transition hover:bg-white/20"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 w-8 h-3 rounded-full'
                  : 'bg-white/30 w-3 h-3 rounded-full hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="absolute top-8 right-8 z-40 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-sm">
          <span className="font-semibold">{currentIndex + 1}</span>
          <span className="text-slate-300"> / {products.length}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
