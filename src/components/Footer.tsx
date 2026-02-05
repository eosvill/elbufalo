export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-slate-100 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

                    <div className="text-center md:text-left">
                        <img src="/logo_footer.jpg" alt="elbufalo" className="h-32 w-auto object-contain mx-auto md:mx-0 mb-4" />
                        <p className="text-slate-500 text-sm mt-1 font-medium">
                            IA para el turismo argentino
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-8 text-slate-600 font-medium">
                            <li><a href="#inicio" className="hover:text-[#f97316] transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-[#f97316] transition-colors">Servicios</a></li>
                            {/* <li><a href="#trabajos" className="hover:text-[#f97316] transition-colors">Trabajos</a></li> */}
                            <li><a href="#contacto" className="hover:text-[#f97316] transition-colors">Contacto</a></li>
                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <div>
                        <a
                            href="https://wa.me/5491157083080"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#f97316] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#ea580c] transition-colors shadow-lg hover:shadow-orange-900/10"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-400 text-sm">
                        &copy; 2026 elbufalo. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
