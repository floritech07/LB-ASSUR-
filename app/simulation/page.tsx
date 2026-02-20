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
        <main className="bg-zinc-50 min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold font-oswald uppercase mb-4 text-black">Simulation de besoin</h1>
                        <p className="text-gray-500">Répondez à quelques questions pour nous aider à trouver l'offre parfaite.</p>
                    </div>

                    {/* Progress bar */}
                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3, 4].map(s => (
                            <div key={s} className={`h-1 flex-1 transition-all duration-500 ${step >= s ? "bg-black" : "bg-gray-200"}`}></div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-xl font-bold mb-8 uppercase text-center">Quel type de protection cherchez-vous ?</h2>
                                <div className="grid grid-cols-1 gap-4 text-black">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => { setFormData({ ...formData, category: cat.id }); handleNext(); }}
                                            className="p-8 border border-zinc-200 bg-white hover:border-black transition-all flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-6">
                                                <cat.icon className={cat.color} size={32} />
                                                <span className="font-bold uppercase tracking-widest text-sm">{cat.title}</span>
                                            </div>
                                            <ChevronRight className="text-gray-300 group-hover:text-black" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-xl font-bold mb-8 uppercase text-center text-black">Affinez votre choix :</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                                    {subTypes[formData.category as keyof typeof subTypes]?.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => { setFormData({ ...formData, type }); handleNext(); }}
                                            className="p-6 border border-zinc-200 bg-white hover:border-black transition-all text-center font-bold uppercase text-[10px] tracking-widest"
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setStep(1)} className="mt-8 text-xs font-bold uppercase text-gray-400 hover:text-black">← Retour</button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-xl font-bold mb-8 uppercase text-center text-black">Votre priorité principale ?</h2>
                                <div className="flex flex-col gap-4 text-black text-center">
                                    {["Prix minimum", "Couverture maximale", "Rapport Qualité/Prix", "Notion de l'assureur"].map(p => (
                                        <button
                                            key={p}
                                            onClick={() => { setFormData({ ...formData, priority: p }); handleNext(); }}
                                            className={`p-6 border transition-all uppercase text-xs font-bold tracking-widest ${formData.priority === p ? "border-black bg-black text-white" : "border-gray-200 bg-white"}`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div key="4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                                    <Check size={40} />
                                </div>
                                <h2 className="text-3xl font-bold font-oswald uppercase mb-4 text-black">C'est prêt !</h2>
                                <p className="text-gray-500 mb-8">Nous avons sélectionné 5 offres correspondant à vos critères pour une assurance <span className="text-black font-bold uppercase">{formData.type}</span>.</p>

                                <div className="bg-white p-8 border border-zinc-200 text-left mb-8 text-black">
                                    <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-4">Récapitulatif de votre besoin</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between border-b border-gray-100 py-2">
                                            <span className="text-xs text-gray-500">Produit</span>
                                            <span className="text-xs font-bold uppercase">{formData.type}</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-xs text-gray-500">Priorité</span>
                                            <span className="text-xs font-bold uppercase">{formData.priority}</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="/compare"
                                    className="block w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors"
                                >
                                    Voir les offres
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
