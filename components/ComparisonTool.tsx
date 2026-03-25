"use client";

import { useState, useMemo } from "react";
import { MOCK_OFFERS, IARDT_TYPES, PERSONNES_TYPES, VIE_TYPES } from "@/lib/data";
import { InsuranceCategory, InsuranceOffer } from "@/types/insurance";
import {
    Search, Filter, ArrowUpDown, ShieldCheck, ChevronRight, Coins, Zap,
    Star, Car, Bike, Truck, Home, Briefcase, Ship, Users, Heart,
    Plane, PiggyBank, GraduationCap, CreditCard, Flower2, AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Types & Config ───────────────────────────────────────────────────────────

type SortKey = "premium" | "rating" | "coverage";

interface CategoryDef {
    id: InsuranceCategory;
    label: string;
    labelShort: string;
    description: string;
    color: string;
    colorDark: string;
    badge: string;
}

const CATEGORIES: CategoryDef[] = [
    {
        id: "IARDT",
        label: "Dommages & Responsabilité",
        labelShort: "IARDT",
        description: "Protège vos biens (véhicules, logement, entreprise) et votre responsabilité civile.",
        color: "blue",
        colorDark: "blue-600",
        badge: "bg-blue-600",
    },
    {
        id: "PERSONNES",
        label: "Santé & Vie",
        labelShort: "Santé",
        description: "Couvre votre intégrité physique, vos frais de santé et vos projets de vie.",
        color: "emerald",
        colorDark: "emerald-600",
        badge: "bg-emerald-600",
    },
    {
        id: "VIE",
        label: "Épargne & Retraite",
        labelShort: "Épargne",
        description: "Constitution de capital, protection financière longue durée et prévoyance familiale.",
        color: "violet",
        colorDark: "violet-600",
        badge: "bg-violet-600",
    },
];

const TYPE_ICONS: Record<string, any> = {
    "Assurance Automobile": Car,
    "Assurance Moto": Bike,
    "Assurance Flotte": Truck,
    "Multirisque Habitation": Home,
    "Multirisque Professionnelle": Briefcase,
    "Assurance Transport": Ship,
    "Responsabilité Civile": Users,
    "Assurance Santé": Heart,
    "Individuelle Accident": AlertCircle,
    "Assurance Voyage": Plane,
    "Épargne & Retraite": PiggyBank,
    "Assurance Éducation": GraduationCap,
    "Assurance Emprunteur": CreditCard,
    "Assurance Obsèques": Flower2,
};

const TYPE_LISTS: Record<InsuranceCategory, string[]> = {
    IARDT: IARDT_TYPES,
    PERSONNES: PERSONNES_TYPES,
    VIE: VIE_TYPES,
};

function getCategoryColor(cat: InsuranceCategory) {
    if (cat === "IARDT") return { accent: "text-blue-500", bg: "bg-blue-600", border: "border-blue-500/30", glow: "shadow-blue-600/20" };
    if (cat === "PERSONNES") return { accent: "text-emerald-500", bg: "bg-emerald-600", border: "border-emerald-500/30", glow: "shadow-emerald-600/20" };
    return { accent: "text-violet-500", bg: "bg-violet-600", border: "border-violet-500/30", glow: "shadow-violet-600/20" };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function OfferCard({ offer, index }: { offer: InsuranceOffer; index: number }) {
    const colors = getCategoryColor(offer.category);
    const IconComp = TYPE_ICONS[offer.insuranceType] || ShieldCheck;

    return (
        <motion.div
            key={offer.id}
            layout
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05, duration: 0.6 } }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`glass border-white/5 flex flex-col md:flex-row hover:border-blue-500/20 transition-all duration-700 group overflow-hidden relative shadow-2xl`}
        >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.accent.replace('text', 'bg')} opacity-0 blur-[80px] group-hover:opacity-10 transition-opacity duration-1000`}></div>

            {/* Insurer Panel */}
            <div className="p-8 md:w-52 bg-white/[0.02] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 gap-4 relative z-10">
                <div className={`w-20 h-20 bg-black/40 border border-white/5 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-700 ${colors.border}`}>
                    <IconComp size={32} className={colors.accent} />
                </div>
                <div className="text-center">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white block mb-1">
                        {offer.insurer}
                    </span>
                    <div className={`flex gap-0.5 justify-center ${colors.accent}`}>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} fill={i < Math.floor(offer.rating) ? "currentColor" : "none"} className={i < Math.floor(offer.rating) ? "" : "text-gray-800"} />
                        ))}
                    </div>
                </div>
                {offer.isMandatory && (
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                        Premium
                    </span>
                )}
            </div>

            {/* Main Info */}
            <div className="p-8 flex-1 relative z-10">
                <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                            {offer.tag && (
                                <span className={`bg-white text-black text-[9px] font-black uppercase px-3 py-1 tracking-widest`}>
                                    {offer.tag}
                                </span>
                            )}
                            {offer.insuranceSubType && (
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
                                    {offer.insuranceSubType}
                                </span>
                            )}
                        </div>
                        <h3 className="text-3xl font-bold uppercase font-oswald text-white leading-none tracking-tight">
                            {offer.insuranceType}
                        </h3>
                    </div>
                    <div className="text-right">
                        <div className="flex items-baseline justify-end gap-2">
                            <span className="text-4xl font-black text-white tabular-nums">
                                {offer.premium.toLocaleString()}
                            </span>
                            <small className="text-[10px] uppercase text-blue-500 font-bold tracking-widest">F.CFA</small>
                        </div>
                        <span className="block text-[9px] uppercase font-bold text-gray-700 tracking-widest mt-1">
                            {offer.category === "VIE" ? "Abonnement Mensuel" : "Prime Annuelle"}
                        </span>
                    </div>
                </div>

                {/* Key Stats - Tesla HUD Style */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-white/5 mb-6">
                    <div>
                        <span className="block text-[9px] font-bold text-gray-700 uppercase tracking-widest mb-2">Garanties</span>
                        <span className="text-sm font-black text-white">{(offer.coverageAmount / 1000000).toFixed(1)}M <small className="text-gray-600">FCFA</small></span>
                    </div>
                    <div>
                        <span className="block text-[9px] font-bold text-gray-700 uppercase tracking-widest mb-2">Franchise</span>
                        <span className="text-sm font-black text-white">{offer.franchise > 0 ? `${offer.franchise.toLocaleString()} F` : "0 F"}</span>
                    </div>
                    <div>
                        <span className="block text-[9px] font-bold text-gray-700 uppercase tracking-widest mb-2">Délai</span>
                        <span className="text-sm font-black text-white">{offer.waitingPeriod}</span>
                    </div>
                    <div>
                        <span className="block text-[9px] font-bold text-gray-700 uppercase tracking-widest mb-2">Validité</span>
                        <span className="text-sm font-black text-white">{offer.duration}</span>
                    </div>
                </div>

                {/* Guarantees */}
                <div className="flex flex-wrap gap-2">
                    {offer.guarantees.map(g => (
                        <div key={g} className={`flex items-center gap-2 bg-white/[0.03] border border-white/5 px-3 py-1 rounded-full group-hover:border-blue-500/20 transition-colors duration-700`}>
                            <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full"></div>
                            <span className="text-[9px] font-bold uppercase text-gray-500 tracking-wider font-inter">{g}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Panel */}
            <div className="p-8 md:w-60 bg-white/[0.03] flex flex-col justify-center gap-3 md:border-l border-white/5 relative z-10">
                <Link href={`/assureur/${offer.insurerSlug}`} className={`w-full bg-blue-600 text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all duration-700 flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20`}>
                    Détails <ChevronRight size={14} />
                </Link>
                <Link href="/simulation" className="w-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-center text-gray-500 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white hover:border-white/20 transition-all duration-700">
                    Souscrire
                </Link>
                <p className="text-[8px] text-gray-800 text-center font-medium uppercase tracking-widest leading-none mt-2">
                    Conditions Appliquées
                </p>
            </div>
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ComparisonTool() {
    const [activeCategory, setActiveCategory] = useState<InsuranceCategory>("IARDT");
    const [searchQuery, setSearchQuery] = useState("");
    const [budget, setBudget] = useState<number>(500000);
    const [selectedType, setSelectedType] = useState<string>("Tous");
    const [sortBy, setSortBy] = useState<SortKey>("premium");

    const colors = getCategoryColor(activeCategory);
    const currentCategoryDef = CATEGORIES.find(c => c.id === activeCategory)!;

    const filteredOffers = useMemo(() => {
        return MOCK_OFFERS.filter(offer => {
            const categoryMatch = offer.category === activeCategory;
            const typeMatch = selectedType === "Tous" || offer.insuranceType === selectedType;
            const budgetMatch = activeCategory === "VIE"
                ? true // no budget filter for Vie
                : offer.premium <= budget;
            const searchMatch =
                offer.insurer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                offer.insuranceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (offer.insuranceSubType ?? "").toLowerCase().includes(searchQuery.toLowerCase());
            return categoryMatch && typeMatch && budgetMatch && searchMatch;
        }).sort((a, b) => {
            if (sortBy === "premium") return a.premium - b.premium;
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "coverage") return b.coverageAmount - a.coverageAmount;
            return 0;
        });
    }, [activeCategory, selectedType, budget, searchQuery, sortBy]);

    const handleCategoryChange = (cat: InsuranceCategory) => {
        setActiveCategory(cat);
        setSelectedType("Tous");
    };

    return (
        <div className="min-h-screen bg-black pb-32 text-white relative">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* ── Hero Header ─────────────────────────────────────────────────── */}
            <div className="bg-zinc-950 pt-44 pb-24 px-6 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/[0.02] to-transparent"></div>
                
                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${colors.accent} mb-4 block`}>
                            Système de Comparaison · Hub National
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-oswald text-white mb-6 uppercase tracking-tighter">
                            Trouvez <span className="text-gradient">l&apos;Excellence</span>
                        </h1>
                        <p className="text-gray-500 text-lg mb-12 max-w-2xl font-light leading-relaxed">
                            {currentCategoryDef.description}
                        </p>
                    </motion.div>

                    {/* ── Category Tabs ──────────────────────────────────────────── */}
                    <div className="flex gap-4 mb-10 flex-wrap">
                        {CATEGORIES.map(cat => {
                            const isActive = activeCategory === cat.id;
                            const c = getCategoryColor(cat.id);
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 border ${isActive
                                        ? `bg-white text-black border-white`
                                        : "glass text-gray-500 border-white/5 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    {cat.labelShort}
                                </button>
                            );
                        })}
                    </div>

                    {/* ── Search + Filter Bar ─────────────────────────────────────── */}
                    <div className="glass border-white/10 p-3 shadow-3xl flex flex-col lg:row gap-3 items-stretch lg:items-center">
                        <div className="flex flex-col lg:flex-row flex-1 gap-3">
                            {/* Search */}
                            <div className="flex-1 flex items-center px-6 py-4 bg-white/[0.02] border border-white/5">
                                <Search className="text-gray-700 mr-4" size={20} />
                                <input
                                    type="text"
                                    placeholder="Rechercher un assureur ou un type de risque..."
                                    className="w-full text-xs font-bold uppercase tracking-widest outline-none bg-transparent text-white placeholder:text-gray-800"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Type Selector */}
                            <div className="lg:w-72 px-6 py-4 bg-white/[0.02] border border-white/5 relative group">
                                <div className="flex items-center gap-3 mb-2">
                                    <Filter size={12} className={colors.accent} />
                                    <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Couverture</span>
                                </div>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full text-[11px] font-black uppercase tracking-widest bg-transparent outline-none cursor-pointer text-white appearance-none"
                                >
                                    {TYPE_LISTS[activeCategory].map(t => (
                                        <option key={t} value={t} className="bg-zinc-950">{t}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Budget Slider */}
                            {activeCategory !== "VIE" && (
                                <div className="lg:w-80 px-8 py-4 bg-white/[0.02] border border-white/5">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <Coins size={12} className={colors.accent} />
                                            <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Plafond Budget</span>
                                        </div>
                                        <span className="text-xs font-black text-white tabular-nums">{budget.toLocaleString()} F</span>
                                    </div>
                                    <input
                                        type="range" min="10000" max="1000000" step="10000"
                                        value={budget} onChange={(e) => setBudget(parseInt(e.target.value))}
                                        className={`w-full h-[2px] bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500`}
                                    />
                                </div>
                            )}

                            {/* Sort */}
                            <div className="lg:w-64 px-6 py-4 bg-white/[0.02] border border-white/5">
                                <div className="flex items-center gap-3 mb-2">
                                    <ArrowUpDown size={12} className={colors.accent} />
                                    <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Classement</span>
                                </div>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortKey)}
                                    className="w-full text-[11px] font-black uppercase tracking-widest bg-transparent outline-none cursor-pointer text-white appearance-none"
                                >
                                    <option value="premium" className="bg-zinc-950">Prix Croissant</option>
                                    <option value="rating" className="bg-zinc-950">Indice Confiance</option>
                                    <option value="coverage" className="bg-zinc-950">Protection Max</option>
                                </select>
                            </div>
                        </div>

                        <button className={`bg-white text-black hover:bg-gray-200 px-12 py-5 font-black uppercase text-[11px] tracking-[0.3em] transition-all duration-700 lg:h-full shadow-2xl shadow-white/5`}>
                            Analyser
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Results ─────────────────────────────────────────────────────── */}
            <div className="container mx-auto px-6 max-w-7xl mt-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar */}
                    <aside className="lg:w-72 shrink-0">
                        <div className="sticky top-40 space-y-10">
                            <div>
                                <h3 className="font-bold uppercase text-[10px] tracking-[0.4em] mb-8 pb-4 border-b border-white/5 text-gray-600">
                                    Filtre Actif
                                </h3>
                                <div className="space-y-3">
                                    {(
                                        [
                                            { id: "premium", label: "Prix Compétitif", Icon: Coins },
                                            { id: "rating", label: "Meilleure Note", Icon: Star },
                                            { id: "coverage", label: "Garanties Max", Icon: ShieldCheck },
                                        ] as { id: SortKey; label: string; Icon: any }[]
                                    ).map(({ id, label, Icon }) => (
                                        <button
                                            key={id}
                                            onClick={() => setSortBy(id)}
                                            className={`w-full flex items-center justify-between p-4 text-[10px] font-black uppercase tracking-widest transition-all duration-700 border ${sortBy === id ? `bg-white text-black border-white` : "bg-white/[0.02] text-gray-700 border-white/5 hover:border-white/10"}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <Icon size={14} />
                                                {label}
                                            </div>
                                            {sortBy === id && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Expert Card */}
                            <div className="glass p-8 border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                    <Zap size={40} className="animate-pulse" />
                                </div>
                                <h4 className="text-[10px] font-black uppercase text-blue-400 tracking-[0.4em] mb-4">
                                    Data Insights
                                </h4>
                                <p className="text-[11px] text-gray-600 leading-relaxed font-light">
                                    Analyse prédictive basée sur les retours sinistres et la solidité financière des assureurs partenaires.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Results List */}
                    <div className="flex-1 space-y-8">
                        <div className="flex justify-between items-center mb-10">
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
                                <span className="text-white font-black">{filteredOffers.length}</span> Solutions Identifiées
                            </p>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1 border border-white/10 text-gray-500`}>
                                Segment : {currentCategoryDef.labelShort}
                            </span>
                        </div>

                        <AnimatePresence mode="popLayout">
                            {filteredOffers.map((offer, index) => (
                                <OfferCard key={offer.id} offer={offer} index={index} />
                            ))}
                        </AnimatePresence>

                        {filteredOffers.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-32 text-center glass border-dashed border-white/10"
                            >
                                <Search size={60} className="mx-auto text-gray-900 mb-8" />
                                <h3 className="text-2xl font-bold uppercase font-oswald mb-4 text-white tracking-widest">
                                    Aucune Corrélation
                                </h3>
                                <p className="text-gray-600 text-sm font-light mb-10 max-w-xs mx-auto">
                                    Universalisez vos critères de recherche pour obtenir plus de résultats.
                                </p>
                                <button
                                    onClick={() => { setBudget(1000000); setSearchQuery(""); setSelectedType("Tous"); }}
                                    className={`text-[10px] font-black uppercase border-b border-blue-500 pb-2 text-blue-500 hover:text-white hover:border-white transition-all duration-700 tracking-[0.3em]`}
                                >
                                    Réinitialiser
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const CheckIcon = ({ size, className }: { size: number; className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
