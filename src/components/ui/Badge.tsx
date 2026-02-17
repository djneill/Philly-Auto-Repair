import React from 'react';
import { cn } from './Button';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

export const Badge = ({ children, className, ...props }: BadgeProps) => {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
