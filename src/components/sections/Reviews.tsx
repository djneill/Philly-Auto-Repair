import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const reviews = [
    {
        name: "Jason D.",
        role: "GT500 Owner",
        content: "The only place I trust with my car. The attention to detail is unmatched in Philly. These guys are the real deal.",
        rating: 5
    },
    {
        name: "Mike R.",
        role: "BMW M3 Owner",
        content: "Took my M3 in for a stage 2 tune. The difference is night and day. Worth every penny.",
        rating: 5
    },
    {
        name: "Sarah L.",
        role: "Subaru WRX STI",
        content: "Best shop in South Philly. Honest, transparent, and they know their stuff when it comes to JDM.",
        rating: 5
    }
];

export const Reviews = () => {
    return (
        <Section id="reviews" className="bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-4">
                    Client Feedback
                </h2>
                <div className="flex justify-center items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} className="fill-primary text-primary" />
                    ))}
                </div>
                <p className="text-text-muted max-w-2xl mx-auto">
                    Don't just take our word for it. Here is what the streets are saying.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full bg-surface/50 border border-white/10 shadow-lg shadow-black/50 relative p-8">
                            <Quote className="absolute top-6 right-6 text-primary/20" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-lg text-white mb-6 italic">"{review.content}"</p>

                            <div>
                                <h4 className="font-bold text-primary font-display uppercase tracking-wide">{review.name}</h4>
                                <p className="text-sm text-text-muted">{review.role}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
