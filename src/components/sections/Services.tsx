import { motion } from 'motion/react';
import { ArrowRight, Wrench, Car, Gauge, Cpu } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

const services = [
    {
        title: "Engine Tuning",
        description: "Stage 1-3 ECU remapping, dyno testing, and performance calibration for maximum horsepower.",
        icon: <Gauge className="w-8 h-8 text-primary" />,
    },
    {
        title: "Body Work",
        description: "Collision repair, custom body kits, paint correction, and ceramic coating.",
        icon: <Car className="w-8 h-8 text-primary" />,
    },
    {
        title: "Suspension",
        description: "Coilovers, air ride systems, alignment, and chassis reinforcement for track readiness.",
        icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
        title: "Diagnostics",
        description: "Advanced computer scanning, electrical troubleshooting, and complex engine repair.",
        icon: <Cpu className="w-8 h-8 text-primary" />,
    },
];

export const Services = () => {
    return (
        <Section id="services" className="bg-background">
            <div className="mb-16 md:flex justify-between items-end">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4">Our Expertise</Badge>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">
                        Premium Services
                    </h2>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 md:mt-0 text-text-muted max-w-sm text-right leading-relaxed"
                >
                    From routine maintenance to complete track builds, our certified technicians handle it all with precision.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full group border border-white/10 shadow-lg shadow-black/50">
                            <div className="w-14 h-14 rounded-lg bg-surface-hover flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="mb-6">
                                {service.description}
                            </CardContent>
                            <a href="#" className="flex items-center text-xs font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                                Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
