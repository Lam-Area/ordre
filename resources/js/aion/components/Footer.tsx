import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-center py-8 text-gray-600 text-sm mt-auto relative z-20">
            <p>&copy; {new Date().getFullYear()} ORDRE. Tous droits réservés.</p>
        </footer>
    );
}