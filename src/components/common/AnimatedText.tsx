'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Characters to use for the scramble effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const [currentText, setCurrentText] = useState(text);
  
  // Using a ref to prevent re-triggering on hover during animation
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const newText = text
        .split('')
        .map((_letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      
      setCurrentText(newText);

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };
  
  useEffect(() => {
    // Run animation once on mount with a delay for better effect
    const timeoutId = setTimeout(scramble, 500);
    
    // Cleanup on component unmount
    return () => {
        if(intervalRef.current) clearInterval(intervalRef.current);
        clearTimeout(timeoutId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]); // Re-run if text prop changes

  return (
    <span
      onMouseOver={scramble}
      data-text={text}
      className={cn("text-primary font-headline tracking-tighter", className)}
    >
      {currentText}
    </span>
  );
};

export default AnimatedText;
