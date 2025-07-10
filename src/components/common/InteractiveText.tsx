'use client';

import React from 'react';

const InteractiveLetter = ({ children }: { children: React.ReactNode }) => {
  if (children === ' ') {
    return <span className="w-4" />;
  }

  return (
    <div className="interactive-letter-container">
      <div className="hover-area hover-area-1"></div>
      <div className="hover-area hover-area-2"></div>
      <h1 className="letter">{children}</h1>
    </div>
  );
};

const InteractiveText = ({ children }: { children: string }) => {
  const letters = children.split('');

  return (
    <div className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight select-none">
      <div className="interactive-text-container">
        {letters.map((letter, index) => (
          <InteractiveLetter key={index}>
            {letter}
          </InteractiveLetter>
        ))}
      </div>
    </div>
  );
};

export default InteractiveText;
