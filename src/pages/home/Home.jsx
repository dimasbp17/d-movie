import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider from './_partials/BannerSlider';
import NowPlayingSlider from './_partials/NowPlayingSlider';
import { Button } from '@material-tailwind/react';
import CardHorizontal from '../../components/CardHorizontal';
import PopularMoviesSlider from './_partials/PopularMoviesSlider';
import GenreList from '../../components/GenreList';
import { genreMovies, getDiscoverMovies } from '../../services/api';
import { FaFire } from 'react-icons/fa';

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(28);
  useEffect(() => {
    if (selectedGenre) {
      getDiscoverMovies(selectedGenre).then((data) => {
        setDiscoverMovies(data.results);
      });
    }

    genreMovies().then((response) => {
      setGenres(response.genres);
    });
  }, [selectedGenre]);

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  return (
    <>
      <div className=" font-poppins">
        <div>
          <Navbar />
        </div>
        <div className="z-50">
          <BannerSlider />
        </div>
        <div className="px-4 md:px-20">
          <div className="mt-10">
            <div className="flex items-center justify-between my-5">
              <p className="text-base font-bold text-white md:text-2xl">
                Now Showing Movies
              </p>
              <Link to={'/movies/popular-movies'}>
                <Button
                  size="sm"
                  className="text-white capitalize bg-primary"
                >
                  View All
                </Button>
              </Link>
            </div>
            <div>
              <NowPlayingSlider />
            </div>
          </div>

          <div className="my-20">
            <div className="flex items-center justify-between my-5">
              <p className="flex items-center gap-2 text-base font-bold text-white md:text-2xl">
                <FaFire /> Popular Movies
              </p>
              <Link to={'/movies/popular-movies'}>
                <Button
                  size="sm"
                  className="text-white capitalize bg-primary"
                >
                  View All
                </Button>
              </Link>
            </div>
            <div>
              <PopularMoviesSlider />
            </div>
          </div>

          <div className="my-20">
            <div className="flex items-center justify-between my-5">
              <p className="text-base font-bold text-white md:text-2xl">
                Discover Movies
              </p>
            </div>
            <div>
              <GenreList
                genres={genres}
                onSelectGenre={setSelectedGenre}
              />
            </div>
            <div className="grid grid-cols-2 gap-5 my-5 lg:grid-cols-5">
              {discoverMovies.map((movie) => (
                <CardHorizontal
                  poster={`${baseImageUrl}/${movie.backdrop_path}`}
                  alt={movie.title}
                  title={movie.title}
                  release={movie.release_date}
                  rating={movie.vote_average.toFixed(1)}
                  // genre={getGenreNames(movie.genre_ids)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
