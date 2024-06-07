import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardMovies from './components/CardMovies';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Navbar from './components/Navbar';
import PopularMovies from './pages/movies/PopularMovies';
import CardSlider from './components/CardSlider';

const App = () => {
    return (
        <BrowserRouter>
            <Routes element={<Navbar />}>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/card"
                    element={<CardMovies />}
                />
                <Route
                    path="/movies"
                    element={<Movies />}
                />
                <Route
                    path="/popularmovies"
                    element={<PopularMovies />}
                />
                <Route
                    path="/cardslider"
                    element={<CardSlider />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
