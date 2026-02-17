import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20 pb-64 md:pb-40 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/heroImage.jpg"
                    alt="Garage Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                {/* Main Content */}
                <div className="lg:col-span-7 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-4 text-cyan-400 bg-cyan-950/30 border-cyan-500/30">Philly's #1 Rated Shop</Badge>
                        <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tight">
                            Unmatched <br />
                            <span className="text-white">Performance.</span> <br />
                            <span className="text-kelly text-glow-kelly">Go Birds.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
                    >
                        We don't just fix cars; we engineer performance. <br className="hidden md:block" />
                        Specialized in German engineering, American muscle, and JDM legends.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" className="group">
                            View Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                        <a href="#contact">
                            <Button size="lg" variant="outline" className="group">
                                <MapPin className="mr-2" size={16} /> Contact Us
                            </Button>
                        </a>
                    </motion.div>
                </div>

                {/* Floating Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="lg:col-span-5 hidden lg:block"
                >
                    <div className="glass-panel p-8 rounded-xl max-w-md ml-auto relative">
                        <div className="absolute top-4 right-4 text-primary/20">
                            <MapPin size={120} />
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">South Philly HQ</h3>
                        <p className="text-text-muted mb-6 text-sm relative z-10">1100 Packer Ave, Philadelphia, PA 19148</p>

                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-sm font-semibold text-text-muted">Mon - Fri</span>
                                <span className="text-sm font-bold text-white font-mono">08:00 AM - 06:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-sm font-semibold text-text-muted">Saturday</span>
                                <span className="text-sm font-bold text-white font-mono">09:00 AM - 02:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-primary">Sunday</span>
                                <span className="text-sm font-bold text-primary font-mono uppercase">Closed For Game Day</span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <Button variant="outline" size="sm" className="w-full text-xs"> Open Now </Button>
                            <Button variant="glow" size="sm" className="w-full text-xs"> Get Directions </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-white/10 z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
                    <div className="py-6 flex flex-col items-center justify-center border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1">15+</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Years in Philly</span>
                    </div>
                    <div className="py-6 flex flex-col items-center justify-center border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1">5k+</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Cars Fixed</span>
                    </div>
                    <div className="py-6 flex flex-col items-center justify-center border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1">ASE</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Certified Techs</span>
                    </div>
                    <div className="py-6 flex flex-col items-center justify-center md:border-r-0 hover:bg-white/5 transition-colors">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1">5.0</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Star Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
