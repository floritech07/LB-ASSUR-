"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Video, User, ChevronRight, X, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export default function BookingSection() {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

    const types = [
        { id: "audit", title: "Audit de Contrat", desc: "Analyse experte de vos risques", icon: CalendarIcon },
        { id: "devis", title: "Demande de Devis", desc: "Auto, Santé, Habitation, Pro", icon: Video },
        { id: "contact", title: "Question Générale", desc: "Demande d'information ou support", icon: MessageSquare },
    ];

    const timeSlots = ["09:00", "10:30", "14:00", "15:30", "17:00"];
    const dates = [
        { label: "Lun", day: "24", month: "Fév" },
        { label: "Mar", day: "25", month: "Fév" },
        { label: "Mer", day: "26", month: "Fév" },
        { label: "Jeu", day: "27", month: "Fév" },
        { label: "Ven", day: "28", month: "Fév" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("success");
    };

    if (formStatus === "success") {
        return (
            <section id="booking" className="py-32 bg-black text-white border-y border-white/5 flex items-center justify-center min-h-[600px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <CheckCircle2 size={80} className="text-blue-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold font-oswald uppercase mb-4">Demande Envoyée !</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                        Merci pour votre confiance. Notre équipe étudie votre demande et vous recontactera sous 24h ouvrées par téléphone ou par email.
                    </p>
                    <button
                        onClick={() => { setFormStatus("idle"); setStep(1); setSelectedType(""); setSelectedDate(""); setSelectedTime(""); }}
                        className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
                    >
                        Nouvelle demande
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="booking" className="py-24 bg-black text-white border-y border-white/5 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Plateforme de Contact</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-6">
                            Planifions votre <span className="text-blue-500">Protection</span>
                        </h2>
                        <div className="h-0.5 w-24 bg-blue-500 mx-auto"></div>
                        <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                            Que ce soit pour un audit complet ou une simple demande d'information, réservez votre créneau en quelques clics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Status Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 pb-4 border-b border-white/5">Progression</h4>
                                <div className="space-y-6">
                                    {[
                                        { s: 1, label: "Type de demande" },
                                        { s: 2, label: "Date & Heure" },
                                        { s: 3, label: "Détails & Envoi" }
                                    ].map((item) => (
                                        <div key={item.s} className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step >= item.s ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-zinc-800 text-gray-600 border border-white/5"}`}>
                                                {item.s}
                                            </div>
                                            <span className={`text-[10px] uppercase font-bold tracking-widest ${step >= item.s ? "text-white" : "text-gray-600"}`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 bg-zinc-900/20 rounded-sm">
                                <Mail size={24} className="text-blue-500 mb-4" />
                                <h4 className="text-sm font-bold uppercase mb-2">Besoin d'aide ?</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Si vous préférez nous appeler directement : <br />
                                    <span className="text-white font-bold mt-2 block">+229 XX XX XX XX</span>
                                </p>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="lg:col-span-8 bg-zinc-900/30 border border-white/10 p-8 md:p-12 backdrop-blur-md shadow-2xl relative min-h-[500px]">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <h3 className="text-xl font-bold uppercase font-oswald text-white mb-2">Comment pouvons-nous vous aider ?</h3>
                                        <p className="text-gray-500 text-sm mb-8">Sélectionnez la nature de votre demande pour être dirigé vers le bon expert.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                            {types.map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => { setSelectedType(t.id); setStep(2); }}
                                                    className={`flex items-center gap-6 p-6 border transition-all text-left ${selectedType === t.id ? "bg-blue-500/10 border-blue-500" : "bg-white/5 border-white/5 hover:border-white/20"}`}
                                                >
                                                    <div className={`p-4 rounded-lg bg-black/40 ${selectedType === t.id ? "text-blue-500" : "text-gray-500"}`}>
                                                        <t.icon size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold uppercase text-sm text-white mb-1">{t.title}</h4>
                                                        <p className="text-xs text-gray-500">{t.desc}</p>
                                                    </div>
                                                    <ChevronRight className="ml-auto text-gray-700" size={20} />
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-10"
                                    >
                                        <div>
                                            <h3 className="text-xl font-bold uppercase font-oswald text-white mb-2">Choisissez votre date</h3>
                                            <p className="text-gray-500 text-sm">Disponibilités pour la semaine en cours.</p>
                                        </div>

                                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                                            {dates.map((d) => (
                                                <button
                                                    key={d.day}
                                                    onClick={() => setSelectedDate(`${d.label} ${d.day} ${d.month}`)}
                                                    className={`min-w-[80px] p-4 border flex flex-col items-center transition-all ${selectedDate === `${d.label} ${d.day} ${d.month}` ? "bg-white text-black border-white" : "bg-black/40 border-white/5 text-gray-500 hover:border-white/20"}`}
                                                >
                                                    <span className="text-[10px] uppercase font-bold mb-1">{d.label}</span>
                                                    <span className="text-xl font-black">{d.day}</span>
                                                    <span className="text-[10px] uppercase font-bold mt-1">{d.month}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold uppercase font-oswald text-white mb-6">Heure souhaitée</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                                {timeSlots.map((time) => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`py-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${selectedTime === time ? "bg-blue-500 text-white border-blue-500" : "bg-black/40 border-white/5 text-gray-500 hover:border-white/20"}`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-8 border-t border-white/5">
                                            <button onClick={() => setStep(1)} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">← Retour</button>
                                            <button
                                                disabled={!selectedDate || !selectedTime}
                                                onClick={() => setStep(3)}
                                                className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${selectedDate && selectedTime ? "bg-white text-black hover:bg-gray-200" : "bg-zinc-800 text-gray-600 cursor-not-allowed"}`}
                                            >
                                                Continuer
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div>
                                            <h3 className="text-xl font-bold uppercase font-oswald text-white mb-2">Détails de contact</h3>
                                            <p className="text-gray-500 text-sm">Finissons de préparer votre rendez-vous.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="bg-zinc-800/50 p-4 border border-white/5 mb-8 flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                                        <Clock size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[8px] uppercase font-bold text-gray-500">Créneau sélectionné</p>
                                                        <p className="text-xs font-bold text-white">{selectedDate} à {selectedTime}</p>
                                                    </div>
                                                </div>
                                                <button type="button" onClick={() => setStep(2)} className="text-[8px] font-black uppercase text-blue-500 hover:underline">Modifier</button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Nom complet</label>
                                                    <input required type="text" className="w-full bg-black/40 border border-white/5 p-4 text-white text-sm outline-none focus:border-blue-500 focus:bg-black/60 transition-all placeholder:text-gray-700" placeholder="Jean Dupont" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Téléphone</label>
                                                    <input required type="tel" className="w-full bg-black/40 border border-white/5 p-4 text-white text-sm outline-none focus:border-blue-500 focus:bg-black/60 transition-all placeholder:text-gray-700" placeholder="+229 XX..." />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Email professionnel</label>
                                                <input required type="email" className="w-full bg-black/40 border border-white/5 p-4 text-white text-sm outline-none focus:border-blue-500 focus:bg-black/60 transition-all placeholder:text-gray-700" placeholder="contact@entreprise.com" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Message ou précisions</label>
                                                <textarea rows={4} className="w-full bg-black/40 border border-white/5 p-4 text-white text-sm outline-none focus:border-blue-500 focus:bg-black/60 transition-all placeholder:text-gray-700 resize-none" placeholder="Décrivez brièvement votre besoin..."></textarea>
                                            </div>

                                            <div className="flex items-center gap-2 mb-6">
                                                <input required type="checkbox" id="terms" className="accent-blue-500" />
                                                <label htmlFor="terms" className="text-[10px] text-gray-500">J'accepte que LBASSUR utilise mes données pour me recontacter.</label>
                                            </div>

                                            <div className="flex justify-between pt-8 border-t border-white/5">
                                                <button type="button" onClick={() => setStep(2)} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">← Retour</button>
                                                <button type="submit" className="px-12 py-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                                                    Confirmer le RDV
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
