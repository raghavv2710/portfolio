'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let iteration = 0;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      const newText = text
        .split("")
        .map((_letter, index) => {
          if(index < iteration) {
            return text[index];
          }
        
          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("");
        
      setDisplayText(newText);
      
      if(iteration >= text.length){
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsAnimating(false);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    // Initial animation on mount
    scramble();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]); // Re-run if text prop changes


  return (
    <span
      onMouseEnter={scramble}
      className={cn("text-primary font-headline tracking-tighter", className)}
    >
      {displayText}
    </span>
  );
};

export default AnimatedText;
