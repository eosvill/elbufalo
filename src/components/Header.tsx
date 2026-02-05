import { useState, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Link items
    const navItems = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        // { name: 'Trabajos', href: '#trabajos' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                        <img src="/logo.png" alt="elbufalo" className="h-16 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button - Text Based */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white font-bold text-sm uppercase tracking-wide focus:outline-none p-2 border border-white/30 rounded"
                        >
                            {isOpen ? 'Cerrar' : 'Menú'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 text-center"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
