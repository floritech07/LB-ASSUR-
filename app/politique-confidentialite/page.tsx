import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialite() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-24">
            <Navbar />
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-12 border-b border-white/20 pb-8">
                    Politique de Confidentialité
                </h1>

                <div className="space-y-12 text-gray-300 leading-relaxed font-inter">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Introduction</h2>
                        <p>
                            Chez LBASSUR, la protection de vos données personnelles est une priorité. Cette politique détaille comment nous collectons,
                            utilisons et protégeons vos informations lors de l'utilisation de notre site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Collecte des Données</h2>
                        <p>
                            Nous collectons les données que vous nous fournissez volontairement via notre formulaire de contact :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Nom et Prénom</li>
                            <li>Adresse email</li>
                            <li>Sujet de votre demande</li>
                            <li>Contenu de votre message</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Utilisation des Données</h2>
                        <p>
                            Vos informations sont utilisées exclusivement pour :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Répondre à vos demandes de renseignements ou de devis.</li>
                            <li>Assurer le suivi commercial de votre dossier.</li>
                            <li>Respecter nos obligations légales et réglementaires.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Protection et Conservation</h2>
                        <p>
                            LBASSUR met en œuvre toutes les mesures de sécurité nécessaires pour protéger vos données contre tout accès non autorisé.
                            Nous conservons vos données uniquement pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Vos Droits</h2>
                        <p>
                            Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles.
                            Pour exercer ce droit, contactez-nous à l'adresse suivante : <strong>contact@lbassur.com</strong>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
