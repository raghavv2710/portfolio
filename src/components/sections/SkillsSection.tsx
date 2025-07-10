'use client';
import SectionWrapper from "@/components/common/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Three.js & 3D', level: 80 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'Node.js & Backend', level: 75 },
  { name: 'UI/UX Design', level: 85 },
];

const SkillsSection = () => {
    const [progressValues, setProgressValues] = React.useState<{[key: string]: number}>({});

    React.useEffect(() => {
        const timers = skills.map(skill => 
            setTimeout(() => {
                setProgressValues(prev => ({...prev, [skill.name]: skill.level}))
            }, 200)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

  return (
    <SectionWrapper id="skills" className="py-12 md:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">My Skillset</h2>
        <p className="max-w-3xl text-lg text-foreground/80">
          A collection of technologies and tools I use to build my digital creations.
        </p>
      </div>
      <div className="flex justify-center">
        <Card className="w-full max-w-4xl bg-card/50 backdrop-blur-sm border-2 border-border/20 dark:border-primary/20">
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <Progress value={progressValues[skill.name] || 0} className="h-3 [&>div]:bg-primary transition-all duration-1000 ease-out" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
