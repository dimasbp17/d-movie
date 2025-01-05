import { Button } from '@material-tailwind/react';
import React from 'react';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import NowPlayingSlider from '../home/_partials/NowPlayingSlider';
import Navbar from '../../components/Navbar';
import PopularMoviesSlider from '../home/_partials/PopularMoviesSlider';
import { FaFire } from 'react-icons/fa';
import { MdUpcoming } from 'react-icons/md';
import UpcomingMoviesSlider from '../home/_partials/UpcomingMoviesSlider';
import TopRatedMoviesSlider from '../home/_partials/TopRatedMoviesSlider';
import { IoIosStar } from 'react-icons/io';

const AllMovies = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className="px-4 md:px-20">
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
      </section>
    </>
  );
};

export default AllMovies;
