import React from 'react';
import { Outlet } from 'react-router-dom';

// On importe tes composants globaux
import Header from '../aion/components/Header';
import Footer from '../aion/components/Footer';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans">
            <Header />
            
            {/* Le contenu de la page active s'affichera ici */}
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
}