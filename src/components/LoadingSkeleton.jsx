import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = ({ count = 1, type = 'product' }) => {
  if (type === 'product') {
    return (
      <>
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="w-full h-56 bg-gray-200" />
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
              <div className="h-4 bg-gray-200 rounded mb-3 w-1/2" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
          </motion.div>
        ))}
      </>
    );
  }

  if (type === 'detail') {
    return (
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="w-full h-96 bg-gray-200 rounded-lg" />
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-8 bg-gray-200 rounded w-1/2" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>
      </motion.div>
    );
  }

  return null;
};

export default LoadingSkeleton;
