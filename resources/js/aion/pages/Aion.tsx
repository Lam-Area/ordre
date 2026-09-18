import React from 'react';

// C'est le "export default" qui manquait ou était mal écrit
export default function AionMain() {
    return (
        <div className="pt-32 pb-20 min-h-screen flex flex-col items-center relative z-10">
            <h1 className="text-5xl font-bold text-blue-500 mb-6">Portail Aion</h1>
            <p className="text-gray-300">Bienvenue sur la section dédiée au jeu.</p>
        </div>
    );
}