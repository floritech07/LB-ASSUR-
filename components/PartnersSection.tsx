"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "SUNU Assurances", logo: "/logo_assurance/sunu_assurance.png" },
    { name: "NSIA Assurances", logo: "/logo_assurance/nsia-assurance.png" },
    { name: "Sanlam Allianz", logo: "/logo_assurance/sanlam-allianz.png" },
    { name: "AFG Assurances", logo: "/logo_assurance/afg-assurances.png" },
    { name: "Africaine des Assurances", logo: "/logo_assurance/africaine-assurance.png" },
    { name: "GAB Assurances", logo: "/logo_assurance/gab.png" },
    { name: "CIF Assurances Vie", logo: "/logo_assurance/cif_assurances_vie.png" },
    { name: "Nobila Assurances", logo: "/logo_assurance/nobila-assurance.png" }
];

export default function PartnersSection() {
    return (
        <section className="bg-black py-24 relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Écosystème LB ASSUR</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-oswald uppercase text-white tracking-tight">
                        Nos Partenaires <span className="text-blue-500">Assureurs</span>
                    </h2>
                    <div className="h-1 w-16 bg-blue-500 mx-auto mt-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            title={partner.name}
                            className="w-full h-32 md:h-40 flex items-center justify-center p-8 bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:bg-zinc-900/50 group rounded-sm"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                style={{ filter: 'none', WebkitFilter: 'none' }}
                                className="h-full w-full object-contain filter-none brightness-100 contrast-100 grayscale-0"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.name}&background=0ea5e9&color=fff&bold=true&length=2&size=128`;
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] -z-0"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-0"></div>
        </section>
    );
}
