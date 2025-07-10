'use client';

import React from 'react';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight, Download } from 'lucide-react';
import MagneticWrapper from '../common/MagneticWrapper';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center p-4">
        <MagneticWrapper particleCount={200}>
          <div className="relative h-[22rem] w-[22rem]">
            <ThreeCanvas />
          </div>
        </MagneticWrapper>
        
        <h1 className="font-headline text-5xl md:text-6xl font-bold -mt-12 text-foreground max-w-5xl tracking-tight">
          Hi, I am Raghavendra
        </h1>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="default">
              <a href="#projects">
                View My Work <MoveRight />
              </a>
            </Button>
            <Button asChild size="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <Button asChild size="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/resume.pdf" download>
              Download Resume <Download />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
