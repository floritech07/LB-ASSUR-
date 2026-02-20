"use client";

import { useState, useMemo } from "react";
import { MOCK_OFFERS } from "@/lib/data";
import { InsuranceOffer } from "@/types/insurance";
import { Search, Filter, ArrowUpDown, ShieldCheck, ChevronRight, Coins, Zap, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComparisonTool() {
    const [activeCategory, setActiveCategory] = useState<"IARD" | "VIE">("IARD");
    const [searchQuery, setSearchQuery] = useState("");
    const [budget, setBudget] = useState<number>(500000);
    const [selectedType, setSelectedType] = useState<string>("Tous");
    const [sortBy, setSortBy] = useState<"premium" | "rating" | "coverage">("premium");

    const iardTypes = ["Tous", "Assurance Auto", "Assurance Moto", "Assurance Habitation", "Assurance Santé", "Entreprise"];
    const vieTypes = ["Tous", "Assurance Vie Épargne", "Assurance Vie Retraite", "Assurance Décès", "Assurance Éducation"];

    const filteredOffers = useMemo(() => {
        return MOCK_OFFERS.filter(offer => {
            const categoryMatch = offer.category === activeCategory;
            const typeMatch = selectedType === "Tous" || offer.insuranceType === selectedType;
            const budgetMatch = offer.premium <= budget;
            const searchMatch = offer.insurer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                offer.insuranceType.toLowerCase().includes(searchQuery.toLowerCase());

            return categoryMatch && typeMatch && budgetMatch && searchMatch;
        }).sort((a, b) => {
            if (sortBy === "premium") return a.premium - b.premium;
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "coverage") return b.coverageAmount - a.coverageAmount;
            return 0;
        });
    }, [activeCategory, selectedType, budget, searchQuery, sortBy]);

    return (
        <div className="min-h-screen bg-black pb-24 text-white">
            {/* Search Header - Tripadvisor/Booking Style */}
            <div className="bg-zinc-950 pt-32 pb-20 px-6 border-b border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-oswald text-white mb-8 uppercase tracking-tight"
                    >
                        Trouvez la meilleure offre <span className="text-blue-500">en 1 clic</span>
                    </motion.h1>

                    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-2 shadow-2xl flex flex-col lg:flex-row gap-2 items-stretch lg:items-center">
                        {/* Search Input */}
                        <div className="flex-1 flex items-center px-4 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                            <Search className="text-gray-500 mr-3" size={20} />
                            <input
                                type="text"
                                placeholder="Quelle assurance cherchez-vous ?"
                                className="w-full text-sm outline-none bg-transparent text-white placeholder:text-gray-600"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Type Selector */}
                        <div className="lg:w-64 px-4 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                            <div className="flex items-center gap-2 mb-1">
                                <Filter size={14} className="text-blue-500" />
                                <span className="text-[10px] font-bold uppercase text-gray-500">Type</span>
                            </div>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full text-sm font-bold bg-transparent outline-none cursor-pointer text-white appearance-none"
                            >
                                {(activeCategory === "IARD" ? iardTypes : vieTypes).map(t => (
                                    <option key={t} value={t} className="bg-zinc-900 border-none">{t}</option>
                                ))}
                            </select>
                        </div>

                        {/* Budget Slider */}
                        <div className="lg:w-80 px-6 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center gap-2">
                                    <Coins size={14} className="text-blue-500" />
                                    <span className="text-[10px] font-bold uppercase text-gray-500">Budget Max</span>
                                </div>
                                <span className="text-xs font-black text-white">{budget.toLocaleString()} F</span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                step="10000"
                                value={budget}
                                onChange={(e) => setBudget(parseInt(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        {/* Main Action */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest transition-all lg:h-full">
                            Rechercher
                        </button>
                    </div>

                    {/* Quick Category Toggle */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => setActiveCategory("IARD")}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === "IARD" ? "bg-white text-black" : "bg-white/5 text-gray-500 hover:text-white"}`}
                        >
                            Assurances Biens (IARD)
                        </button>
                        <button
                            onClick={() => setActiveCategory("VIE")}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === "VIE" ? "bg-white text-black" : "bg-white/5 text-gray-500 hover:text-white"}`}
                        >
                            Assurances Vie & Épargne
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl mt-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar - Sort Options */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="bg-zinc-900/30 border border-white/5 p-6 sticky top-32">
                            <h3 className="font-bold uppercase text-xs tracking-widest mb-6 pb-2 border-b border-white/5 text-gray-400">Trier par</h3>
                            <div className="space-y-3">
                                {[
                                    { id: "premium", label: "Prix le plus bas", icon: Coins },
                                    { id: "rating", label: "Score de confiance", icon: Star },
                                    { id: "coverage", label: "Couverture Max", icon: ShieldCheck },
                                ].map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSortBy(option.id as any)}
                                        className={`w-full flex items-center gap-3 p-3 text-xs font-bold uppercase tracking-tighter transition-all border ${sortBy === option.id ? "bg-white text-black border-white" : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20"}`}
                                    >
                                        <option.icon size={16} />
                                        {option.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-blue-500/5 border border-blue-500/20 rounded-sm">
                                <Zap size={20} className="text-blue-500 mb-2" />
                                <h4 className="text-[10px] font-black uppercase text-blue-400 mb-1">Expert Conseil</h4>
                                <p className="text-[10px] text-gray-500 leading-relaxed font-light">
                                    Besoin d'aide pour comparer ? Nos courtiers vous rappellent gratuitement.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Results List */}
                    <div className="flex-1 space-y-6">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
                                {filteredOffers.length} offres disponibles correspondantes
                            </p>
                        </div>

                        <AnimatePresence>
                            {filteredOffers.map((offer, index) => (
                                <motion.div
                                    key={offer.id}
                                    layout
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-zinc-900/20 border border-white/5 flex flex-col md:flex-row hover:shadow-2xl hover:border-blue-500/30 transition-all group overflow-hidden"
                                >
                                    <div className="p-8 md:w-48 bg-white/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                                        <div className="w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                            <span className="text-[10px] font-black text-gray-700">LOGO</span>
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-tighter text-white">{offer.insurer}</span>
                                        <div className="flex text-blue-500 mt-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={10} fill={i < Math.floor(offer.rating) ? "currentColor" : "none"} className={i < Math.floor(offer.rating) ? "" : "text-gray-800"} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-blue-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-sm">Top Choix</span>
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{offer.insuranceType}</span>
                                                </div>
                                                <h3 className="text-xl font-bold uppercase font-oswald text-white">Garantie Excellence Bénin</h3>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-3xl font-black text-white">{offer.premium.toLocaleString()} <small className="text-[10px] uppercase text-gray-600">F.CFA</small></span>
                                                <span className="block text-[8px] uppercase font-bold text-blue-400 mt-1">Économisez 15% avec LB ASSUR</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-white/5 mb-6">
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-bold text-gray-600 uppercase">Couverture</span>
                                                <span className="block text-xs font-black text-white">{(offer.coverageAmount / 1000000).toFixed(1)}M F</span>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-bold text-gray-600 uppercase">Franchise</span>
                                                <span className="block text-xs font-black text-white">{offer.franchise.toLocaleString()} F</span>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-bold text-gray-600 uppercase">Délai Carence</span>
                                                <span className="block text-xs font-black text-white">{offer.waitingPeriod}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-bold text-gray-600 uppercase">Durée Contrat</span>
                                                <span className="block text-xs font-black text-white">{offer.duration}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {offer.guarantees.map(g => (
                                                <div key={g} className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                                                    <Check size={10} className="text-blue-500" />
                                                    <span className="text-[9px] font-bold uppercase text-gray-500">{g}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-8 md:w-56 bg-white/5 flex flex-col justify-center gap-3 md:border-l border-white/5">
                                        <button className="w-full bg-blue-600 text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                                            Voir l'offre <ChevronRight size={14} />
                                        </button>
                                        <button className="w-full border border-white/10 bg-transparent text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
                                            Fiche PDF
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredOffers.length === 0 && (
                            <div className="py-20 text-center bg-zinc-950 border border-dashed border-white/10 rounded-sm">
                                <Search size={48} className="mx-auto text-gray-700 mb-6" />
                                <h3 className="text-xl font-bold uppercase font-oswald mb-2 text-white">Aucune offre trouvée</h3>
                                <p className="text-gray-600 text-sm font-light">Ajustez votre budget ou vos critères pour voir plus de résultats.</p>
                                <button
                                    onClick={() => { setBudget(1000000); setSearchQuery(""); setSelectedType("Tous"); }}
                                    className="mt-8 text-xs font-black uppercase border-b border-blue-500 pb-1 text-blue-500 hover:text-white hover:border-white transition-all"
                                >
                                    Afficher toutes les offres
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Check = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
