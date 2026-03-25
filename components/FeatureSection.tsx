"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    backgroundClass: string;
    align?: "left" | "right" | "center";
}

export default function FeatureSection({
    title,
    subtitle,
    description,
    backgroundClass,
    align = "left",
}: FeatureSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    const alignmentClasses = {
        left: "items-start text-left pl-6 md:pl-32",
        right: "items-end text-right pr-6 md:pr-32 ml-auto",
        center: "items-center text-center mx-auto",
    };

    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden flex flex-col justify-center py-24 group border-b border-white/5">
            {/* Parallax/Zoom Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className={`absolute inset-0 transition-transform duration-[4s] ease-out scale-100 group-hover:scale-105 ${backgroundClass}`}
                />
            </div>

            {/* Gradient Overlays - Deep Cinematic Look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0 opacity-100" />
            <div className={`absolute inset-0 z-0 bg-gradient-to-${align === 'left' ? 'r' : 'l'} from-black/80 to-transparent opacity-90`} />

            {/* Light Bar (Tesla style) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

            {/* Content */}
            <div
                ref={ref}
                className={`relative z-10 container mx-auto flex flex-col max-w-7xl ${alignmentClasses[align]} px-6`}
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="glass inline-block py-2 px-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.4em] text-blue-400 font-bold mb-6">
                        {subtitle}
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-6xl md:text-8xl lg:text-[7rem] font-bold uppercase mb-8 font-oswald text-white leading-[0.85] tracking-tighter"
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light mb-12 ${align === 'right' ? 'text-right' : 'text-left'}`}
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <button className="glass group flex items-center gap-4 px-10 py-5 text-[11px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500 font-bold rounded-sm border-white/10 overflow-hidden">
                        <span className="relative z-10">Détails Service</span>
                        <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

