"use client";

import { motion } from "framer-motion";
import { Car, Heart, PiggyBank, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const FAMILIES = [
    {
        icon: Car,
        label: "IARDT",
        sub: "Dommages & Responsabilité",
        desc: "Auto, Moto, Habitation, Flotte, RC…",
        color: "blue",
        accent: "text-blue-400",
        bg: "bg-blue-600",
        border: "border-blue-500/20",
    },
    {
        icon: Heart,
        label: "Personnes",
        sub: "Santé & Prévoyance",
        desc: "Santé, Accident, Voyage…",
        color: "emerald",
        accent: "text-emerald-400",
        bg: "bg-emerald-600",
        border: "border-emerald-500/20",
    },
    {
        icon: PiggyBank,
        label: "Vie & Épargne",
        sub: "Capital & Protection",
        desc: "Retraite, Éducation, Emprunteur, Obsèques…",
        color: "violet",
        accent: "text-violet-400",
        bg: "bg-violet-600",
        border: "border-violet-500/20",
    },
];

export default function ComparisonHomeSection() {
    return (
        <section id="compare" className="py-32 bg-black text-white overflow-hidden relative border-y border-white/5">
            {/* HUD Elements (Tesla feel) */}
            <div className="absolute top-10 left-10 text-[8px] uppercase tracking-[0.5em] text-blue-500/30 font-mono hidden lg:block">
                SYSTEM_CHECK: OPTIMAL
            </div>
            <div className="absolute bottom-10 right-10 text-[8px] uppercase tracking-[0.5em] text-blue-500/30 font-mono hidden lg:block">
                ALGORITHM: REAL_TIME_v4
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left — Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block glass px-4 py-1 rounded-full mb-6 border-blue-500/20"
                        >
                            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                                Innovation Bénin
                            </span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-bold uppercase font-oswald leading-[0.9] mb-8 text-white tracking-tighter">
                            Le Premier <br />
                            <span className="text-gradient">
                                Comparateur National
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light max-w-xl">
                            Ne choisissez plus votre assurance au hasard. Notre algorithme analyse en temps réel
                            les offres de tous les assureurs béninois pour vous proposer le contrat idéal.
                        </p>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                { Icon: TrendingUp, label: "Taux Actualisés" },
                                { Icon: Zap, label: "Moins de 2 minutes" },
                                { Icon: ShieldCheck, label: "Toutes Catégories" },
                                { Icon: Car, label: "10+ Partenaires" },
                            ].map(({ Icon, label }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-3 bg-white/5 border border-white/10 group-hover:border-blue-500/40 transition-colors">
                                        <Icon size={16} className="text-blue-400" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">{label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/compare" className="px-10 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-center">
                                Comparer les Offres
                            </Link>
                            <Link href="/simulation" className="px-10 py-5 glass text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                                Simulation Rapide
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Interactive preview cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="space-y-6">
                            {FAMILIES.map((fam, i) => (
                                <motion.div
                                    key={fam.label}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={`/compare?cat=${fam.label.toLowerCase()}`}
                                        className="group block glass p-6 border-white/5 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 group-hover:text-blue-400 transition-all">
                                            <ArrowRight size={16} />
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                <fam.icon size={24} className={fam.accent} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${fam.accent}`}>
                                                        {fam.label}
                                                    </span>
                                                    <span className="text-[9px] text-gray-600 font-medium">— {fam.sub}</span>
                                                </div>
                                                <p className="text-[11px] text-gray-400 font-light">{fam.desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Glow Gradient behind cards */}
                        <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] bg-blue-500/5 rounded-full -z-0 blur-[120px] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ size, className }: { size?: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
