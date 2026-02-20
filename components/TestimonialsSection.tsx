"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Jean-Pierre T.",
        role: "Directeur PME",
        content: "Grâce à LBASSUR, nous avons réduit nos primes d'assurance de 20% tout en améliorant nos garanties. Un audit d'une précision remarquable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Marie L.",
        role: "Chef d'entreprise",
        content: "Un accompagnement humain et réactif. Lors de notre dernier sinistre, l'équipe a géré l'intégralité du dossier. Une tranquillité d'esprit précieuse.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Samuel K.",
        role: "Particulier",
        content: "Enfin un courtier qui prend le temps d'expliquer les clauses complexes. LBASSUR m'a aidé à choisir la meilleure prévoyance pour ma famille.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest font-oswald text-white mb-4">
                        Ils nous font confiance
                    </h2>
                    <div className="h-1 w-24 bg-white mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900 p-8 border border-white/5 hover:border-white/20 transition-all duration-500 relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-white/10 group-hover:text-white/20 transition-colors" size={40} />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase text-sm tracking-wider">{t.name}</h4>
                                    <p className="text-gray-500 text-xs uppercase">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 italic leading-relaxed">
                                "{t.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
