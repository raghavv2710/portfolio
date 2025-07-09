'use client';

import React, { useState, useEffect } from 'react';
import InteractiveText from '@/components/common/InteractiveText';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import MagneticWrapper from '../common/MagneticWrapper';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {isMounted && <div className="thunder-effect-overlay" />}
      <div className="relative z-10 flex flex-col items-center p-4">
        <MagneticWrapper>
          <div className="relative h-64 w-64 mb-4">
            <ThreeCanvas />
          </div>
        </MagneticWrapper>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter flex flex-wrap justify-center items-center">
          <InteractiveText text="Hi, I am" />
          <span className="text-accent ml-4">
            <InteractiveText text="Raghavendra" />
          </span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80 mt-4">
          A passionate developer crafting visually stunning and interactive web experiences where technology meets creativity.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work <MoveRight className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
