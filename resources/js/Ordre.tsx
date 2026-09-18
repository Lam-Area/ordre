import React from 'react';
import DiscordWidget from './widgets/DiscordWidget';

export default function Ordre() {
    return (
        <div className="bg-black text-white font-sans selection:bg-red-700 selection:text-white">
            {/* SECTION 1 : Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img/bg.gif" 
                        alt="Background animé"
                        className="w-full h-full object-cover opacity-40 transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
                        ORDRE
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl font-light tracking-wide drop-shadow-md">
                        Forgez votre destinée dans un monde ouvert impitoyable où la magie noire et le chaos dictent les lois. Le MMORPG nouvelle génération commence ici.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                            <span>📰</span> Nos actualités
                        </button>
                        <button className="border border-white/30 bg-black/40 backdrop-blur-md text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                            Qui sommes-nous
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 2 : Communauté / Discord */}
            <section id="universe" className="min-h-screen bg-black flex flex-col items-center justify-center relative z-10 py-20 px-6">
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-white mb-6 border-b-2 border-red-700 pb-4 inline-block">
                            Rejoins les rangs
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            L'Ordre n'est pas qu'une simple guilde, c'est une légion. Viens discuter stratégie, préparer les prochains raids et rencontrer tes futurs frères d'armes sur notre serveur vocal.
                        </p>
                        <ul className="space-y-3 text-gray-300 font-semibold mb-8">
                            <li className="flex items-center gap-3"><span className="text-red-600">⚔️</span> Recrutement Ouvert</li>
                            <li className="flex items-center gap-3"><span className="text-red-600">🎙️</span> Stratégies et Raids Vocaux</li>
                            <li className="flex items-center gap-3"><span className="text-red-600">🛡️</span> Entraide et Économie de Guilde</li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <DiscordWidget />
                    </div>

                </div>
            </section>
        </div>
    );
}