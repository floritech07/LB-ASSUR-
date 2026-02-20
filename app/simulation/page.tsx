"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Car, Home, Heart, Plane, Users, ChevronRight, Check } from "lucide-react";

export default function SimulationPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        category: "",
        type: "",
        budget: "",
        priority: "Prix",
    });

    const categories = [
        { id: "iard", title: "IARD (Biens & Responsabilité)", icon: Shield, color: "text-blue-500" },
        { id: "vie", title: "VIE (Épargne & Prévoyance)", icon: Heart, color: "text-red-500" },
    ];

    const subTypes = {
        iard: ["Assurance Auto", "Assurance Moto", "Assurance Habitation", "Assurance Santé", "Entreprise"],
        vie: ["Assurance Vie Épargne", "Assurance Retraite", "Assurance Décès", "Assurance Éducation"],
    };

    const handleNext = () => setStep(prev => prev + 1);

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-12 text-center">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Simulation Intelligente</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-oswald uppercase mb-4 text-white">Précisez votre besoin</h1>
                        <p className="text-gray-400 font-light">Répondez à quelques questions pour nous aider à trouver l'offre parfaite.</p>
                    </div>

                    {/* Progress bar */}
                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3, 4].map(s => (
                            <div key={s} className={`h-1.5 flex-1 transition-all duration-700 rounded-full ${step >= s ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-white/10"}`}></div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Quel type de protection cherchez-vous ?</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => { setFormData({ ...formData, category: cat.id }); handleNext(); }}
                                            className="p-8 border border-white/5 bg-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all flex items-center justify-between group rounded-sm"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className={`p-4 bg-black/40 rounded-sm border border-white/5 group-hover:border-blue-500/30 transition-colors`}>
                                                    <cat.icon className={cat.color} size={32} />
                                                </div>
                                                <span className="font-bold uppercase tracking-widest text-sm text-white">{cat.title}</span>
                                            </div>
                                            <ChevronRight className="text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Sélectionnez le type de contrat :</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {subTypes[formData.category as keyof typeof subTypes]?.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => { setFormData({ ...formData, type }); handleNext(); }}
                                            className="p-6 border border-white/5 bg-white/5 hover:border-blue-500 hover:text-blue-500 transition-all text-center font-bold uppercase text-[10px] tracking-widest text-white rounded-sm"
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setStep(1)} className="mt-12 text-xs font-bold uppercase text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                                    ← Retour au choix précédent
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Quelle est votre priorité ?</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {["Prix minimum", "Couverture maximale", "Rapport Qualité/Prix", "Notion de l'assureur"].map(p => (
                                        <button
                                            key={p}
                                            onClick={() => { setFormData({ ...formData, priority: p }); handleNext(); }}
                                            className={`p-6 border transition-all uppercase text-[10px] font-black tracking-widest rounded-sm ${formData.priority === p ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "border-white/5 bg-white/5 text-gray-400 hover:border-white/20"}`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setStep(2)} className="mt-12 text-xs font-bold uppercase text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                                    ← Retour
                                </button>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div key="4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 10 }}
                                    className="w-24 h-24 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-500"
                                >
                                    <Check size={48} />
                                </motion.div>
                                <h2 className="text-3xl font-bold font-oswald uppercase mb-4 text-white">Analyse Terminée !</h2>
                                <p className="text-gray-400 mb-10 font-light">Nous avons identifié les meilleures options pour votre assurance <span className="text-blue-500 font-bold uppercase">{formData.type}</span>.</p>

                                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-white/5 text-left mb-10 rounded-sm">
                                    <h4 className="text-[10px] font-black uppercase text-blue-500 mb-6 tracking-widest">Configuration de votre Simulation</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between border-b border-white/5 pb-4">
                                            <span className="text-xs text-gray-500 uppercase font-bold">Catégorie</span>
                                            <span className="text-xs font-black uppercase text-white">{formData.category.toUpperCase()}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-4">
                                            <span className="text-xs text-gray-500 uppercase font-bold">Produit</span>
                                            <span className="text-xs font-black uppercase text-white">{formData.type}</span>
                                        </div>
                                        <div className="flex justify-between pt-2">
                                            <span className="text-xs text-gray-500 uppercase font-bold">Priorité</span>
                                            <span className="text-xs font-black uppercase text-blue-500">{formData.priority}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-1 border border-white/10 text-white py-5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                    >
                                        Recommencer
                                    </button>
                                    <a
                                        href="/compare"
                                        className="flex-[2] bg-blue-600 text-white py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                                    >
                                        Voir les 5 meilleures offres
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
