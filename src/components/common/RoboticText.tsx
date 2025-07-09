'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RoboticTextProps {
  text: string;
  className?: string;
}

const RoboticText: React.FC<RoboticTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = useRef(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const triggerAnimation = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    let iteration = 0;
    
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((_letter, index) => {
            if(index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join("")
      );

      if(iteration >= text.length){ 
        if(intervalRef.current) clearInterval(intervalRef.current);
        isAnimating.current = false;
        setDisplayText(text); // Ensure it resets to the original text
      }
      
      iteration += 1 / 2;
    }, 50);
  };
  
  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span
      onMouseEnter={triggerAnimation}
      className={cn(className)}
    >
      {displayText}
    </span>
  );
};

export default RoboticText;
