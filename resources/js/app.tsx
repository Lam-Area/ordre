import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import Ordre from './Ordre';
import AionMain from './aion/pages/Aion';
import Login from './aion/pages/Login';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Toutes les routes placées à l'intérieur de cette balise utiliseront le MainLayout */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Ordre />} />
                    <Route path="/aion" element={<AionMain />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
if (container) {
    // Correctif ultime pour le Hot Reload de Vite et React 18 (empêche l'erreur rouge)
    // @ts-ignore
    if (!container.__reactRoot) {
        // @ts-ignore
        container.__reactRoot = createRoot(container);
    }
    // @ts-ignore
    container.__reactRoot.render(<App />);
}