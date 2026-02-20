import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Search } from "lucide-react";

const GLOSSARY = [
    { term: "IARD", definition: "Incendie, Accidents et Risques Divers. Désigne l'assurance des dommages aux biens et de la responsabilité civile." },
    { term: "Franchise", definition: "Somme qui reste à la charge de l'assuré après un sinistre et qui n'est donc pas remboursée par l'assureur." },
    { term: "Délai de Carence", definition: "Période suivant la souscription du contrat pendant laquelle les garanties ne s'appliquent pas encore." },
    { term: "Prime", definition: "Montant payé par l'assuré en échange de la couverture fournie par l'assureur." },
    { term: "Sinistre", definition: "Événement imprévu (accident, incendie, vol) qui entraîne la mise en jeu des garanties du contrat." },
    { term: "Taux de Rachat", definition: "Dans l'assurance vie, c'est la possibilité pour l'assuré de récupérer tout ou partie de son capital avant l'échéance du contrat." },
];

export default function EducationPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
                <div className="mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Base de Connaissances</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-oswald uppercase mb-6 text-white">Glossaire & Éducation</h1>
                    <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
                        Parce que l'assurance peut être complexe, nous vous aidons à comprendre les termes essentiels pour faire le meilleur choix.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {GLOSSARY.map((item, index) => (
                        <div key={index} className="border-l-2 border-blue-500 pl-8 py-4 bg-zinc-900/30 backdrop-blur-sm border-r border-t border-b border-white/5 pr-6 hover:bg-zinc-900/50 transition-all">
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 flex items-center gap-3 text-white">
                                <BookOpen size={20} className="text-blue-500" />
                                {item.term}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-light text-sm">
                                {item.definition}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-zinc-900 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold font-oswald uppercase mb-6 text-white">Besoin d'un conseil personnalisé ?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light">Nos experts sont là pour vous guider à travers les clauses complexes de vos contrats.</p>
                        <a href="/#booking" className="inline-block border border-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                            Contacter un conseiller
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
