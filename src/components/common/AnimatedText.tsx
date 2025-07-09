'use client';

import React from 'react';
import { cn } from '@/lib/utils';

// This component now relies on CSS for the animation.
// The styles are added to globals.css.
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span
      data-text={text}
      className={cn("glitch-text text-primary font-headline tracking-tighter", className)}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
