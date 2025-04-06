'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900 text-right" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="מסעדה גמא - מסעדה מודרנית"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-60"
        />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col justify-center items-end h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          {/* Restaurant Name */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            מסעדה גמא
          </motion.h1>
          
          {/* Headline */}
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            מסעדה מוביל בישראל
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-white mb-8 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          {/* CTA Button */}
          <motion.button
            className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium text-lg transition-colors duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            קבע תור עכשיו
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;