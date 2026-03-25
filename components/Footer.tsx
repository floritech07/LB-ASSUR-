import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white py-24 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="container mx-auto relative z-10 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-6">
                        <img src="/images/logo.jpg" alt="LBASSUR" className="h-10 w-auto object-contain rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-[0.2em] font-oswald mb-2 text-white/90">LBASSUR</h3>
                            <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-medium leading-none">Courtier Haute Performance</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 text-[10px] text-gray-500 uppercase tracking-[0.3em] text-center sm:text-left font-bold">
                        <Link href="/mentions-legales" className="hover:text-blue-400 transition-colors duration-500">Mentions Légales</Link>
                        <Link href="/politique-confidentialite" className="hover:text-blue-400 transition-colors duration-500">Confidentialité</Link>
                        <Link href="#contact" className="hover:text-blue-400 transition-colors duration-500">Support</Link>
                    </div>

                    <div className="text-[10px] text-gray-700 uppercase tracking-[0.3em] font-bold">
                        &copy; {new Date().getFullYear()} LBASSUR. All rights reserved.
                    </div>
                </div>

                {/* Developer Signature - Refined */}
                <div className="mt-20 pt-10 border-t border-white/5">
                    <div className="flex flex-col items-center gap-3 text-center opacity-60 hover:opacity-100 transition-opacity duration-700">
                        <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                            Engineered by{' '}
                            <span className="text-white font-bold ml-1">floridev07</span>
                        </p>
                        <p className="text-[9px] text-gray-700 italic tracking-widest leading-none">
                            Marc-Florian CHAKOUN
                        </p>
                        <div className="h-[1px] w-4 bg-blue-500/30 my-1"></div>
                        <p className="text-[8px] text-gray-800 tracking-[0.3em] uppercase">
                            A <span className="text-gray-600 font-bold">Floritech, Inc.</span> brand
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

