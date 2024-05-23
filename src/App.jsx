import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CardMovies from './components/CardMovies';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<LandingPage />}
                />
                <Route
                    path="/card"
                    element={<CardMovies />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
