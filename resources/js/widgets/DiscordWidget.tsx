import React, { useEffect, useState } from 'react';

// On définit le format des données attendues par l'API Discord
interface DiscordData {
    name: string;
    presence_count: number;
    instant_invite: string;
}

export default function DiscordWidget() {
    const [data, setData] = useState<DiscordData | null>(null);

    // On récupère les données de ton serveur au chargement du composant
    useEffect(() => {
        fetch('https://discord.com/api/guilds/1266780635717177407/widget.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error("Erreur de chargement du widget Discord", err));
    }, []);

    return (
        <div className="bg-[#2f3136] rounded-lg p-6 flex flex-col items-center justify-center text-white shadow-[0_0_15px_rgba(88,101,242,0.2)] border border-[#5865F2]/30 w-full max-w-sm mx-auto h-[200px]">
            
            {/* Titre et Logo Discord */}
            <div className="flex items-center gap-3 mb-3">
                <img 
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" 
                    alt="Logo Discord" 
                    className="w-8 h-8" 
                />
                <h3 className="font-bold text-xl tracking-wider uppercase">{data ? data.name : 'Serveur Discord'}</h3>
            </div>
            
            {/* Compteur en ligne */}
            <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-gray-300 font-medium text-sm">
                    {data ? `${data.presence_count} membres en ligne` : 'Synchronisation...'}
                </span>
            </div>

            {/* Bouton d'invitation */}
            <a 
                href={data?.instant_invite || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-2 px-6 rounded transition-colors w-full text-center tracking-widest uppercase text-sm"
            >
                Rejoindre le serveur
            </a>
            
        </div>
    );
}