"use client";

import { motion } from "framer-motion";

const partners = [
    "AXA", "ALLIANZ", "NSIA", "SUNU", "SANLAM", "ATLANTIQUE", "GNA", "SAHAM"
];

export default function PartnersSection() {
    return (
        <section className="bg-zinc-950 py-24 relative overflow-hidden">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-bold mb-8">Ils nous font confiance</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative cursor-default"
                        >
                            {/* Glass Tile */}
                            <div className="px-10 py-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-lg shadow-lg hover:shadow-white/5 hover:bg-white/10 transition-all duration-300">
                                <span className="text-xl md:text-2xl font-bold font-oswald text-gray-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest drop-shadow-sm">
                                    {partner}
                                </span>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .group:hover .animate-shine {
          animation: shine 1.5s;
        }
      `}</style>
        </section>
    );
}
