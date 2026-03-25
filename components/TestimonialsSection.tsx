"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Jean-Pierre T.",
        role: "Directeur PME",
        content: "Grâce à LBASSUR, nous avons réduit nos primes d'assurance de 20% tout en améliorant nos garanties. Un audit d'une précision remarquable.",
    },
    {
        name: "Marie L.",
        role: "Chef d'entreprise",
        content: "Un accompagnement humain et réactif. Lors de notre dernier sinistre, l'équipe a géré l'intégralité du dossier. Une tranquillité d'esprit précieuse.",
    },
    {
        name: "Samuel K.",
        role: "Particulier",
        content: "Enfin un courtier qui prend le temps d'expliquer les clauses complexes. LBASSUR m'a aidé à choisir la meilleure prévoyance pour ma famille.",
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-black overflow-hidden relative border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block glass px-4 py-1 rounded-full mb-6 border-blue-500/20"
                    >
                        <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[9px]">Retours Client</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter font-oswald text-white mb-6">
                        Leur Confiance
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-12 border-white/5 hover:border-blue-500/20 transition-all duration-700 relative group overflow-hidden"
                        >
                            <Quote className="absolute -top-4 -right-4 text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-1000 rotate-12" size={120} />

                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl font-oswald border border-blue-500/20 bg-blue-500/5 text-blue-400">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase text-[11px] tracking-[0.2em]">{t.name}</h4>
                                    <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1 font-medium">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-400 italic leading-relaxed font-light text-lg">
                                "{t.content}"
                            </p>

                            <div className="mt-8 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-blue-500/30 rounded-full"></div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

