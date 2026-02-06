"use client";

import { motion } from "framer-motion";
import { Shield, Briefcase, Users, FileText } from "lucide-react";

const specialties = [
    {
        icon: Briefcase,
        title: "Accompagnement PME & PMI",
        description: "Solutions dédiées aux structures professionnelles pour sécuriser leur activité."
    },
    {
        icon: Shield,
        title: "Courtage en Assurance",
        description: "Intermédiaire expert pour défendre vos intérêts auprès des compagnies."
    },
    {
        icon: FileText,
        title: "Comparatif Contrats",
        description: "Analyse comparative pour vous obtenir le meilleur rapport qualité/prix."
    },
    {
        icon: Users,
        title: "Particuliers & Pros",
        description: "Une offre globale couvrant tous les besoins, personnels comme professionnels."
    }
];

export default function GridSection() {
    return (
        <section id="about" className="py-12 px-6 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialties.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/90 backdrop-blur-xl p-10 border border-white/10 hover:border-white/40 transition-all duration-500 group shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.1)] hover:-translate-y-2"
                    >
                        <div className="bg-white/5 p-4 rounded-full w-fit mb-6 group-hover:bg-white/10 transition-colors">
                            <item.icon className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                        </div>
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-4 font-oswald text-white group-hover:text-gray-200">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-light">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
