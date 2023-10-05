import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import { Front } from './pages/Front'; // Import your Front component
import NotFound from './pages/NotFound'; // Import your NotFound component
import cardData from './cards/carddata';
import {CardInfo} from "./pages/CardInfo";
import {Alphabetical} from "./pages/Alphabetical";
import {Rules} from "./pages/Rules";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">Card list</Link> &middot; <Link to="/alpha">Alphabetical</Link> &middot; <Link to="/rules">Rules</Link>
                <hr/>
                <Routes>
                    <Route path="/" element={<Front />} />
                    <Route path="/alpha" element={<Alphabetical />} />
                    <Route path="/rules" element={<Rules />} />
                    {cardData.map((card) => (
                        <Route key={card.url} path={card.url} element={<CardInfo card={card}/>} />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
