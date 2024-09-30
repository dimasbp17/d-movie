import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardMovies from './components/CardMovies';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import PopularMovies from './pages/movies/PopularMovies';
import CardSlider from './components/slider/card-slider/CardSlider';
import TopRatedMovies from './pages/movies/TopRatedMovies';
import NowPlaying from './pages/movies/NowPlaying';
import UpcomingMovies from './pages/movies/UpcomingMovies';
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
          path="/movies/popular-movies"
          element={<PopularMovies />}
        />
        <Route
          path="/movies/top-rated-movies"
          element={<TopRatedMovies />}
        />
        <Route
          path="/movies/now-showing"
          element={<NowPlaying />}
        />
        <Route
          path="/movies/upcoming-movies"
          element={<UpcomingMovies />}
        />
        <Route
          path="/movies/detail-movies/:id"
          element={<DetailMovie />}
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
