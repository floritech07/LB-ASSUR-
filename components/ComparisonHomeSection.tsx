"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function ComparisonHomeSection() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Innovation Bénin</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald leading-tight mb-8 text-white">
                            Le Premier Comparateur <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">National d'Assurances</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                            Ne choisissez plus votre assurance au hasard. Notre algorithme analyse en temps réel les offres de tous les assureurs béninois
                            (Africaine, NSIA, SUNU, SanlamAllianz...) pour vous proposer celle qui correspond réellement à votre profil.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg"><TrendingUp size={24} className="text-blue-400" /></div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Taux Actualisés</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg"><Zap size={24} className="text-blue-400" /></div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Simulation en 2 min</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/compare"
                                className="px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-center"
                            >
                                Comparer les Offres
                            </Link>
                            <Link
                                href="/simulation"
                                className="px-10 py-5 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
                            >
                                Faire une Simulation
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 bg-zinc-900 border border-white/10 p-8 shadow-2xl backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Aperçu Comparatif</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-red-500/50 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-500/50 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-500/50 rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-4 bg-black/40 border border-white/5 flex items-center justify-between group-hover:border-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500">L{i}</div>
                                            <div>
                                                <div className="h-2 w-24 bg-white/10 mb-2"></div>
                                                <div className="h-2 w-16 bg-white/5"></div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="h-3 w-12 bg-white/20 mb-2 ml-auto"></div>
                                            <div className="h-2 w-8 bg-white/5 ml-auto"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em] mb-4">Plus de 15 points de contrôle</p>
                                <div className="flex justify-center gap-4">
                                    <ShieldCheck className="text-white/10" />
                                    <ShieldCheck className="text-white/40" />
                                    <ShieldCheck className="text-white/10" />
                                </div>
                            </div>
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full -z-0 blur-3xl opacity-50"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
