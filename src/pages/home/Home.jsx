import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider from './_partials/BannerSlider';
import NowPlayingSlider from './_partials/NowPlayingSlider';
import { Button } from '@material-tailwind/react';

const Home = () => {
  return (
    <>
      <div className=" font-poppins">
        <div className="sticky top-0 z-50">
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
              <p className="text-base font-bold text-white md:text-2xl">
                Popular Movies
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
