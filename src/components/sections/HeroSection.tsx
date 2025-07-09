'use client';

import React from 'react';
import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight, Download } from 'lucide-react';
import MagneticWrapper from '../common/MagneticWrapper';
import { motion } from 'framer-motion';
import AnimatedText from '../common/AnimatedText';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
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
        <div className="mt-[-2rem] mb-6 text-center">
            <motion.h1
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              <AnimatedText text="Hi, I am " className="inline-block" />
              <span className="text-accent">
                <AnimatedText text="Raghavendra" className="inline-block" />
              </span>
            </motion.h1>
        </div>
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
