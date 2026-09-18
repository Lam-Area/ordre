import React from 'react';
import { createRoot } from 'react-dom/client';

export default function App() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h1>🚀 React + TypeScript sur Laravel 11 !</h1>
        </div>
    );
}

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}