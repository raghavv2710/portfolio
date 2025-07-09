'use client';

import React from 'react';

export default function CanyonEffectText({ text, className }: { text: string; className?: string }) {
  const letters = text.split('');

  return (
    <div className={`canyon-word ${className || ''}`}>
      {letters.map((char, index) => (
        <div key={index} className="canyon-char-container">
          <div className="canyon-hover-trigger canyon-hover-trigger-top" />
          <div className="canyon-hover-trigger canyon-hover-trigger-bottom" />
          <span className="canyon-char">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </div>
      ))}
    </div>
  );
}
