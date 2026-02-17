import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { events } from '../../data/carScene';

export const CarScene = () => {
    return (
        <Section id="car-scene" className="bg-background border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Column */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight mb-4">
                        Philly <br />
                        <span className="text-primary text-glow">Car Scene</span>
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                        Join us at local meets. We're proud members of the Philadelphia automotive community.
                    </p>
                </div>

                {/* Cards Column */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-surface/30 hover:bg-surface/50 transition-colors group p-6 flex flex-col justify-between border border-white/10 shadow-lg shadow-black/50">
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <event.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="px-3 py-1 rounded border border-white/10 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                                            {event.date}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                    <p className="text-sm text-text-muted mb-6">
                                        {event.location} <span className="mx-1 text-primary">•</span> {event.time}
                                    </p>
                                </div>

                                <div className="border-t border-white/5 pt-4">
                                    <a href="#" className="flex items-center text-xs font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                                        {event.cta} <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
