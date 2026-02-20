"use client";

import { useParams } from "next/navigation";
import { INSURERS, MOCK_OFFERS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Globe, MapPin, Phone } from "lucide-react";

export default function InsurerDetailsPage() {
    const params = useParams();
    const slug = params.slug as string;

    const insurer = INSURERS.find(i => i.slug === slug);
    const offers = MOCK_OFFERS.filter(o => o.insurerSlug === slug);

    if (!insurer) return <div>Assureur non trouvé.</div>;

    return (
        <main className="bg-white text-black min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Info */}
                    <div className="lg:w-1/3">
                        <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl sticky top-32">
                            <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                                <span className="text-xs font-bold text-gray-400">LOGO</span>
                            </div>
                            <h1 className="text-3xl font-bold font-oswald uppercase mb-4">{insurer.name}</h1>
                            <p className="text-gray-500 mb-8 leading-relaxed italic">"{insurer.description}"</p>

                            <div className="space-y-4 pt-8 border-t border-zinc-200 text-sm">
                                <div className="flex items-center gap-3">
                                    <Globe size={18} className="text-gray-400" />
                                    <a href={insurer.website} className="text-blue-600 hover:underline">{insurer.website.replace("https://", "")}</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={18} className="text-gray-400" />
                                    <span className="text-gray-600">Siège Social, Cotonou, Bénin</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-gray-400" />
                                    <span className="text-gray-600">+229 XX XX XX XX</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <h2 className="text-2xl font-bold font-oswald uppercase mb-8 pb-4 border-b border-zinc-100">Nos Offres Actuelles</h2>

                        <div className="space-y-6">
                            {offers.length > 0 ? offers.map(offer => (
                                <div key={offer.id} className="p-8 border border-zinc-100 bg-zinc-50 hover:border-black transition-all">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1 block">{offer.insuranceType}</span>
                                            <h3 className="text-xl font-bold uppercase">Garantie Performance</h3>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-black">{offer.premium.toLocaleString()} FCFA</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div><span className="text-gray-400 mr-2">Carence:</span> {offer.waitingPeriod}</div>
                                        <div><span className="text-gray-400 mr-2">Franchise:</span> {offer.franchise.toLocaleString()} FCFA</div>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-gray-400 italic">Aucune offre détaillée répertoriée pour le moment.</p>
                            )}
                        </div>

                        <div className="mt-16">
                            <h2 className="text-2xl font-bold font-oswald uppercase mb-8">À propos de {insurer.name}</h2>
                            <div className="prose prose-zinc max-w-none text-gray-500 leading-relaxed font-light">
                                <p>
                                    {insurer.name} est présent sur le marché béninois depuis plusieurs décennies, offrant des produits adaptés aux réalités locales.
                                    Reconnue pour la qualité de son service client et sa rapidité d'indemnisation, la compagnie se classe parmi les leaders du secteur {insurer.categories.join(' & ')}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
