"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Comparer", href: "/#compare" },
    { name: "Services", href: "/#services" },
    { name: "Glossaire", href: "/#glossaire" },
    { name: "Contact", href: "/#booking" },
    { name: "Simulation", href: "/simulation" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass py-3 shadow-2xl" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-8 flex justify-between items-center max-w-7xl">
                {/* Logo */}
                <Link href="/" className="group relative z-30 flex items-center gap-4">
                    <div className="relative overflow-hidden rounded-full p-1 bg-white/10 group-hover:bg-white/20 transition-colors">
                        <img src="/images/logo.jpg" alt="LBASSUR" className="h-8 md:h-10 w-auto object-contain rounded-full" />
                    </div>
                    <span className="text-xl font-bold uppercase font-oswald text-white tracking-widest hidden sm:block">
                        LBASSUR
                    </span>
                </Link>

                {/* Desktop Menu - Apple style spacing & font */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 hover:text-white transition-all duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* External CTA - Tesla style Minimalist */}
                    <Link
                        href="/#booking"
                        className="text-[10px] uppercase tracking-[0.2em] font-bold text-white border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-500 rounded-sm glass"
                    >
                        Rendez-vous
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={20} className="hover:rotate-90 transition-transform duration-300" />
                    ) : (
                        <div className="space-y-1 hover:opacity-70 transition-opacity">
                            <span className="block w-5 h-0.5 bg-white"></span>
                            <span className="block w-5 h-0.5 bg-white"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col space-y-10 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-12 text-[10px] text-gray-600 uppercase tracking-[0.5em]">
                            LBASSUR &copy; {new Date().getFullYear()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

