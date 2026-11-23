import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl font-mono text-purple-300 mb-4">
            Senior Fullstack Engineer — Vue / React / TypeScript / Node.js
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nick Sannikov
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            6 years shipping production web apps. Vue 2→3 migrations without downtime,
            fullstack MVPs in weeks, AI features that actually work.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://cal.com/nick-sannikov/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
            >
              Book a 15-min call
            </a>
            <a
              href="https://github.com/belirofon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-500 text-gray-200 px-8 py-3 rounded-full hover:border-purple-400 hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white opacity-50"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
