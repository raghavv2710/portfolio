'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InteractiveLetterProps {
    className?: string;
    children: React.ReactNode;
}

const InteractiveLetter = ({ className, children }: InteractiveLetterProps) => {
    return (
        <div className="interactive-letter-container">
            <div />
            <div />
            <h1 className={cn("font-headline text-5xl md:text-6xl font-bold text-primary tracking-tight select-none", className)}>
                {children}
            </h1>
        </div>
    )
}

export default InteractiveLetter;
