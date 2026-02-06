"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Search, FileSignature, ShieldCheck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Audit & Analyse",
        desc: "Analyse approfondie de l'existant pour identifier les risques réels."
    },
    {
        icon: FileSignature,
        title: "Comparatif",
        desc: "Négociation ferme auprès des compagnies pour obtenir le meilleur tarif."
    },
    {
        icon: ShieldCheck,
        title: "Souscription",
        desc: "Mise en place immédiate des garanties avec une procédure simplifiée."
    },
    {
        icon: CheckCircle2,
        title: "Accompagnement",
        desc: "Gestion dédiée et défense de vos intérêts en cas de sinistre."
    }
];

export default function ProcessSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Ambient Background for Glass Effect */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest font-oswald text-white mb-4">Notre Méthode</h2>
                    <div className="h-1 w-24 bg-white/20 mx-auto rounded-full backdrop-blur-sm"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative group h-full"
                        >
                            {/* Liquid Glass Card */}
                            <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">

                                {/* Floating Number */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-black border border-white/20 rounded-full font-oswald font-bold text-white shadow-xl z-20">
                                    {index + 1}
                                </div>

                                <div className="mt-6 mb-6 p-4 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/5 shadow-inner">
                                    <step.icon className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" size={32} />
                                </div>

                                <h3 className="text-xl font-bold uppercase font-oswald text-white mb-4 tracking-wider">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
