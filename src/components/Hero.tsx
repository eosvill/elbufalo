import heroBg from '../assets/hero_patagonia_background.png';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Paisaje de la Patagonia Argentina"
                    className="w-full h-full object-cover"
                />
                {/* Modern dark gradient overlay - LIGHTER OPACITY */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Animated blobs for extra depth */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-corporate-blue/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-corporate-sky/20 rounded-full blur-3xl animate-blob"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    <div className="text-left space-y-8 animate-float md:col-span-7 lg:col-span-8">
                        <span className="text-corporate-sky font-bold tracking-wider text-sm">
                            Agencia de IA para Turismo en Argentina
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                            Potenciamos tu negocio turístico con
                            <span className="text-gradient"> soluciones inteligentes</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-300 max-w-lg leading-relaxed border-l-4 border-corporate-sky pl-6">
                            Ayudamos a hoteles, agencias de viaje y empresas turísticas a crecer con tecnología simple y efectiva. Sin complicaciones.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <a
                                href="#contacto"
                                className="px-8 py-4 bg-corporate-blue hover:bg-corporate-sky text-white font-bold rounded-xl shadow-lg shadow-corporate-blue/25 hover:shadow-corporate-sky/40 transition-all transform hover:-translate-y-1 text-center"
                            >
                                Empezar Transformación
                            </a>
                            <a
                                href="#servicios"
                                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center"
                            >
                                Ver Servicios
                            </a>
                        </div>
                    </div>

                    {/* Right side abstract/glass card only visible on large screens */}
                    <div className="hidden md:block relative md:col-span-5 lg:col-span-4">
                        <div className="absolute inset-0 bg-gradient-to-tr from-corporate-blue to-corporate-sky rounded-3xl rotate-3 opacity-20 blur-xl"></div>
                        <div className="relative bg-[#0f172a] p-8 rounded-3xl border border-slate-800 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9] text-xl font-bold shrink-0">1</div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Auditoría Gratuita</h3>
                                        <p className="text-slate-400 text-sm">Revisamos tu presencia actual</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-slate-800"></div>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] text-xl font-bold shrink-0">2</div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Automatización</h3>
                                        <p className="text-slate-400 text-sm">Ahorra 20hs semanales</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-slate-800"></div>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] text-xl font-bold shrink-0">3</div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Más Ventas</h3>
                                        <p className="text-slate-400 text-sm">Convierte visitantes en viajeros</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
