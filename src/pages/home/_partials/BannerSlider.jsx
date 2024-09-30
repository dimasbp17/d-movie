import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../../../../public/assets/avatar.png';
import { genreMovies, getPopularMovies } from '../../../services/api';
import ArrowButtonBanner from './ArrowButtonBanner';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const BannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setBanners(data.results);
      // console.log(data.results);
    });
    genreMovies().then((response) => {
      setGenres(response.genres);
    });
  }, []);

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ');
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
      <div className="slider-container">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative"
            >
              <img
                src={`${baseImageUrl}/${banner.backdrop_path}`}
                alt="Slide 1"
                className="object-cover w-full h-[500px]"
              />

              {/* <img
                src={`${baseImageUrl}/${banner.poster_path}`}
                alt=""
                className="absolute object-cover h-[250px] w-[150px] top-10 left-10"
              /> */}

              <div className="absolute text-white top-60 left-20 max-w-[800px]">
                <h1 className="text-4xl font-bold">{banner.title}</h1>
                <div className="flex items-center my-2 text-sm">
                  <h6 className="text-gray-300 ">{banner.release_date}</h6>
                  <span className="mx-2">|</span>
                  <h6 className="text-gray-300 ">
                    {getGenreNames(banner.genre_ids)}
                  </h6>
                </div>
                <span>{banner.overview}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
