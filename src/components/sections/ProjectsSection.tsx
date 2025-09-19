import SectionWrapper from "@/components/common/SectionWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Media Watchdog",
    description: "An AI-powered platform that monitors digital media for sentiment, toxicity, and misinformation, delivering real-time insights for healthier online spaces.",
    imageHint: "media monitoring dashboard",
    liveUrl: "https://mediawatchdog.vercel.app/",
    githubUrl: "https://github.com/raghavv2710/ai-media-watchdog-backend",
    tags: ["FastAPI", "RoBERTa", "React", "TailwindCSS"],
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="py-8 md:py-12">
      <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
        <h2 className="font-headline text-3xl md:text-5xl font-bold">My Creations</h2>
        <p className="max-w-3xl text-base md:text-lg text-foreground/80">
          Here are some of the projects I've worked on, showcasing my skills in action.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 backdrop-blur-sm overflow-hidden group flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={"/images/media-watchdog-image.PNG"}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl md:text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-foreground/70">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-primary-foreground bg-primary/20 text-primary border-none">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-2 p-4 mt-auto">
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
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
