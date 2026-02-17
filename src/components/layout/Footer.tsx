import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contact" className="bg-surface border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-background font-bold text-xl skew-x-[-10deg]">P</div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-lg leading-none tracking-wide text-white">PHILLY AUTO</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Performance Shop</span>
                            </div>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            We don't just fix cars; we engineer performance. <br />
                            Specialized in German engineering, American muscle, and JDM legends.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <SocialLink icon={<Instagram size={20} />} href="#" />
                            <SocialLink icon={<Twitter size={20} />} href="#" />
                            <SocialLink icon={<Facebook size={20} />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-white uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#services">Services</FooterLink>
                            <FooterLink href="#garage">The Garage</FooterLink>
                            <FooterLink href="#reviews">Reviews</FooterLink>
                            <FooterLink href="#about">About Us</FooterLink>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-display font-bold text-white uppercase tracking-wider mb-6">Shop Hours</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span className="text-white font-bold">08:00 AM - 06:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-white font-bold">09:00 AM - 02:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-primary font-bold">Closed for Game Day</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-white uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 justify-center md:justify-start text-sm text-text-muted">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>1100 Packer Ave,<br />Philadelphia, PA 19148</span>
                            </li>
                            <li className="flex gap-3 justify-center md:justify-start text-sm text-text-muted">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>(215) 555-0199</span>
                            </li>
                            <li className="flex gap-3 justify-center md:justify-start text-sm text-text-muted">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>service@phillyauto.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted uppercase tracking-wider">
                    <p>&copy; 2026 Philly Auto Repair. All rights reserved. Go Birds.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a
        href={href}
        className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <li>
        <a href={href} className="text-sm text-text-muted hover:text-primary transition-colors uppercase tracking-wide font-semibold block w-fit mx-auto md:mx-0">
            {children}
        </a>
    </li>
);
