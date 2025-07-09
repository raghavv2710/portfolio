'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type MagneticWrapperProps = {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
};

// Default particle count is now low (20) for the nav bar.
const MagneticWrapper = ({ children, className, particleCount = 20 }: MagneticWrapperProps) => {
  const particleFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particleField = particleFieldRef.current;
    if (!particleField) return;

    while (particleField.firstChild) {
      particleField.removeChild(particleField.firstChild);
    }
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      // Keep radius tighter for a denser feel
      particle.style.setProperty('--x', `${Math.random() * 100 - 50}px`);
      particle.style.setProperty('--y', `${Math.random() * 100 - 50}px`);
      particle.style.animation = `particleFloat ${2 + Math.random() * 2}s infinite`;
      particle.style.animationDelay = `${Math.random() * -2}s`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleField.appendChild(particle);
    }
  }, [particleCount]);

  return (
    <div className={cn('magnetic-container', className)}>
      <div ref={particleFieldRef} className="particles-field" aria-hidden="true"></div>
      {children}
    </div>
  );
};

export default MagneticWrapper;
