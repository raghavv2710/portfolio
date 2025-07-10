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

        if (isSpace) {
          return <div key={index} className="canyon-space" />;
        }
        
        return (
          <div key={index} className="canyon-letter-container">
            <div className="canyon-triggers">
              <div className="canyon-triggers-top" />
              <div className="canyon-triggers-bottom" />
            </div>
            <span
              className={cn(
                "canyon-letter",
                isName && "canyon-raghavendra"
              )}
            >
              {letter}
            </span>
          </div>
        );
      })}
    </h1>
  );
};

export default InteractiveText;
