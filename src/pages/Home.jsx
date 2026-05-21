import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import HeroCarousel from '../components/HeroCarousel';
import { categories, products } from '../data/products';

const Home = () => {
  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8);
  // Get carousel products - best sellers/featured
  const carouselProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Carousel Section */}
      <HeroCarousel products={carouselProducts} />

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-600">
              Explore our diverse collection of premium fashion items
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">
              Check out our handpicked selection of bestsellers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Summer Sale Now Live!</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get up to 50% off on selected items. Limited time offer!
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Shop Sale
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
