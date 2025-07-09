'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("inline-block", className)}
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
