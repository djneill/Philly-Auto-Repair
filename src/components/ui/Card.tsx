import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from './Button';

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true, ...props }: CardProps) => {
    return (
        <motion.div
            className={cn(
                "bg-surface/50 backdrop-blur-sm border border-white/5 rounded-lg p-6 overflow-hidden relative",
                hoverEffect && "hover:border-primary/50 transition-colors duration-300 group",
                className
            )}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const CardHeader = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("text-xl font-display font-bold text-white uppercase tracking-wide", className)}>{children}</h3>
);

export const CardContent = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-text-muted text-sm leading-relaxed", className)}>{children}</div>
);
