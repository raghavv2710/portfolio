'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";
  const letters = text.split('');
  const nameStartIndex = "Hi, I am ".length;

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
                isName && "canyon-raghavendra"
              )}
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
