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
            <section id="booking" className="py-40 bg-black text-white border-y border-white/5 flex items-center justify-center min-h-[700px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                        <CheckCircle2 size={40} className="text-blue-400" />
                    </div>
                    <h2 className="text-5xl font-bold font-oswald uppercase mb-6 tracking-tight">Demande Envoyée</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg font-light leading-relaxed">
                        Votre session avec nos experts est en cours de validation. Vous recevrez une confirmation sous 24 heures.
                    </p>
                    <button
                        onClick={() => { setFormStatus("idle"); setStep(1); setSelectedType(""); setSelectedDate(""); setSelectedTime(""); }}
                        className="px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all"
                    >
                        Nouvelle demande
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="booking" className="py-32 bg-black text-white border-y border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-0"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block glass px-4 py-1 rounded-full mb-6 border-blue-500/20"
                    >
                        <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[9px]">Réservation Directe</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase font-oswald mb-6 tracking-tighter">
                        Planifier une <span className="text-gradient">Session</span>
                    </h2>
                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Accédez à l'expertise LBASSUR instantanément. Sélectionnez votre créneau et laissez-nous sécuriser votre futur.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Status Sidebar - Minimalist Apple Style */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="glass p-10 rounded-sm border-white/5">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-10 pb-4 border-b border-white/5">Progression</h4>
                            <div className="space-y-10">
                                {[
                                    { s: 1, label: "Configuration" },
                                    { s: 2, label: "Planification" },
                                    { s: 3, label: "Validation" }
                                ].map((item) => (
                                    <div key={item.s} className="flex items-center gap-6 group">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-700 ${step >= item.s ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-white/5 text-gray-600 border border-white/10"}`}>
                                            {item.s}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 ${step >= item.s ? "text-white" : "text-gray-600"}`}>
                                                {item.label}
                                            </span>
                                            {step === item.s && (
                                                <motion.span layoutId="activeStep" className="text-[9px] text-blue-400 font-medium mt-1">En cours...</motion.span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 border border-white/5 bg-white/[0.02] rounded-sm group hover:border-blue-500/20 transition-colors duration-700">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700">
                                <Mail size={20} className="text-blue-400" />
                            </div>
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Ligne Prioritaire</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed font-light mb-4">
                                Pour une assistance d'urgence ou une entreprise :
                            </p>
                            <span className="text-white font-bold text-sm tracking-widest">+229 XX XX XX XX</span>
                        </div>
                    </div>

                    {/* Form Area - Tesla Dashboard Style */}
                    <div className="lg:col-span-8 glass p-10 md:p-16 border-white/5 relative min-h-[600px] shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-[0.05] pointer-events-none">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="animate-spin-slow">
                                <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-10"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase font-oswald text-white mb-3">Sélectionner un Service</h3>
                                        <p className="text-gray-500 text-sm font-light">Identifiez la nature de votre besoin pour l'orienter vers l'expert dédié.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5">
                                        {types.map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => { setSelectedType(t.id); setStep(2); }}
                                                className={`group flex items-center gap-8 p-8 border transition-all duration-700 text-left ${selectedType === t.id ? "bg-blue-500/[0.07] border-blue-500/50" : "bg-white/[0.02] border-white/5 hover:border-white/20"}`}
                                            >
                                                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-700 ${selectedType === t.id ? "bg-blue-500 text-white" : "bg-white/5 text-gray-500 group-hover:text-white"}`}>
                                                    <t.icon size={22} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold uppercase text-[11px] tracking-[0.2em] text-white mb-2">{t.title}</h4>
                                                    <p className="text-[11px] text-gray-500 font-light group-hover:text-gray-400">{t.desc}</p>
                                                </div>
                                                <ChevronRight className={`transition-all duration-700 ${selectedType === t.id ? "text-blue-500 translate-x-1" : "text-gray-800 opacity-0 group-hover:opacity-100"}`} size={20} />
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
                                    transition={{ duration: 0.6 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase font-oswald text-white mb-3">Disponibilités</h3>
                                        <p className="text-gray-500 text-sm font-light">Calendrier synchronisé en temps réel.</p>
                                    </div>

                                    <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide">
                                        {dates.map((d) => (
                                            <button
                                                key={d.day}
                                                onClick={() => setSelectedDate(`${d.label} ${d.day} ${d.month}`)}
                                                className={`min-w-[100px] p-6 border flex flex-col items-center transition-all duration-700 ${selectedDate === `${d.label} ${d.day} ${d.month}` ? "bg-blue-500 border-blue-500 scale-105" : "bg-white/[0.02] border-white/5 text-gray-500 hover:border-white/20"}`}
                                            >
                                                <span className={`text-[9px] uppercase font-bold mb-3 tracking-widest ${selectedDate === `${d.label} ${d.day} ${d.month}` ? "text-blue-100" : "text-gray-600"}`}>{d.label}</span>
                                                <span className={`text-3xl font-black ${selectedDate === `${d.label} ${d.day} ${d.month}` ? "text-white" : "text-gray-400"}`}>{d.day}</span>
                                                <span className={`text-[9px] uppercase font-bold mt-3 tracking-widest ${selectedDate === `${d.label} ${d.day} ${d.month}` ? "text-blue-100" : "text-gray-600"}`}>{d.month}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Créneaux Horaires</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`py-4 border text-[11px] font-bold uppercase tracking-widest transition-all duration-700 ${selectedTime === time ? "bg-white text-black border-white" : "bg-white/[0.02] border-white/5 text-gray-500 hover:border-white/20"}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-10 border-t border-white/5">
                                        <button onClick={() => setStep(1)} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors duration-500">← Retour</button>
                                        <button
                                            disabled={!selectedDate || !selectedTime}
                                            onClick={() => setStep(3)}
                                            className={`px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${selectedDate && selectedTime ? "bg-white text-black hover:scale-105 active:scale-95" : "opacity-20 cursor-not-allowed"}`}
                                        >
                                            Étape Suivante
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
                                    transition={{ duration: 0.6 }}
                                    className="space-y-10"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase font-oswald text-white mb-3">Informations Finales</h3>
                                        <p className="text-gray-500 text-sm font-light">La sécurité de vos données est notre priorité.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="glass p-5 border-blue-500/20 bg-blue-500/[0.03] flex justify-between items-center">
                                            <div className="flex items-center gap-5">
                                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                                    <Clock size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[9px] uppercase font-bold text-blue-400/60 tracking-widest">Configuration Active</p>
                                                    <p className="text-xs font-bold text-white tracking-widest uppercase mt-1">{selectedDate} — {selectedTime}</p>
                                                </div>
                                            </div>
                                            <button type="button" onClick={() => setStep(2)} className="text-[9px] font-black uppercase text-blue-400 hover:text-blue-300 transition-colors">Modifier</button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-gray-600 tracking-widest ml-1">Identité</label>
                                                <input required type="text" className="w-full bg-white/[0.02] border border-white/5 p-5 text-white text-xs outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-500 placeholder:text-gray-800" placeholder="Nom complet" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-gray-600 tracking-widest ml-1">Contact</label>
                                                <input required type="tel" className="w-full bg-white/[0.02] border border-white/5 p-5 text-white text-xs outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-500 placeholder:text-gray-800" placeholder="+229 XX XX XX XX" />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-gray-600 tracking-widest ml-1">Email</label>
                                            <input required type="email" className="w-full bg-white/[0.02] border border-white/5 p-5 text-white text-xs outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-500 placeholder:text-gray-800" placeholder="exemple@entreprise.com" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-gray-600 tracking-widest ml-1">Précisions</label>
                                            <textarea rows={4} className="w-full bg-white/[0.02] border border-white/5 p-5 text-white text-xs outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-500 placeholder:text-gray-800 resize-none font-light leading-relaxed" placeholder="Quel est le contexte de votre demande ?"></textarea>
                                        </div>

                                        <div className="flex items-center gap-3 mb-10 group">
                                            <div className="relative flex items-center">
                                                <input required type="checkbox" id="terms" className="peer w-4 h-4 opacity-0 absolute cursor-pointer" />
                                                <div className="w-4 h-4 border border-white/20 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all"></div>
                                            </div>
                                            <label htmlFor="terms" className="text-[9px] text-gray-600 uppercase font-bold tracking-widest cursor-pointer group-hover:text-gray-400 transition-colors">Accepter la politique de confidentialité</label>
                                        </div>

                                        <div className="flex justify-between items-center pt-10 border-t border-white/5">
                                            <button type="button" onClick={() => setStep(2)} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors duration-500">← Retour</button>
                                            <button type="submit" className="px-16 py-6 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 transition-all duration-700 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95">
                                                Valider Rendez-vous
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
