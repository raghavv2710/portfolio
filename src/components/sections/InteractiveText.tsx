'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";
  const letters = text.split('');
  const nameStartIndex = "Hi, I am ".length;

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Duration of the animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground tracking-tight canyon-word">
      {letters.map((letter, index) => {
        const isSpace = letter === ' ';
        const isName = index >= nameStartIndex;
        
        return (
          <div key={index} className="canyon-letter-container">
            <div className="canyon-triggers">
              <div className="canyon-triggers-top"></div>
              <div className="canyon-triggers-bottom"></div>
            </div>
            <span
              className={cn(
                "canyon-letter",
                isSpace && "canyon-space",
                isName && "canyon-raghavendra",
                isName && isAnimating && "electric"
              )}
              style={ isName && isAnimating ? { animationDelay: `${(index - nameStartIndex) * 0.05}s` } : {} }
            >
              {isSpace ? '\u00A0' : letter}
            </span>
          </div>
        );
      })}
    </h1>
  );
};

export default InteractiveText;
