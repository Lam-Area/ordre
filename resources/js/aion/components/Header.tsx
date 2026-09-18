import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* 1. HEADER : La hauteur (py-2 / py-4) ne dépend plus du menu, uniquement du scroll */}
            <header className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 border-b ${
                isScrolled || isMenuOpen ? 'bg-black/95 border-white/10 backdrop-blur-md' : 'bg-transparent border-transparent'
            } ${isScrolled ? 'py-2' : 'py-4'}`}>
                
                <div className="w-[90%] mx-auto flex items-center justify-between">
                    
                    {/* Logo */}
                    <div className="text-3xl font-black text-white tracking-widest uppercase cursor-pointer">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>ORDRE</Link>
                    </div>

                    {/* Menu classique PC */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex items-center space-x-10 text-sm font-semibold text-gray-400 uppercase tracking-widest">
                            <li><a href="#universe" className="hover:text-white transition-colors">L'Univers</a></li>
                            <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
                            <li><Link to="/login" className="hover:text-white transition-colors">Connexion</Link></li>
                        </ul>
                    </nav>

                    {/* Bouton Dynamique (Burger <=> Croix) */}
                    <div className="flex items-center justify-end md:w-32">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="flex items-center gap-2 text-white hover:text-blue-400 focus:outline-none transition-colors group"
                        >
                            <span className="hidden md:inline text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-400">
                                {isMenuOpen ? 'Fermer' : 'Portail'}
                            </span>
                            <svg className={`w-8 h-8 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. OVERLAY SOMBRE */}
            <div 
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* 3. PANNEAU LATÉRAL COULISSANT */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-black/85 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pt-24 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <div className="p-6 flex flex-col gap-10">
                    
                    {/* BOUTON AION */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> 
                            Accès Portail
                        </h3>
                        
                        <Link 
                            to="/aion" 
                            onClick={() => setIsMenuOpen(false)}
                            className="group relative block w-full aspect-[21/9] rounded-lg overflow-hidden border border-white/20 hover:border-blue-500 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black to-black group-hover:scale-110 transition-transform duration-700 ease-out"></div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                    AION
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* LIENS MOBILE */}
                    <div className="md:hidden flex flex-col gap-6 border-t border-white/10 pt-8">
                        <a href="#universe" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
                            <span className="text-blue-500">/</span> L'Univers
                        </a>
                        <a href="#classes" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
                            <span className="text-blue-500">/</span> Classes
                        </a>
                        <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
                            <span className="text-blue-500">/</span> Connexion
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}