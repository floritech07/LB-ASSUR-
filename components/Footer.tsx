export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-20 px-6 border-t border-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest font-oswald mb-1">LB ASSUR</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">Courtier en Assurance Multi-spécialiste</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                    <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
                </div>

                <div className="text-xs text-gray-600 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} LB ASSUR
                </div>
            </div>

        </footer>
    );
}
