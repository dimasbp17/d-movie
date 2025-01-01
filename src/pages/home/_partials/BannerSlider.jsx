import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { genreMovies, getPopularMovies } from '../../../services/api';
import ArrowButtonBanner from './ArrowButtonBanner';
import { formatDate } from '../../../utils/dateUtils';

const BannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setBanners(data.results);
    });
    genreMovies().then((response) => {
      setGenres(response.genres);
    });
  }, []);

  const getGenreNames = (genreIds) => {
    return (
      genreIds
        .map((id) => genres.find((genre) => genre.id === id)?.name)
        .filter(Boolean)
        // .slice(0, 3)
        .join(', ')
    );
  };

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  const settings = {
    dots: false, // Menampilkan titik navigasi di bawah slider
    infinite: true, // Slide berjalan terus tanpa berhenti di slide terakhir
    speed: 500, // Kecepatan transisi dalam milidetik
    slidesToShow: 1, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang digeser saat navigasi
    autoplay: true, // Slide akan berpindah otomatis
    autoplaySpeed: 3000, // Interval waktu otomatis dalam milidetik
    nextArrow: <ArrowButtonBanner type="next" />,
    prevArrow: <ArrowButtonBanner type="prev" />,
    lazyLoad: true,
  };
  return (
    <>
      <div className="w-full h-screen overflow-hidden slider-container">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative w-full"
            >
              <img
                src={`${baseImageUrl}/original/${banner.backdrop_path}`}
                alt={banner.title}
                className="object-cover object-top w-full h-screen"
                loading="lazy"
              />
              <div className="absolute inset-0 left-0 w-3/4 h-full bg-gradient-to-r from-black to-transparent"></div>

              <div className="absolute text-white top-60 left-10 lg:left-20 max-w-[700px]">
                <h1 className="text-4xl font-bold">{banner.title}</h1>
                <div className="flex items-center my-2 text-sm">
                  <h6 className="text-gray-300 ">
                    {formatDate(banner.release_date)}
                  </h6>
                  <span className="mx-2">|</span>
                  <h6 className="text-gray-300 ">
                    {getGenreNames(banner.genre_ids)}
                  </h6>
                </div>
                <div className="text-xs text-justify lg:text-base">
                  {banner.overview}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
