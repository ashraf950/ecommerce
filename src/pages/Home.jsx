import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import HeroCarousel from '../components/HeroCarousel';
import { categories, products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 8);
  const heroProducts = products.slice(0, 6);

  return (
    <div>
      <HeroCarousel products={heroProducts} />

      <section id="categories" className="py-20 px-4 bg-slate-950 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-teal-300 mb-3">Curated Collections</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Style That Speaks</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore premium collections and essential pieces crafted for modern wardrobes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12"
          >
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-teal-300 mb-3">Editor’s Picks</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Featured products for a premium wardrobe.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Handpicked styles from luxury streetwear to everyday essentials—designed to elevate your look.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transition duration-300"
            >
              Browse Collection
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/10 border border-white/10 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-teal-200 mb-3">Limited Release</p>
            <h3 className="text-3xl font-bold mb-4">Summer Capsule Collection</h3>
            <p className="text-slate-200 leading-relaxed mb-6">
              Embrace elevated essentials, made for modern comfort with luxe finishes and signature details.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 text-slate-950 px-6 py-3 font-semibold shadow-lg hover:bg-teal-300 transition duration-300"
            >
              Discover Now
            </Link>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200 mb-3">Free Shipping</p>
              <h3 className="text-3xl font-bold mb-4">Complimentary Delivery</h3>
              <p className="text-slate-200 leading-relaxed">
                Enjoy fast, free shipping on all orders over ₹2500 with premium packaging and care.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-pink-200 mb-3">Signature Service</p>
            <h3 className="text-3xl font-bold mb-4">Personal Styling Support</h3>
            <p className="text-slate-200 leading-relaxed">
              Enjoy curated style advice, tailored recommendations, and effortless wardrobe upgrades.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
