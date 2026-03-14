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
        label: "Santé & Prévoyance",
        labelShort: "Personnes",
        description: "Couvre votre intégrité physique, vos frais de santé et vos voyages.",
        color: "emerald",
        colorDark: "emerald-600",
        badge: "bg-emerald-600",
    },
    {
        id: "VIE",
        label: "Vie & Épargne",
        labelShort: "Vie",
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
            animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05 } }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`bg-zinc-900/30 border border-white/5 flex flex-col md:flex-row hover:shadow-2xl hover:${colors.border} transition-all group overflow-hidden`}
        >
            {/* Insurer Panel */}
            <div className="p-6 md:w-44 bg-white/5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 gap-3">
                <div className={`w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${colors.border}`}>
                    <IconComp size={22} className={colors.accent} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-white text-center leading-tight">
                    {offer.insurer}
                </span>
                <div className={`flex gap-0.5 ${colors.accent}`}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={9} fill={i < Math.floor(offer.rating) ? "currentColor" : "none"} className={i < Math.floor(offer.rating) ? "" : "text-gray-800"} />
                    ))}
                </div>
                {offer.isMandatory && (
                    <span className="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
                        Obligatoire
                    </span>
                )}
            </div>

            {/* Main Info */}
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {offer.tag && (
                                <span className={`${colors.bg} text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-sm`}>
                                    {offer.tag}
                                </span>
                            )}
                            {offer.insuranceSubType && (
                                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                                    {offer.insuranceSubType}
                                </span>
                            )}
                        </div>
                        <h3 className="text-base font-bold uppercase font-oswald text-white leading-tight">
                            {offer.insuranceType}
                        </h3>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-white">
                            {offer.premium.toLocaleString()}
                            <small className="text-[9px] uppercase text-gray-600 font-bold ml-1">F.CFA</small>
                        </span>
                        <span className="block text-[8px] uppercase font-bold text-gray-600 mt-0.5">
                            {offer.category === "VIE" ? "/ mois" : "/ an"}
                        </span>
                        {offer.rate && (
                            <span className={`block text-[9px] font-black ${colors.accent} mt-1`}>
                                Taux garanti {offer.rate}%
                            </span>
                        )}
                    </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-4 border-y border-white/5 mb-4">
                    <div>
                        <span className="block text-[8px] font-bold text-gray-600 uppercase mb-0.5">Couverture</span>
                        <span className="text-xs font-black text-white">{(offer.coverageAmount / 1000000).toFixed(1)}M F</span>
                    </div>
                    <div>
                        <span className="block text-[8px] font-bold text-gray-600 uppercase mb-0.5">Franchise</span>
                        <span className="text-xs font-black text-white">{offer.franchise > 0 ? `${offer.franchise.toLocaleString()} F` : "Aucune"}</span>
                    </div>
                    <div>
                        <span className="block text-[8px] font-bold text-gray-600 uppercase mb-0.5">Carence</span>
                        <span className="text-xs font-black text-white">{offer.waitingPeriod}</span>
                    </div>
                    <div>
                        <span className="block text-[8px] font-bold text-gray-600 uppercase mb-0.5">Durée</span>
                        <span className="text-xs font-black text-white">{offer.duration}</span>
                    </div>
                </div>

                {/* Guarantees */}
                <div className="flex flex-wrap gap-1.5">
                    {offer.guarantees.map(g => (
                        <div key={g} className={`flex items-center gap-1 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full hover:${colors.border} transition-colors`}>
                            <CheckIcon size={8} className={colors.accent} />
                            <span className="text-[8px] font-bold uppercase text-gray-500">{g}</span>
                        </div>
                    ))}
                    {offer.optionalGuarantees.slice(0, 2).map(g => (
                        <div key={g} className="flex items-center gap-1 bg-white/3 border border-dashed border-white/5 px-2 py-0.5 rounded-full">
                            <span className="text-[8px] font-bold uppercase text-gray-700">+ {g}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Panel */}
            <div className="p-6 md:w-48 bg-white/5 flex flex-col justify-center gap-2 md:border-l border-white/5">
                <Link href={`/assureur/${offer.insurerSlug}`} className={`w-full ${colors.bg} text-white py-3 text-[9px] font-black uppercase tracking-[0.15em] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${colors.glow}`}>
                    Voir l&apos;offre <ChevronRight size={12} />
                </Link>
                <Link href="/simulation" className="w-full border border-white/10 flex items-center justify-center text-center bg-transparent text-white py-3 text-[9px] font-bold uppercase tracking-[0.15em] hover:border-white transition-colors">
                    Simuler le prix
                </Link>
                <p className="text-[8px] text-gray-700 text-center font-light leading-tight mt-1">
                    {offer.terms.slice(0, 60)}...
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
                ? true // no budget filter for Vie (monthly premiums)
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
        <div className="min-h-screen bg-black pb-24 text-white">

            {/* ── Hero Header ─────────────────────────────────────────────────── */}
            <div className="bg-zinc-950 pt-32 pb-20 px-6 border-b border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${colors.accent} mb-3 block`}>
                            Comparateur National · Bénin
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-4 uppercase tracking-tight">
                            Trouvez la Meilleure Offre{" "}
                            <span className={colors.accent}>en 1 Clic</span>
                        </h1>
                        <p className="text-gray-500 text-sm mb-8 max-w-2xl font-light">
                            {currentCategoryDef.description}
                        </p>
                    </motion.div>

                    {/* ── Category Tabs ──────────────────────────────────────────── */}
                    <div className="flex gap-3 mb-6 flex-wrap">
                        {CATEGORIES.map(cat => {
                            const isActive = activeCategory === cat.id;
                            const c = getCategoryColor(cat.id);
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all border ${isActive
                                        ? `${c.bg} text-white border-transparent`
                                        : "bg-white/5 text-gray-500 border-white/5 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    {cat.labelShort}
                                    <span className={`ml-2 text-[8px] font-light ${isActive ? "text-white/70" : "text-gray-700"}`}>
                                        {cat.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* ── Search + Filter Bar ─────────────────────────────────────── */}
                    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-2 shadow-2xl flex flex-col lg:flex-row gap-2 items-stretch lg:items-center">
                        {/* Search */}
                        <div className="flex-1 flex items-center px-4 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                            <Search className="text-gray-500 mr-3" size={18} />
                            <input
                                type="text"
                                placeholder="Assureur, type de couverture…"
                                className="w-full text-sm outline-none bg-transparent text-white placeholder:text-gray-600"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Type Selector */}
                        <div className="lg:w-64 px-4 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                            <div className="flex items-center gap-2 mb-1">
                                <Filter size={12} className={colors.accent} />
                                <span className="text-[9px] font-black uppercase text-gray-600">Type d&apos;assurance</span>
                            </div>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full text-sm font-bold bg-transparent outline-none cursor-pointer text-white appearance-none"
                            >
                                {TYPE_LISTS[activeCategory].map(t => (
                                    <option key={t} value={t} className="bg-zinc-900">{t}</option>
                                ))}
                            </select>
                        </div>

                        {/* Budget Slider — hidden for VIE */}
                        {activeCategory !== "VIE" && (
                            <div className="lg:w-72 px-6 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-2">
                                        <Coins size={12} className={colors.accent} />
                                        <span className="text-[9px] font-black uppercase text-gray-600">Budget Max / an</span>
                                    </div>
                                    <span className="text-xs font-black text-white">{budget.toLocaleString()} F</span>
                                </div>
                                <input
                                    type="range" min="10000" max="1000000" step="10000"
                                    value={budget} onChange={(e) => setBudget(parseInt(e.target.value))}
                                    className={`w-full h-0.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-${currentCategoryDef.colorDark}`}
                                />
                            </div>
                        )}

                        {/* Sort */}
                        <div className="lg:w-48 px-4 py-3 border-b lg:border-b-0 lg:border-r border-white/5">
                            <div className="flex items-center gap-2 mb-1">
                                <ArrowUpDown size={12} className={colors.accent} />
                                <span className="text-[9px] font-black uppercase text-gray-600">Trier par</span>
                            </div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortKey)}
                                className="w-full text-sm font-bold bg-transparent outline-none cursor-pointer text-white appearance-none"
                            >
                                <option value="premium" className="bg-zinc-900">Prix croissant</option>
                                <option value="rating" className="bg-zinc-900">Meilleure note</option>
                                <option value="coverage" className="bg-zinc-900">Couverture max</option>
                            </select>
                        </div>

                        <button className={`${colors.bg} hover:opacity-90 text-white px-8 py-4 font-bold uppercase text-[10px] tracking-widest transition-all lg:h-full`}>
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Results ─────────────────────────────────────────────────────── */}
            <div className="container mx-auto px-6 max-w-6xl mt-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="bg-zinc-900/30 border border-white/5 p-6 sticky top-32">
                            <h3 className="font-bold uppercase text-[9px] tracking-widest mb-5 pb-2 border-b border-white/5 text-gray-500">
                                Trier par
                            </h3>
                            <div className="space-y-2">
                                {(
                                    [
                                        { id: "premium", label: "Prix le plus bas", Icon: Coins },
                                        { id: "rating", label: "Score de confiance", Icon: Star },
                                        { id: "coverage", label: "Couverture max", Icon: ShieldCheck },
                                    ] as { id: SortKey; label: string; Icon: any }[]
                                ).map(({ id, label, Icon }) => (
                                    <button
                                        key={id}
                                        onClick={() => setSortBy(id)}
                                        className={`w-full flex items-center gap-3 p-3 text-[9px] font-bold uppercase tracking-tight transition-all border ${sortBy === id ? `${colors.bg} text-white border-transparent` : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20"}`}
                                    >
                                        <Icon size={14} />
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Expert tip */}
                            <div className={`mt-8 p-5 ${activeCategory === "IARDT" ? "bg-blue-500/5 border border-blue-500/20" : activeCategory === "PERSONNES" ? "bg-emerald-500/5 border border-emerald-500/20" : "bg-violet-500/5 border border-violet-500/20"} rounded-sm`}>
                                <Zap size={16} className={`${colors.accent} mb-2`} />
                                <h4 className={`text-[9px] font-black uppercase ${colors.accent} mb-1`}>
                                    Expert Conseil
                                </h4>
                                <p className="text-[9px] text-gray-600 leading-relaxed font-light">
                                    {activeCategory === "IARDT" && "Nos courtiers comparent les tarifs de 10+ assureurs pour votre véhicule ou bien."}
                                    {activeCategory === "PERSONNES" && "Nos conseillers santé vous guident vers la couverture médicale idéale pour votre famille."}
                                    {activeCategory === "VIE" && "Nos experts en prévoyance analysent votre profil pour maximiser votre épargne."}
                                </p>
                            </div>

                            {/* Category legend */}
                            <div className="mt-6 space-y-2">
                                <h3 className="font-bold uppercase text-[9px] tracking-widest mb-3 pb-2 border-b border-white/5 text-gray-500">
                                    Familles d&apos;assurance
                                </h3>
                                {CATEGORIES.map(cat => {
                                    const c = getCategoryColor(cat.id);
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => handleCategoryChange(cat.id)}
                                            className={`w-full text-left p-2.5 border transition-all ${activeCategory === cat.id ? `border-${cat.colorDark}/50 bg-white/5` : "border-white/5 hover:border-white/10"}`}
                                        >
                                            <span className={`block text-[9px] font-black uppercase ${c.accent}`}>{cat.labelShort}</span>
                                            <span className="block text-[8px] text-gray-700 font-light mt-0.5">{cat.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>

                    {/* Results List */}
                    <div className="flex-1 space-y-5">
                        <div className="flex justify-between items-center">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-600">
                                <span className={`${colors.accent} font-black`}>{filteredOffers.length}</span>{" "}
                                offre{filteredOffers.length !== 1 ? "s" : ""} correspondante{filteredOffers.length !== 1 ? "s" : ""}
                            </p>
                            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 border ${colors.border} ${colors.accent}`}>
                                {currentCategoryDef.label}
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
                                className="py-20 text-center bg-zinc-950 border border-dashed border-white/10"
                            >
                                <Search size={40} className="mx-auto text-gray-800 mb-5" />
                                <h3 className="text-xl font-bold uppercase font-oswald mb-2 text-white">
                                    Aucune offre trouvée
                                </h3>
                                <p className="text-gray-600 text-sm font-light mb-6">
                                    Ajustez vos critères ou augmentez votre budget.
                                </p>
                                <button
                                    onClick={() => { setBudget(1000000); setSearchQuery(""); setSelectedType("Tous"); }}
                                    className={`text-[10px] font-black uppercase border-b ${colors.border} pb-1 ${colors.accent} hover:text-white hover:border-white transition-all`}
                                >
                                    Afficher toutes les offres
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
