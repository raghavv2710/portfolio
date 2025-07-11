'use client';
import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import Link from 'next/link';
import { Code2, Menu, X } from 'lucide-react';
import { ThemeToggle } from './common/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';


const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Analysis', href: '#ai-analysis' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
                <Link href="#home" className="flex items-center gap-2" aria-label="Home">
                    <Code2 className="text-primary h-8 w-8"/>
                    <span className="font-headline text-xl font-bold">Portfolio</span>
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                      <Link href={link.href} key={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors nav-link-hover">
                          {link.name}
                      </Link>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground hidden md:inline-flex">
                        <a href="#contact">Contact Me</a>
                    </Button>
                    <ThemeToggle />
                    {isMobile && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[280px] bg-background">
                                <div className="flex flex-col h-full p-4">
                                    <div className="flex justify-between items-center mb-8">
                                        <Link href="#home" className="flex items-center gap-2" aria-label="Home">
                                            <Code2 className="text-primary h-7 w-7"/>
                                            <span className="font-headline text-lg font-bold">Portfolio</span>
                                        </Link>
                                        <SheetClose asChild>
                                            <Button variant="ghost" size="icon">
                                                <X />
                                                <span className="sr-only">Close menu</span>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                    <nav className="flex flex-col gap-6">
                                        {navLinks.map(link => (
                                          <SheetClose asChild key={link.href}>
                                              <Link href={link.href} className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                                                  {link.name}
                                              </Link>
                                          </SheetClose>
                                        ))}
                                    </nav>
                                    <div className="mt-auto">
                                      <SheetClose asChild>
                                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                          <a href="#contact">Contact Me</a>
                                        </Button>
                                      </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
