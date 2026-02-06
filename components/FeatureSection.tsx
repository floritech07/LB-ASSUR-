"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    align?: "left" | "right" | "center";
}

export default function FeatureSection({
    title,
    subtitle,
    description,
    backgroundImage,
    align = "left",
}: FeatureSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    const alignmentClasses = {
        left: "items-start text-left pl-6 md:pl-20",
        right: "items-end text-right pr-6 md:pr-20 ml-auto",
        center: "items-center text-center mx-auto",
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-20 group">
            {/* Parallax/Zoom Background Effect */}
            <div
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-in-out scale-100 group-hover:scale-110"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            </div>

            {/* Gradient Overlays for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0 opacity-90" />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className={`absolute inset-0 z-0 bg-gradient-to-${align === 'left' ? 'r' : 'l'} from-black/60 to-transparent opacity-60`} />

            {/* Content */}
            <div
                ref={ref}
                className={`relative z-10 container mx-auto flex flex-col max-w-7xl ${alignmentClasses[align]} px-6`}
            >
                <motion.div
                    initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="overflow-hidden"
                >
                    <span className="inline-block py-1 px-3 border border-white/50 text-xs md:text-sm uppercase tracking-[0.3em] text-white/90 font-bold mb-4 backdrop-blur-sm">
                        {subtitle}
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 font-oswald text-white drop-shadow-2xl leading-[0.9]"
                >
                    {title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`h-1 w-24 bg-white mb-8 ${align === 'right' ? 'ml-auto' : ''}`}
                />

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed font-light mb-10 ${align === 'right' ? 'text-right' : 'text-left'} drop-shadow-lg`}
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="group flex items-center gap-3 border-2 border-white px-8 py-4 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 font-bold">
                        En savoir plus
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
