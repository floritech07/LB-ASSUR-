"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const heroGradients = [
    "bg-gradient-to-br from-blue-950 via-black to-slate-900",
    "bg-gradient-to-tr from-indigo-950 via-black to-blue-900",
    "bg-gradient-to-bl from-slate-900 via-black to-indigo-950",
    "bg-gradient-to-tl from-blue-900 via-black to-slate-900",
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroGradients.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
            {/* Background Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className={`absolute inset-0 z-0 ${heroGradients[currentImage]}`}
                >
                    <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 inline-block"
                >
                    <span className="py-2 px-4 border border-white/30 rounded-full bg-black/30 backdrop-blur-md text-xs md:text-sm uppercase tracking-[0.2em] text-gray-200">
                        L'Assurance Réinventée
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase mb-6 text-white font-oswald drop-shadow-2xl tracking-normal"
                >
                    LBASSUR
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md"
                >
                    Votre partenaire de confiance pour une protection optimale.
                    <span className="block mt-2 font-normal text-white">Particuliers • Professionnels • Entreprises</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold overflow-hidden hover:bg-gray-200 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Nous Contacter <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 border border-white text-white text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                        Nos Services
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50"></div>
            </motion.div>
        </section>
    );
}
