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
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background with Stars/Space feel */}
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Glass Card */}
                            <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">

                                {/* Glow Effect behind number */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h3 className="text-5xl md:text-6xl font-bold font-oswald mb-4 text-white drop-shadow-lg relative z-10">
                                    {stat.value}
                                </h3>

                                <div className="h-0.5 w-12 bg-white/20 mb-4 group-hover:w-24 transition-all duration-500"></div>

                                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-400 group-hover:text-white transition-colors duration-300 font-medium relative z-10">
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
