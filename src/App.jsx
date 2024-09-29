import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardMovies from './components/CardMovies';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Navbar from './components/Navbar';
import PopularMovies from './pages/movies/PopularMovies';
import CardSlider from './components/slider/card-slider/CardSlider';
import DetailMovie from './pages/movies/DetailMovie';

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
          path="/movies/popular-movies"
          element={<PopularMovies />}
        />
        <Route
          path="/cardslider"
          element={<CardSlider />}
        />
        <Route
          path="/movies/detail-movie"
          element={<DetailMovie />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
