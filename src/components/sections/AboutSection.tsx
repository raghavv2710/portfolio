import SectionWrapper from "@/components/common/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Rocket, BrainCircuit } from 'lucide-react';

const aboutData = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "My Journey",
    description: "From a simple “Hello, World!” to full-stack applications and AI-powered systems, my path has been about learning, experimenting, and creating solutions that matter."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "My Philosophy",
    description: "I believe in clean code, smart design, and solving problems at their core—building products that are reliable, scalable, and intuitive."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "What I Do",
    description: "I work across the stack with React, Node.js, and FastAPI, and love exploring AI/ML to bring intelligence into applications—whether it’s sleek UIs, real-time dashboards, or NLP-driven systems."
  }
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="py-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
        <h2 className="font-headline text-3xl md:text-5xl font-bold">About Me</h2>
        <p className="max-w-3xl text-base md:text-lg text-foreground/80">
          A brief glimpse into my world, my passion for technology, and my development philosophy.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {aboutData.map((item, index) => (
          <Card key={index} className="border-2 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:border-primary">
            <CardHeader className="items-center">
              {item.icon}
              <CardTitle className="font-headline text-xl md:text-2xl mt-4">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/70">
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
