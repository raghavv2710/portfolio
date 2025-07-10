'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const InteractiveText = () => {
  const text = "Hi, I am Raghavendra";
  const letters = text.split('');
  const nameStartIndex = "Hi, I am ".length;

  return (
    <div className="canyon-word">
      {letters.map((char, index) => {
        const isSpace = char === ' ';
        const isName = index >= nameStartIndex;

        if (isSpace) {
          return <div key={index} className="canyon-space" />;
        }
        
        return (
          <div className="canyon-hover" key={index}>
            <div></div>
            <div></div>
            <h1 className={cn("canyon-raghavendra")}>{char}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveText;
