'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InteractiveTextProps {
    className?: string;
    children: React.ReactNode;
}

const InteractiveText = ({ className, children }: InteractiveTextProps) => {
    return (
        <h1 className={cn("font-headline text-5xl md:text-6xl font-bold text-foreground tracking-tight select-none", className)}>
            {children}
        </h1>
    )
}

export default InteractiveText;