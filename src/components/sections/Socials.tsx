import { motion } from 'motion/react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: '#', color: '#E1306C' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#', color: '#0077B5' },
    { name: 'Facebook', icon: FaFacebook, href: '#', color: '#1877F2' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: '#1DA1F2' },
    { name: 'YouTube', icon: FaYoutube, href: '#', color: '#FF0000' },
];



export const Socials = () => {
    return (
        <section className="relative w-full min-h-[600px] overflow-hidden flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/kelly-green.webp"
                    alt="Fly With Us Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex-1 flex flex-col justify-between py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-12 text-transparent"
                    style={{
                        WebkitTextStroke: '2px black',
                        WebkitTextFillColor: 'white',
                    }}
                >
                    Fly With Us
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12"
                >
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            className="group flex flex-col items-center gap-2"
                            style={{ '--social-color': social.color } as React.CSSProperties}
                        >
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-zinc-800 text-white group-hover:bg-[var(--social-color)] group-hover:text-white transition-all duration-300">
                                <social.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{social.name}</span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
