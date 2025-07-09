'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const InteractiveText = ({ text, className }: { text: string; className?: string }) => {
  const characters = Array.from(text);

  return (
    <div className={cn("interactive-text-wrapper", className)}>
      {characters.map((char, index) => (
        <span key={index} className="interactive-letter-container">
          <div className="hover-wrapper">
            <div className="hover-top" />
            <div className="hover-bottom" />
          </div>
          <span className="interactive-letter">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default InteractiveText;
