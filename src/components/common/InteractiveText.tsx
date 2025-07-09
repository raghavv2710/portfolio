'use client';
import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import MagneticWrapper from './common/MagneticWrapper';
import { ThemeToggle } from './common/ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Analysis', href: '#ai-analysis' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
                        <MagneticWrapper key={link.name} particleCount={20}>
                          <Link href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                              {link.name}
                          </Link>
                        </MagneticWrapper>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#contact">Contact Me</a>
                    </Button>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Header;