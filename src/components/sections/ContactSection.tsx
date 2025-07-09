import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="pt-0 md:pt-0">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
        <p className="max-w-3xl text-lg text-foreground/80">
          I'm currently open to new opportunities. If you have a project in mind or just want to say hello, feel free to reach out.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="mailto:hello@example.com">
            <Mail className="mr-2"/> Say Hello
          </a>
        </Button>
        <div className="flex gap-4 mt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter /></a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
