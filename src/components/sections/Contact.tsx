import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const Contact = () => {
    return (
        <Section id="contact-us" className="bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">
                        Get In <span className="text-primary text-glow">Touch</span>
                    </h2>
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                        Ready to elevate your ride? Schedule an appointment or drop by the shop. We're here to talk performance.
                    </p>

                    <div className="space-y-6">
                        <ContactItem icon={<Phone className="w-5 h-5" />} label="Call Us" value="(215) 555-0199" href="tel:2155550199" />
                        <ContactItem icon={<Mail className="w-5 h-5" />} label="Email Us" value="service@phillyauto.com" href="mailto:service@phillyauto.com" />
                        <ContactItem icon={<MapPin className="w-5 h-5" />} label="Visit Us" value="1100 Packer Ave, Philadelphia, PA" href="#" />
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="p-8 border border-white/10 bg-surface/50 backdrop-blur-sm shadow-2xl shadow-black/50">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-muted ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                                        placeholder="Joey B."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-text-muted ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                                        placeholder="(215) ..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-muted ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                                    placeholder="joey@philly.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-muted ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 resize-none"
                                    placeholder="Tell us about your build..."
                                />
                            </div>

                            <Button className="w-full mt-4 group" size="lg">
                                Send Message <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) => (
    <a href={href} className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
            {icon}
        </div>
        <div>
            <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">{label}</p>
            <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{value}</p>
        </div>
    </a>
);
