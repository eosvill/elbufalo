export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-[#0B1120] relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#38bdf8] font-bold tracking-widest uppercase text-xs mb-2 block">
                        LO QUE HACEMOS
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
                        Nuestros Servicios
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Soluciones pensadas para el sector turístico argentino. Simple, efectivo y sin complicaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Main Featured Card */}
                    <div className="md:col-span-3 bg-[#0ea5e9] rounded-3xl p-8 md:p-12 relative overflow-hidden group">


                        <div className="relative z-10 max-w-2xl">
                            <div className="inline-block bg-[#f97316] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide shadow-sm">
                                Más Solicitado
                            </div>

                            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                                Actualización de Sitios Web
                            </h3>

                            <p className="text-[#0f172a]/80 text-xl font-medium mb-8 leading-relaxed max-w-xl">
                                Renovamos tu página web para que luzca moderna, cargue rápido y genere más reservas. Nos adaptamos a lo que tu negocio necesita.
                            </p>

                            <a href="#contacto" className="inline-block bg-[#0f172a] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Consultar Ahora
                            </a>
                        </div>
                    </div>

                    {/* Secondary Cards */}
                    {/* Card 1 */}
                    <div className="bg-[#1e293b]/50 border-t-4 border-[#38bdf8] rounded-2xl p-8 hover:bg-[#1e293b] transition-colors duration-300">
                        <h3 className="text-white text-xl font-bold mb-4">
                            Auditoría y Consultoría
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Analizamos tu presencia digital y te damos recomendaciones claras para mejorar. Sin tecnicismos, solo soluciones prácticas.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1e293b]/50 border-t-4 border-[#38bdf8] rounded-2xl p-8 hover:bg-[#1e293b] transition-colors duration-300">
                        <h3 className="text-white text-xl font-bold mb-4">
                            Automatización
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Dejá que la tecnología haga las tareas repetitivas por vos. Respuestas automáticas, gestión de reservas y más.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1e293b]/50 border-t-4 border-[#38bdf8] rounded-2xl p-8 hover:bg-[#1e293b] transition-colors duration-300">
                        <h3 className="text-white text-xl font-bold mb-4">
                            Soluciones Digitales
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Herramientas personalizadas para tu negocio turístico. Desde sistemas de reservas hasta integraciones con tus canales de venta.
                        </p>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <p className="text-slate-400 mb-6 font-medium">
                        ¿No encontrás lo que buscás? Contanos qué necesitás.
                    </p>
                    <a href="#contacto" className="inline-block border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0f172a] font-bold px-10 py-3 rounded-xl transition-all duration-300">
                        Hablemos
                    </a>
                </div>
            </div>
        </section>
    );
}
