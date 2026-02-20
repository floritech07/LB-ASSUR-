import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-20 px-6 border-t border-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest font-oswald mb-1">LB ASSUR</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">Courtier en Assurance Multi-spécialiste</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] text-center sm:text-left font-bold">
                    <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                    <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
                </div>

                <div className="text-xs text-gray-600 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} LB ASSUR
                </div>
            </div>

            {/* Developer Signature */}
            <div className="container mx-auto mt-12 pt-8 border-t border-gray-900">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-xs text-gray-600">
                        Développé avec <span className="text-blue-500 inline-block animate-pulse">♥</span> par{' '}
                        <span className="text-blue-400 font-semibold">floridev07</span>
                    </p>
                    <p className="text-xs text-gray-700 italic">
                        Marc-Florian CHAKOUN
                    </p>
                    <p className="text-[10px] text-gray-800 mt-1">
                        <span className="text-blue-500/50">floridev07</span> est une marque déposée de{' '}
                        <span className="text-gray-600 font-semibold">Floritech, Inc.</span>
                    </p>
                </div>
            </div>

        </footer>
    );
}
