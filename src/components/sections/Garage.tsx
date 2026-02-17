import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const projects = [
    {
        title: "GT500 Custom Build",
        category: "Step 2 Tune",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-2 h-[500px]"
    },
    {
        title: "Lift Station 4",
        category: "Suspension Overhaul",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop",
        className: "md:col-span-1 h-[240px]"
    },
    {
        title: "Stage 2 Tune",
        category: "Performance",
        image: "/images/stage2.jpg",
        className: "md:col-span-1 h-[240px]"
    },
    {
        title: "Restoration",
        category: "Classic Rebuild",
        image: "/images/restore.jpg",
        className: "md:col-span-2 h-[240px]"
    },
];

export const Garage = () => {
    return (
        <Section id="garage" className="bg-surface/30">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-2">The Garage</h2>
                </div>
                <Button variant="ghost" className="hidden md:flex">
                    View All Projects <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative group overflow-hidden rounded-lg ${project.className}`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-6 left-6 right-6">
                            <Badge className="mb-2 bg-primary/20 text-primary border-transparent">{project.category}</Badge>
                            <h3 className="text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors inline-block">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}

                {/* Fill the last spot with a text/cta card or just another image if needed. 
            For this grid math (2+1+1+2 = 6 slots, grid-cols-4. 
            Row 1: Item 1 (2 cols), Item 2 (1 col), Item 3 (1 col) -> 4 cols used. 
            Row 2: Item 1 continues (2 rows), Item 4 (2 cols) -> Wait.
            Item 1 is col-span-2 row-span-2.
            So Row 1 takes cols 1-2. Item 2 takes col 3. Item 3 takes col 4.
            Row 2 cols 1-2 are taken by Item 1. Item 4 takes cols 3-4? 
            Let's check classNames.
            Item 1: md:col-span-2 md:row-span-2
            Item 2: md:col-span-1
            Item 3: md:col-span-1
            Item 4: md:col-span-2
            
            Grid flow:
            [ 1 1 2 3 ]
            [ 1 1 4 4 ]
            
            This works perfectly for a 4-column grid.
        */}
            </div>

            <div className="mt-8 md:hidden">
                <Button variant="ghost" className="w-full">
                    View All Projects <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>
        </Section>
    );
};
