'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InteractiveTextProps {
    className?: string;
    children: React.ReactNode;
}

const InteractiveText = ({ className, children }: InteractiveTextProps) => {
    return (
        <div className="interactive-text-container h-28">
            <div className="hover-area">
                <div />
                <div />
                <h1 className={cn("font-headline text-5xl md:text-6xl font-bold text-foreground tracking-tight select-none", className)}>
                    {children}
                </h1>
            </div>
        </div>
    )
}

export default InteractiveText;
