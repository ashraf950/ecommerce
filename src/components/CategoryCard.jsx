import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
    >
      <Link to={`/products?category=${category.name}`}>
        <div className="relative h-64 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {category.name}
              </h3>
              <div className="flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="font-semibold">Shop Now</span>
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
