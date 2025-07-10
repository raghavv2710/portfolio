'use client';

import React from 'react';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight, Download } from 'lucide-react';
import MagneticWrapper from '../common/MagneticWrapper';

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-reveal-text"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="relative z-10 flex flex-col items-center p-4">
        <MagneticWrapper particleCount={200}>
          <div className="relative h-64 w-64">
            <ThreeCanvas />
          </div>
        </MagneticWrapper>
        
        <h1 className="font-headline text-4xl md:text-5xl font-bold mt-8 text-foreground max-w-4xl tracking-tight">
          Hi, I am Raghavendra
        </h1>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work <MoveRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/resume.pdf" download>
              Download Resume <Download className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;