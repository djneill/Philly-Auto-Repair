import React from 'react';
import { cn } from './Button'; // Reusing cn helper

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("relative w-full py-20 px-4 md:px-8 overflow-hidden", className)}
            {...props}
        >
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {children}
            </div>
        </section>
    );
};
