import { useState } from 'react';

export default function ContactForm() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        // Google Sheets Integration
        const googleScriptURL = "https://script.google.com/macros/s/AKfycbzENhAsIon3LBDdnHrOdz5E857nRr7qEYKT8iKV4m24VYEaGBKqsIkr-4RbGZ0b2Mgw/exec";

        try {
            // Send to Google Sheets (fire and forget)
            fetch(googleScriptURL, {
                method: "POST",
                body: data,
                mode: "no-cors"
            }).catch(err => console.error("Google Sheet Error:", err));

            // Send to Formspree
            const response = await fetch("https://formspree.io/f/mwvnerdb", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setShowModal(true);
                form.reset();
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
            }
        } catch (error) {
            alert("Hubo un error de conexión.");
        }
    };

    return (
        <section id="contacto" className="py-12 bg-[#0B1120] relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Side - Info */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            ¿Listo para<br /> empezar?
                        </h2>

                        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                            Dejanos tus datos y te contactamos para conversar sobre cómo podemos ayudar a tu negocio turístico.
                        </p>

                        <div className="mb-8">
                            <p className="text-white font-bold text-base mb-3">
                                Contacto rápido por WhatsApp
                            </p>
                            <a
                                href="https://wa.me/5491157083080"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#f97316] text-white font-bold text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-900/20 hover:bg-[#ea580c] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Escribinos Ahora
                            </a>
                        </div>

                        <div>
                            <p className="text-white font-bold text-base mb-3">
                                O envianos un email
                            </p>
                            <a
                                href="mailto:elbufaloia@gmail.com"
                                className="text-slate-300 hover:text-[#f97316] text-lg font-medium transition-colors"
                            >
                                elbufaloia@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Formulario de Consulta
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                                        placeholder="Tu número de teléfono"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0ea5e9] text-white font-bold text-lg py-3 rounded-xl hover:bg-[#0284c7] transition-all duration-300 shadow-lg hover:shadow-blue-900/20 mt-2"
                                >
                                    Enviar Consulta
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#0f172a] border border-slate-700 rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-float">
                        <div className="text-center">
                            <div className="h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Gracias por escribirnos. Te vamos a responder lo antes posible a tu email o WhatsApp.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-[#0ea5e9] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0284c7] transition-all shadow-lg hover:shadow-blue-900/20"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
