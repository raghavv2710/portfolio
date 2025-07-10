'use client';

import React from 'react';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight, Download } from 'lucide-react';
import MagneticWrapper from '../common/MagneticWrapper';
import InteractiveText from '../common/InteractiveText';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center p-4">
        <MagneticWrapper particleCount={200}>
          <div className="relative h-[22rem] w-[22rem]">
            <ThreeCanvas />
          </div>
        </MagneticWrapper>
        
        <InteractiveText />
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work <MoveRight />
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
