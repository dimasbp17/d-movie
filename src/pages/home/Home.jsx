import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { IoFilterCircle } from 'react-icons/io5';
import { MdUpcoming } from 'react-icons/md';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CardHorizontal from '../../components/CardHorizontal';
import Footer from '../../components/Footer';
import GenreList from '../../components/GenreList';
import Navbar from '../../components/Navbar';
import { genreMovies, getDiscoverMovies } from '../../services/api';
import BannerSlider from './_partials/BannerSlider';
import NowPlayingSlider from './_partials/NowPlayingSlider';
import PopularMoviesSlider from './_partials/PopularMoviesSlider';
import TopRatedMoviesSlider from './_partials/TopRatedMoviesSlider';
import UpcomingMoviesSlider from './_partials/UpcomingMoviesSlider';
import { formatDate } from '../../utils/dateUtils';

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

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ');
  };

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="z-50">
          <BannerSlider />
        </div>
        <div className="px-4 md:px-20">
          <div className="mt-10">
            <div className="flex items-center justify-between my-5">
              <p className="flex items-center gap-2 text-base font-bold text-white md:text-2xl">
                <RiSlideshow3Fill /> Now Showing Movies
              </p>
              <Link to={'/movies/now-showing'}>
                <Button
                  size="sm"
                  className="text-white capitalize rounded-none bg-primary"
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
                  className="text-white capitalize rounded-none bg-primary"
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
              <p className="flex items-center gap-2 text-base font-bold text-white md:text-2xl">
                <IoFilterCircle /> Discover Movies
              </p>
            </div>
            <div>
              <GenreList
                genres={genres}
                onSelectGenre={setSelectedGenre}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 my-5 lg:grid-cols-4">
              {discoverMovies.map((movie) => (
                <Link to={`/movies/detail-movies/${movie.id}`}>
                  <CardHorizontal
                    poster={`${baseImageUrl}/w500/${movie.backdrop_path}`}
                    alt={movie.title}
                    title={movie.title}
                    release={formatDate(movie.release_date)}
                    rating={movie.vote_average.toFixed(1)}
                    genre={getGenreNames(movie.genre_ids)}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="my-20">
            <div className="flex items-center justify-between my-5">
              <p className="flex items-center gap-2 text-base font-bold text-white md:text-2xl">
                <IoIosStar /> Top Rated Movies
              </p>
              <Link to={'/movies/top-rated-movies'}>
                <Button
                  size="sm"
                  className="text-white capitalize rounded-none bg-primary"
                >
                  View All
                </Button>
              </Link>
            </div>
            <div>
              <TopRatedMoviesSlider />
            </div>
          </div>

          <div className="my-20">
            <div className="flex items-center justify-between my-5">
              <p className="flex items-center gap-2 text-base font-bold text-white md:text-2xl">
                <MdUpcoming /> Upcoming Movies
              </p>
              <Link to={'/movies/upcoming-movies'}>
                <Button
                  size="sm"
                  className="text-white capitalize rounded-none bg-primary"
                >
                  View All
                </Button>
              </Link>
            </div>
            <div>
              <UpcomingMoviesSlider />
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
