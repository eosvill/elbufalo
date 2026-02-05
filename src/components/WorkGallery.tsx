export default function WorkGallery() {
    const projects = [
        {
            id: 1,
            title: 'Resort & Spa',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800' // Tropical Resort
        },
        {
            id: 2,
            title: 'Expediciones Desierto',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800' // Canyon/Travel
        },
        {
            id: 3,
            title: 'Winter Lodge',
            image: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?auto=format&fit=crop&q=80&w=800' // Snowy Cabin
        },
        {
            id: 4,
            title: 'Lagos Andinos',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800' // Lake/Mountain
        },
        {
            id: 5,
            title: 'Luxury Hotel',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' // Resort Pool Evening
        },
        {
            id: 6,
            title: 'Destinos Europeos',
            image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca9d3?auto=format&fit=crop&q=80&w=800' // Santorini/Greece
        }
    ];

    return (
        <section id="trabajos" className="py-24 bg-[#0B1120] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Trabajos Realizados
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        Algunos ejemplos de proyectos que hemos desarrollado para empresas del sector turístico.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative aspect-[16/10] bg-slate-800 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Optional subtle overlay on hover if needed, keeping it clean for now as per image */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
