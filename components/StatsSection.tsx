"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "100%", label: "Satisfaction Client" },
    { value: "24/7", label: "Support & Assistance" },
    { value: "+50", label: "Partenaires Assureurs" },
    { value: "Rapidité", label: "Traitement Sinistres" },
];

export default function StatsSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-black border-b border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="container mx-auto relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Glass Card */}
                            <div className="glass h-full p-10 flex flex-col items-center justify-center text-center transition-all duration-700 hover:border-blue-500/30 group-hover:bg-white/[0.07]">

                                {/* Glow Effect behind number */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                <h3 className="text-6xl md:text-7xl font-bold font-oswald mb-6 text-white tracking-widest relative z-10 transition-transform duration-700 group-hover:scale-105">
                                    {stat.value}
                                </h3>

                                <div className="h-[1px] w-8 bg-blue-500/40 mb-6 group-hover:w-16 transition-all duration-700"></div>

                                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-blue-400 transition-colors duration-500 font-bold relative z-10">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

