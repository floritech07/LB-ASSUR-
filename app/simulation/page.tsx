"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Car, Heart, ChevronRight, Check, Briefcase, Zap, Clock, Coins } from "lucide-react";

// ─── Tarifs tirés du document PDF ─────────────────────────────────────────────

type TarifMap = Record<string, Record<string, Record<string, Record<string, number>>>>;

const AUTO_TARIFFS: TarifMap = {
    "Promenade & Affaires": {
        "7-10 CV": {
            "Essence": { "1 MOIS": 21537, "2 MOIS": 26474, "3 MOIS": 31413, "6 MOIS": 38201, "1 AN": 54632 },
            "Diesel": { "1 MOIS": 24765, "2 MOIS": 30625, "3 MOIS": 36486, "6 MOIS": 44545, "1 AN": 63858 }
        },
        "11-14 CV": {
            "Essence": { "1 MOIS": 24765, "2 MOIS": 30625, "3 MOIS": 36486, "6 MOIS": 44545, "1 AN": 63858 },
            "Diesel": { "1 MOIS": 29610, "2 MOIS": 36855, "3 MOIS": 44097, "6 MOIS": 54059, "1 AN": 77697 }
        }
    },
    "Transport Propre Compte": {
        "7-10 CV": {
            "Essence": { "1 MOIS": 29556, "2 MOIS": 36784, "3 MOIS": 44013, "6 MOIS": 53953, "1 AN": 78142 },
            "Diesel": { "1 MOIS": 38171, "2 MOIS": 47861, "3 MOIS": 57552, "6 MOIS": 70876, "1 AN": 102758 }
        },
        "11-14 CV": {
            "Essence": { "1 MOIS": 38171, "2 MOIS": 47861, "3 MOIS": 57552, "6 MOIS": 70876, "1 AN": 102758 },
            "Diesel": { "1 MOIS": 46390, "2 MOIS": 58429, "3 MOIS": 70467, "6 MOIS": 87021, "1 AN": 126241 }
        }
    }
};

// ─── Types & Données ──────────────────────────────────────────────────────────

type FormData = {
    category: string;
    type: string;
    autoUsage: string;
    autoPower: string;
    autoEnergy: string;
    autoDuration: string;
    priority: string;
};

const CATEGORIES = [
    { id: "iardt", title: "IARDT (Dommages & RC)", icon: Shield, color: "text-blue-500", glow: "border-blue-500/50" },
    { id: "personnes", title: "PERSONNES (Santé & Prévoyance)", icon: Heart, color: "text-emerald-500", glow: "border-emerald-500/50" },
    { id: "vie", title: "VIE (Épargne & Retraite)", icon: Coins, color: "text-violet-500", glow: "border-violet-500/50" },
];

const SUB_TYPES: Record<string, string[]> = {
    iardt: ["Assurance Auto", "Assurance Moto", "Assurance Habitation", "Multirisque Pro", "Responsabilité Civile"],
    personnes: ["Assurance Santé", "Individuelle Accident", "Assurance Voyage"],
    vie: ["Épargne & Retraite", "Assurance Éducation", "Assurance Obsèques"],
};

// ─── Composant Principal ──────────────────────────────────────────────────────

export default function SimulationPage() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        category: "",
        type: "",
        autoUsage: "",
        autoPower: "",
        autoEnergy: "",
        autoDuration: "",
        priority: "",
    });

    // Génération dynamique des étapes selon le parcours choisi
    const getFlowSteps = () => {
        const flow = [
            { id: "category", title: "Famille d'assurance" },
            { id: "type", title: "Type de contrat" },
        ];

        if (formData.type === "Assurance Auto") {
            flow.push(
                { id: "autoUsage", title: "Usage du véhicule" },
                { id: "autoPower", title: "Puissance fiscale" },
                { id: "autoEnergy", title: "Carburant" },
                { id: "autoDuration", title: "Durée souhaitée" }
            );
        } else if (formData.type) {
            flow.push({ id: "priority", title: "Votre priorité" });
        }

        flow.push({ id: "result", title: "Résultat" });
        return flow;
    };

    const steps = getFlowSteps();
    const currentStep = steps[currentStepIndex];
    const isAutoFlow = formData.type === "Assurance Auto";

    const nextStep = () => setCurrentStepIndex(p => p + 1);
    const prevStep = () => setCurrentStepIndex(p => p - 1);

    const updateForm = (key: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        nextStep();
    };

    // Calcul du tarif exact pour l'assurance auto
    const getAutoPrice = () => {
        if (!isAutoFlow || !formData.autoUsage || !formData.autoPower || !formData.autoEnergy || !formData.autoDuration) return null;
        try {
            return AUTO_TARIFFS[formData.autoUsage][formData.autoPower][formData.autoEnergy][formData.autoDuration];
        } catch (error) {
            return null;
        }
    };

    const autoPrice = getAutoPrice();

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-12 text-center">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">
                            Simulation Intelligente
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold font-oswald uppercase mb-4 text-white">
                            Précisez votre besoin
                        </h1>
                        <p className="text-gray-400 font-light">
                            {isAutoFlow ? "Obtenez un tarif précis et instantané pour votre véhicule." : "Répondez à quelques questions pour cibler la meilleure offre."}
                        </p>
                    </div>

                    {/* Progress bar */}
                    <div className="flex gap-2 mb-12">
                        {steps.map((s, idx) => (
                            <div
                                key={s.id}
                                className={`h-1.5 flex-1 transition-all duration-700 rounded-full ${idx <= currentStepIndex ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-white/10"}`}
                            />
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {/* ÉTAPE 1: Catégorie */}
                            {currentStep.id === "category" && (
                                <motion.div key="category" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Quel domaine cherchez-vous ?</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {CATEGORIES.map(cat => (
                                            <button
                                                key={cat.id}
                                                onClick={() => updateForm("category", cat.id)}
                                                className="p-8 border border-white/5 bg-zinc-900/50 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-between group rounded-sm"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className={`p-4 bg-black/40 rounded-sm border border-white/5 transition-colors group-hover:${cat.glow}`}>
                                                        <cat.icon className={cat.color} size={32} />
                                                    </div>
                                                    <span className="font-bold uppercase tracking-widest text-sm text-white">{cat.title}</span>
                                                </div>
                                                <ChevronRight className="text-gray-600 group-hover:text-white transition-all" />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* ÉTAPE 2: Type */}
                            {currentStep.id === "type" && (
                                <motion.div key="type" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Sélectionnez le type exact :</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {SUB_TYPES[formData.category]?.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => updateForm("type", type)}
                                                className="p-6 border border-white/5 bg-zinc-900/50 hover:border-blue-500 hover:text-blue-500 transition-all text-center font-bold uppercase text-[10px] tracking-widest text-white rounded-sm"
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                    <BackButton onClick={prevStep} />
                                </motion.div>
                            )}

                            {/* ÉTAPES AUTO SPÉCIFIQUES */}
                            {currentStep.id === "autoUsage" && (
                                <motion.div key="autoUsage" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Quel est l'usage de votre véhicule ?</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { val: "Promenade & Affaires", desc: "Déplacements personnels et professionnels classiques", icon: Briefcase },
                                            { val: "Transport Propre Compte", desc: "Transport de marchandises ou matériel vous appartenant", icon: Car },
                                        ].map(item => (
                                            <button key={item.val} onClick={() => updateForm("autoUsage", item.val)} className="p-6 border border-white/5 bg-zinc-900/50 hover:border-blue-500 hover:bg-blue-500/5 transition-all text-left group">
                                                <div className="flex items-center gap-4 mb-2">
                                                    <item.icon size={20} className="text-blue-500" />
                                                    <span className="font-bold uppercase tracking-widest text-sm text-white">{item.val}</span>
                                                </div>
                                                <p className="text-gray-500 text-xs pl-9">{item.desc}</p>
                                            </button>
                                        ))}
                                    </div>
                                    <BackButton onClick={prevStep} />
                                </motion.div>
                            )}

                            {currentStep.id === "autoPower" && (
                                <motion.div key="autoPower" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Puissance fiscale (Chevaux-Vapeur) ?</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["7-10 CV", "11-14 CV"].map(val => (
                                            <button key={val} onClick={() => updateForm("autoPower", val)} className="p-8 border border-white/5 bg-zinc-900/50 hover:border-blue-500 hover:text-blue-500 transition-all text-center font-black uppercase text-lg tracking-widest text-white">
                                                {val}
                                                <span className="block text-[9px] font-bold text-gray-500 mt-2">{val === "7-10 CV" ? "Petite cylindrée" : "Grande cylindrée"}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <BackButton onClick={prevStep} />
                                </motion.div>
                            )}

                            {currentStep.id === "autoEnergy" && (
                                <motion.div key="autoEnergy" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Quel type de carburant ?</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Essence", "Diesel"].map(val => (
                                            <button key={val} onClick={() => updateForm("autoEnergy", val)} className="p-8 border border-white/5 bg-zinc-900/50 hover:border-blue-500 hover:text-blue-500 transition-all text-center font-black uppercase text-lg tracking-widest text-white flex flex-col items-center gap-3">
                                                <Zap size={24} className={val === "Essence" ? "text-yellow-500" : "text-gray-400"} />
                                                {val}
                                            </button>
                                        ))}
                                    </div>
                                    <BackButton onClick={prevStep} />
                                </motion.div>
                            )}

                            {currentStep.id === "autoDuration" && (
                                <motion.div key="autoDuration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Durée de couverture souhaitée ?</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {["1 MOIS", "2 MOIS", "3 MOIS", "6 MOIS", "1 AN"].map(val => (
                                            <button key={val} onClick={() => updateForm("autoDuration", val)} className="p-6 border border-white/5 bg-zinc-900/50 hover:border-blue-500 hover:text-blue-500 transition-all text-center font-bold uppercase text-xs tracking-widest text-white flex flex-col items-center gap-2">
                                                <Clock size={16} className="text-blue-500" />
                                                {val}
                                            </button>
                                        ))}
                                    </div>
                                    <BackButton onClick={prevStep} />
                                </motion.div>
                            )}

                            {/* ÉTAPE PRIORITY (Hors Auto) */}
                            {currentStep.id === "priority" && (
                                <motion.div key="priority" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-xl font-bold mb-8 uppercase text-center text-white/90">Quelle est votre priorité ?</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {["Prix minimum", "Couverture maximale", "Rapport Qualité/Prix"].map(p => (
                                            <button key={p} onClick={() => updateForm("priority", p)} className="p-6 border border-white/5 bg-zinc-900/50 hover:border-blue-500 transition-all uppercase text-[10px] font-black tracking-widest text-white">
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                    <BackButton onClick={prevStep} />
                                </motion.div>
                            )}

                            {/* ÉTAPE FINALE: Résultat */}
                            {currentStep.id === "result" && (
                                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10 }} className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
                                        <Check size={40} />
                                    </motion.div>

                                    {isAutoFlow ? (
                                        <>
                                            <h2 className="text-3xl font-bold font-oswald uppercase mb-2 text-white">Tarif Immédiat</h2>
                                            <p className="text-gray-400 mb-8 font-light text-sm">Responsabilité Civile Obligatoire — L'Africaine des Assurances</p>

                                            <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 p-8 mb-8 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"><Car size={120} /></div>
                                                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                                                    <div className="text-left space-y-2">
                                                        <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">{formData.autoUsage}</span>
                                                        <h3 className="text-2xl font-black uppercase text-white">{formData.autoPower} • {formData.autoEnergy}</h3>
                                                        <span className="text-xs font-bold uppercase text-gray-500">Durée : {formData.autoDuration}</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Prime Nette</span>
                                                        <span className="text-4xl font-black text-white">{autoPrice?.toLocaleString()}</span>
                                                        <span className="text-sm font-bold text-blue-500 ml-2">F.CFA</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-3xl font-bold font-oswald uppercase mb-4 text-white">Analyse Terminée !</h2>
                                            <p className="text-gray-400 mb-10 font-light">Nous avons identifié les meilleures options pour votre assurance <span className="text-blue-500 font-bold uppercase">{formData.type}</span>.</p>
                                        </>
                                    )}

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button onClick={() => { setCurrentStepIndex(0); setFormData({ category: "", type: "", autoUsage: "", autoPower: "", autoEnergy: "", autoDuration: "", priority: "" }) }} className="flex-1 border border-white/10 text-white py-5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                            Nouvelle Simulation
                                        </button>
                                        <a href={`/compare?type=${encodeURIComponent(formData.type)}`} className="flex-[2] bg-blue-600 text-white py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                                            {isAutoFlow ? "Comparer avec les autres offres" : "Voir les meilleures offres"}
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

const BackButton = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="mt-10 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center justify-center w-full gap-2">
        ← Étape Précédente
    </button>
);
