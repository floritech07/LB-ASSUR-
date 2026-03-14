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
        glow: "bg-blue-500/5",
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
        glow: "bg-emerald-500/5",
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
        glow: "bg-violet-500/5",
    },
];

export default function ComparisonHomeSection() {
    return (
        <section id="compare" className="py-24 bg-black text-white overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left — Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                            Innovation Bénin
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald leading-tight mb-6 text-white">
                            Le Premier Comparateur <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                National d&apos;Assurances
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base mb-8 leading-relaxed font-light">
                            Ne choisissez plus votre assurance au hasard. Notre algorithme analyse en temps réel
                            les offres de tous les assureurs béninois (L&apos;Africaine, NSIA, SUNU, SanlamAllianz…)
                            pour vous proposer celle qui correspond réellement à votre profil.
                        </p>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[
                                { Icon: TrendingUp, label: "Taux Actualisés en Temps Réel" },
                                { Icon: Zap, label: "Simulation en moins de 2 min" },
                                { Icon: ShieldCheck, label: "Toutes familles d'assurance" },
                                { Icon: Car, label: "10+ assureurs comparés" },
                            ].map(({ Icon, label }) => (
                                <div key={label} className="flex items-center gap-3">
                                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg shrink-0">
                                        <Icon size={18} className="text-blue-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/compare" className="px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-center">
                                Comparer les Offres
                            </Link>
                            <Link href="/simulation" className="px-10 py-5 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                                Faire une Simulation
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Interactive preview cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="space-y-4">
                            {FAMILIES.map((fam, i) => (
                                <motion.div
                                    key={fam.label}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={`/compare?cat=${fam.label.toLowerCase()}`}
                                        className={`group block p-5 border ${fam.border} ${fam.glow} hover:bg-white/5 transition-all`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 ${fam.bg}/20 border ${fam.border} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <fam.icon size={22} className={fam.accent} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className={`text-xs font-black uppercase tracking-widest ${fam.accent}`}>
                                                        {fam.label}
                                                    </span>
                                                    <span className="text-[9px] text-gray-600 font-light">— {fam.sub}</span>
                                                </div>
                                                <p className="text-[10px] text-gray-500 truncate">{fam.desc}</p>
                                            </div>
                                            <ShieldCheck size={14} className={`${fam.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Bottom note */}
                            <div className="pt-4 border-t border-white/5 text-center">
                                <p className="text-[9px] text-gray-700 uppercase font-bold tracking-[0.25em] mb-2">
                                    Plus de 15 points de contrôle par offre
                                </p>
                                <div className="flex justify-center gap-3">
                                    <ShieldCheck className="text-white/10" size={18} />
                                    <ShieldCheck className="text-white/40" size={18} />
                                    <ShieldCheck className="text-white/10" size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Glow decoration */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full -z-0 blur-3xl opacity-40 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
