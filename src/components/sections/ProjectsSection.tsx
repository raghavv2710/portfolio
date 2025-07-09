import SectionWrapper from "@/components/common/SectionWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Interactive Data Viz",
    description: "An interactive data visualization platform built with D3.js and React, showcasing complex datasets in an intuitive way.",
    imageHint: "data visualization",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["React", "D3.js", "Next.js"],
  },
  {
    title: "3D Product Configurator",
    description: "A 3D product configurator using Three.js, allowing users to customize products in real-time in their browser.",
    imageHint: "3d model",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Three.js", "React", "Websockets"],
  },
  {
    title: "Futuristic E-commerce",
    description: "A futuristic e-commerce store with a unique UI/UX, focusing on micro-interactions and a seamless checkout experience.",
    imageHint: "ecommerce interface",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">My Creations</h2>
        <p className="max-w-3xl text-lg text-foreground/80">
          Here are some of the projects I've worked on, showcasing my skills in action.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={`https://placehold.co/600x400.png`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              <CardDescription className="mt-2 text-foreground/70">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-primary-foreground bg-primary/20 text-primary border-none">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 p-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository"><Github /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo"><ExternalLink /></a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
