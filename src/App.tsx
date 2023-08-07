import React from 'react';
import {Routes, Route} from "react-router-dom";
import { Front } from './pages/Front'; // Import your Front component
import NotFound from './pages/NotFound'; // Import your NotFound component
import cardData from './cards/carddata';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Front />} />
                    {cardData.map((link) => (
                        <Route key={link.url} path={link.url} element={<Front />} />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
