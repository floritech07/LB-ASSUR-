"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact-section" className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 z-0"></div>

            <div className="relative z-10 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest font-oswald text-white mb-4">
                        Contactez-Nous
                    </h2>
                    <div className="h-1 w-24 bg-white mx-auto"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        Une question ? Un projet ? Notre équipe est à votre disposition pour vous répondre dans les plus brefs délais.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6 bg-white/5 p-8 border border-white/10 backdrop-blur-sm shadow-2xl shadow-black/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400">Nom Complet</label>
                                    <input type="text" className="w-full bg-black/50 border-b border-gray-600 focus:border-white px-4 py-3 text-white outline-none transition-colors" placeholder="Votre nom" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-black/50 border-b border-gray-600 focus:border-white px-4 py-3 text-white outline-none transition-colors" placeholder="email@exemple.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400">Sujet</label>
                                <input type="text" className="w-full bg-black/50 border-b border-gray-600 focus:border-white px-4 py-3 text-white outline-none transition-colors" placeholder="Demande de devis..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border-b border-gray-600 focus:border-white px-4 py-3 text-white outline-none transition-colors resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-white text-black py-4 uppercase tracking-widest font-bold text-sm hover:bg-gray-200 transition-colors">
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase font-oswald mb-1">Notre Agence</h4>
                                <p className="text-gray-400 text-sm">Cotonou, C/ 238 Le Bélier, BJ</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <Phone className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase font-oswald mb-1">Téléphone</h4>
                                <p className="text-gray-400 text-sm">+229 XX XX XX XX</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <Mail className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase font-oswald mb-1">Email</h4>
                                <p className="text-gray-400 text-sm">contact@lbassur.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 border-t border-gray-800 pt-8 mt-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                <Clock className="text-white" size={24} />
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-bold uppercase font-oswald mb-4">Horaires d'ouverture</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                                    <div>
                                        <span className="block font-medium text-white">Lundi - Vendredi</span>
                                        <span className="block text-xs mt-1">08H00 — 12H30</span>
                                        <span className="block text-xs">13H30 — 17H00</span>
                                    </div>
                                    <div className="text-right sm:text-left">
                                        <span className="block font-medium text-gray-500">Samedi & Dimanche</span>
                                        <span className="block text-xs mt-1">Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
