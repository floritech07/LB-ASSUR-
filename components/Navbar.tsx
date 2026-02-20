"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Comparer", href: "/compare" },
    { name: "Simulation", href: "/simulation" },
    { name: "Services", href: "/#services" },
    { name: "Glossaire", href: "/education" },
    { name: "Contact", href: "/#booking" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                {/* Logo - Pure Text per SpaceX Style */}
                <Link href="/" className="group relative z-30">
                    <h1 className="text-3xl md:text-3xl font-bold tracking-tighter uppercase font-oswald text-white">
                        LB ASSUR
                    </h1>
                </Link>

                {/* Desktop Menu - Minimalist */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs uppercase tracking-[0.15em] font-bold text-gray-300 hover:text-white transition-all duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* External CTA "Prendre RDV" */}
                    <Link
                        href="#booking"
                        className="text-xs uppercase tracking-[0.15em] font-bold text-white border border-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Prendre Rendez-vous
                    </Link>
                </div>

                {/* Mobile Menu Button - Minimalist Hamburger */}
                <button
                    className="md:hidden text-white focus:outline-none z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={24} className="hover:rotate-90 transition-transform duration-300" />
                    ) : (
                        <div className="space-y-1.5 hover:opacity-70 transition-opacity">
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay - Full Screen Dark */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                href="#booking"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl uppercase tracking-widest font-bold text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 mt-4"
                            >
                                Prendre Rendez-vous
                            </Link>
                        </div>

                        <div className="absolute bottom-10 text-xs text-gray-500 uppercase tracking-widest">
                            LB ASSUR &copy; {new Date().getFullYear()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
