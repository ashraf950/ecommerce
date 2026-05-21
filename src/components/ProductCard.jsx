import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const badgeColor = product.badge === 'New' ? 'bg-teal-500' : product.badge === 'Trending' ? 'bg-blue-600' : 'bg-red-500';

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0px 24px 60px rgba(15, 23, 42, 0.16)' }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl border border-white/10 bg-white/80 shadow-lg backdrop-blur-xl overflow-hidden"
    >
      <div className="relative overflow-hidden h-72 bg-slate-100 group">
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={product.name} />
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {product.badge && (
            <span className={`${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
              {product.badge}
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute right-4 bottom-4 z-20 flex items-center gap-2 bg-white/90 text-slate-900 px-4 py-2 rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <ShoppingCart size={16} />
          Quick Add
        </button>
        <button className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-900 shadow-lg hover:text-red-600 transition duration-300">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-5">
        <Link to={`/product/${product.id}`} className="block">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-2">
            {product.category}
          </p>
          <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">{product.rating.toFixed(1)}</span>
        </div>

        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-lg font-bold text-slate-900">₹{product.price.toLocaleString()}</p>
            <p className="text-sm text-slate-400 line-through">₹{Math.round(product.price * 1.3).toLocaleString()}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 flex items-center justify-center gap-2 transition duration-300 font-semibold"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
