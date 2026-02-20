"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

const GLOSSARY_PREVIEW = [
    { term: "IARD", definition: "Incendie, Accidents et Risques Divers. Désigne l'assurance des dommages aux biens." },
    { term: "Franchise", definition: "Somme qui reste à la charge de l'assuré après un sinistre." },
    { term: "Délai de Carence", definition: "Période pendant laquelle les garanties ne s'appliquent pas encore." },
    { term: "Prime", definition: "Montant payé par l'assuré en échange de la couverture fournie." },
];

export default function GlossarySection() {
    return (
        <section id="glossaire" className="py-24 bg-black text-white border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Éducation & Transparence</span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase font-oswald mb-8 text-white leading-tight">
                            Comprendre pour <br />
                            <span className="text-blue-500">Mieux Choisir</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                            L'assurance ne devrait pas être un langage complexe. Nous avons simplifié pour vous les termes essentiels du marché béninois pour une transparence totale.
                        </p>
                        <Link
                            href="/education"
                            className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b-2 border-white pb-2 hover:text-blue-500 hover:border-blue-500 transition-all"
                        >
                            Voir le glossaire complet <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {GLOSSARY_PREVIEW.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-500/10 rounded-sm">
                                        <BookOpen size={16} className="text-blue-500" />
                                    </div>
                                    <h4 className="font-bold uppercase text-xs tracking-wider text-white">{item.term}</h4>
                                </div>
                                <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                                    {item.definition}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
