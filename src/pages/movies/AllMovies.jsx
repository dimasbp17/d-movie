import { Button } from '@material-tailwind/react';
import React from 'react';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import NowPlayingSlider from '../home/_partials/NowPlayingSlider';
import Navbar from '../../components/Navbar';

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
      </section>
    </>
  );
};

export default AllMovies;
