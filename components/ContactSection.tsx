"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section id="contact-section" className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[100px] -z-0"></div>

            <div className="relative z-10 container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block glass px-4 py-1 rounded-full mb-6 border-blue-500/20"
                    >
                        <span className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[9px]">Ligne Directe</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter font-oswald text-white mb-6">
                        Contactez-Nous
                    </h2>
                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Expertise, Conseil et Réactivité. Notre équipe est à votre disposition pour sécuriser l'avenir de vos projets.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center glass p-16 text-center border-blue-500/20"
                            >
                                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-8 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold uppercase font-oswald mb-4 text-white tracking-widest leading-none">Transmission Réussie</h3>
                                <p className="text-gray-500 font-light leading-relaxed">Nous avons bien reçu votre message. <br />Réponse estimée : &lt; 2 heures.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 glass p-10 md:p-14 border-white/5 shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-gray-600 ml-1">Identité</label>
                                        <input required type="text" className="w-full bg-white/[0.02] border border-white/5 focus:border-blue-500/50 p-5 text-white text-xs outline-none transition-all duration-500 placeholder:text-gray-800" placeholder="Nom complet" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-gray-600 ml-1">Email</label>
                                        <input required type="email" className="w-full bg-white/[0.02] border border-white/5 focus:border-blue-500/50 p-5 text-white text-xs outline-none transition-all duration-500 placeholder:text-gray-800" placeholder="email@exemple.com" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-600 ml-1">Objet</label>
                                    <input required type="text" className="w-full bg-white/[0.02] border border-white/5 focus:border-blue-500/50 p-5 text-white text-xs outline-none transition-all duration-500 placeholder:text-gray-800" placeholder="Nature de votre demande" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-600 ml-1">Message</label>
                                    <textarea required rows={5} className="w-full bg-white/[0.02] border border-white/5 focus:border-blue-500/50 p-5 text-white text-xs outline-none transition-all duration-500 resize-none font-light leading-relaxed placeholder:text-gray-800" placeholder="Comment pouvons-nous vous accompagner ?"></textarea>
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full bg-white text-black py-5 text-[11px] uppercase tracking-[0.3em] font-black hover:scale-[1.02] active:scale-95 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                                            Transmission...
                                        </>
                                    ) : "Envoyer le message"}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-12"
                    >
                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-700 group-hover:border-blue-500/40 group-hover:scale-110">
                                <MapPin className="text-blue-400" size={22} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase font-oswald mb-1 tracking-widest">Siège Social</h4>
                                <p className="text-gray-500 font-light text-sm">Cotonou, C/ 238 Le Bélier, Bénin</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-700 group-hover:border-blue-500/40 group-hover:scale-110">
                                <Phone className="text-blue-400" size={22} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase font-oswald mb-1 tracking-widest">Téléphone</h4>
                                <p className="text-gray-500 font-light text-sm">+229 XX XX XX XX</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group text-balance">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-700 group-hover:border-blue-500/40 group-hover:scale-110">
                                <Mail className="text-blue-400" size={22} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase font-oswald mb-1 tracking-widest">Email</h4>
                                <p className="text-gray-500 font-light text-sm">contact@lbassur.com</p>
                            </div>
                        </div>

                        <div className="glass p-10 border-white/5 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                               <Clock className="animate-pulse" size={40} />
                           </div>
                           <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-8 border-b border-white/5 pb-4">Standard Opérationnel</h4>
                           <div className="grid grid-cols-1 gap-6">
                               <div className="flex justify-between items-center">
                                   <span className="text-[11px] font-bold uppercase text-white tracking-widest">Lundi — Vendredi</span>
                                   <span className="text-[10px] text-gray-500 font-medium">08:00 — 17:00</span>
                               </div>
                               <div className="flex justify-between items-center opacity-40">
                                    <span className="text-[11px] font-bold uppercase text-gray-400 tracking-widest">W-E & Fériés</span>
                                    <span className="text-[10px] text-gray-600 font-medium">Fermé</span>
                               </div>
                           </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

