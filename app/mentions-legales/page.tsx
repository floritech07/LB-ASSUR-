import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-24">
            <Navbar />
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-12 border-b border-white/20 pb-8">
                    Mentions Légales
                </h1>

                <div className="space-y-12 text-gray-300 leading-relaxed font-inter">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Éditeur du Site</h2>
                        <p>
                            Le présent site est édité par <strong>LBASSUR</strong>, cabinet de courtage en assurances.<br />
                            Siège social : Cotonou, C/ 238 Le Bélier, Bénin.<br />
                            Responsable de la publication : Direction LBASSUR.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Activité de Courtage</h2>
                        <p>
                            LBASSUR exerce son activité conformément aux réglementations locales en vigueur sur le courtage en assurances.
                            Nous intervenons en tant qu'intermédiaire entre nos clients et les compagnies d'assurances pour négocier les meilleurs contrats.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. Hébergement</h2>
                        <p>
                            Ce site est hébergé par Vercel Inc.<br />
                            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">4. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, logos, etc.)
                            sont la propriété exclusive de LBASSUR ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
