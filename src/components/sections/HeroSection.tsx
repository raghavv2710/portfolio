'use client';

import React from 'react';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight, Download } from 'lucide-react';
import MagneticWrapper from '../common/MagneticWrapper';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="relative z-10 flex flex-col items-center p-4">
        <MagneticWrapper particleCount={200}>
          <div className="relative h-[16rem] w-[16rem]">
            <ThreeCanvas />
          </div>
        </MagneticWrapper>
        
        <h1 className="font-headline text-2xl md:text-3xl font-bold mt-2 text-foreground max-w-5xl tracking-tight">
          Hi, I am Raghavendra
        </h1>
        
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild>
              <a href="#projects">
                View My Work <MoveRight className="ml-2" />
              </a>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
