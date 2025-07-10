'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";

  return (
    <h1 className="font-headline text-5xl md:text-6xl font-bold text-center">
      <span className="text-foreground">Hi, I am </span>
      <span className="text-primary">Raghavendra</span>
    </h1>
  );
};

export default InteractiveText;
