'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type MagneticWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MagneticWrapper = ({ children, className }: MagneticWrapperProps) => {
  const particleFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particleField = particleFieldRef.current;
    if (!particleField) return;

    while (particleField.firstChild) {
      particleField.removeChild(particleField.firstChild);
    }
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.setProperty('--x', `${Math.random() * 150 - 75}px`);
      particle.style.setProperty('--y', `${Math.random() * 150 - 75}px`);
      particle.style.animation = `particleFloat ${2 + Math.random() * 2}s infinite`;
      particle.style.animationDelay = `${Math.random() * -2}s`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleField.appendChild(particle);
    }
  }, []);

  return (
    <div className={cn('magnetic-container', className)}>
      <div ref={particleFieldRef} className="particles-field" aria-hidden="true"></div>
      {children}
    </div>
  );
};

export default MagneticWrapper;
