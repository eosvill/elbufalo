export default function AutomationBanner() {
    return (
        <section className="py-16 bg-[#1893C3] relative overflow-hidden font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight tracking-tight">
                    ¿Necesitas automatizar tareas repetitivas que haces en tu negocio?
                </h2>

                <p className="text-lg md:text-xl text-[#0f172a]/80 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                    Libera tu tiempo y deja que la IA haga el trabajo repetitivo por ti
                </p>

                <a
                    href="https://wa.me/5491157083080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#f97316] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#ea580c] transition-all duration-300 transform hover:-translate-y-1"
                >
                    Consultá por WhatsApp
                </a>
            </div>
        </section>
    );
}
