'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedText = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-block"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
