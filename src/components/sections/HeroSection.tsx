'use client';

import React, { useState, useEffect } from 'react';
import InteractiveText from '@/components/common/InteractiveText';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <ThreeCanvas />
      {isMounted && <div className="thunder-effect-overlay" />}
      <div className="relative z-10 flex flex-col items-center gap-6 p-8 bg-background/70 backdrop-blur-sm rounded-2xl">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter flex flex-wrap justify-center items-center">
          <InteractiveText text="I am " />
          <span className="text-primary">
            <InteractiveText text="Raghavendra" />
          </span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
          A passionate developer crafting visually stunning and interactive web experiences where technology meets creativity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
