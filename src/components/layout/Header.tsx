import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Button, cn } from '../ui/Button';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'The Garage', href: '#garage' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Location', href: '#location' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    {/* Simple Logo Icon */}
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-background font-bold text-xl skew-x-[-10deg]">P</div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-lg leading-none tracking-wide text-white group-hover:text-primary transition-colors">PHILLY AUTO</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Performance Shop</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold uppercase tracking-wider text-text-muted hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:215-555-0199" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-bold font-display tracking-wide">
                        <Phone size={18} className="text-primary" />
                        215-555-0199
                    </a>
                    <Button size="sm" variant="glow">
                        Book Spot
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-display font-bold uppercase tracking-wider text-white hover:text-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="w-full h-px bg-white/5 my-4" />
                            <a href="tel:215-555-0199" className="flex items-center gap-2 text-white font-bold text-lg">
                                <Phone size={20} className="text-primary" />
                                215-555-0199
                            </a>
                            <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Book Appointment</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
