import ThreeCanvas from '@/components/common/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <ThreeCanvas />
      <div className="relative z-10 flex flex-col items-center gap-6 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          <span className="text-primary">Code</span> Craft
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
          A futuristic portfolio where technology meets creativity. I'm Raghavendra, a passionate developer crafting visually stunning and interactive web experiences.
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
