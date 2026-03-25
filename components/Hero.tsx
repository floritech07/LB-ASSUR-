"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const heroGradients = [
    "from-blue-950 via-black to-slate-950",
    "from-slate-950 via-black to-blue-900",
    "from-indigo-950 via-black to-slate-900",
    "from-slate-900 via-black to-blue-950",
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroGradients.length);
        }, 8000); // Slower, more cinematic
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
            {/* Texture Overlay (Grain) - The Apple/Tesla look */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Background Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className={`absolute inset-0 z-0 bg-gradient-to-br ${heroGradients[currentImage]}`}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8 inline-block"
                >
                    <span className="glass py-2 px-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">
                        L'Assurance Réinventée
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-7xl md:text-9xl lg:text-[11rem] font-bold uppercase mb-4 text-white font-oswald tracking-tighter leading-[0.85]"
                >
                    LBASSUR
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    <span className="text-white font-medium">L'excellence en protection.</span>
                    <span className="block mt-1 opacity-70">Particuliers • Professionnels • Entreprises</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="group relative px-10 py-5 bg-white text-black text-[11px] uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Nous Contacter <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0 opacity-10"></div>
                    </a>
                    <a
                        href="#services"
                        className="glass px-10 py-5 text-white text-[11px] uppercase tracking-widest font-bold transition-all duration-500 hover:bg-white/10 hover:scale-105 active:scale-95"
                    >
                        Nos Services
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator - Minimalist SpaceX/Tesla style */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 ml-[0.4em]">Scroll</span>
            </motion.div>
        </section>
    );
}

