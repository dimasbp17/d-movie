import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowButton from './ArrowButton';
import { genreMovies, getPopularMovies } from '../../../services/api';
import { Link } from 'react-router-dom';
import CardHorizontal from '../../../components/CardHorizontal';

const PopularMoviesSlider = ({ items }) => {
  const settings = {
    dots: false, // Menampilkan titik navigasi di bawah slider
    infinite: true, // Slide berjalan terus tanpa berhenti di slide terakhir
    speed: 500, // Kecepatan transisi dalam milidetik
    slidesToShow: 4, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang digeser saat navigasi
    autoplay: true, // Slide akan berpindah otomatis
    autoplaySpeed: 2000, // Interval waktu otomatis dalam milidetik
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="prev" />,
    centerMode: true, // Aktifkan centering pada slider
    centerPadding: '0px', // Pastikan tidak ada padding pada slider keseluruhan
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024, // Untuk layar dengan lebar <= 1024px
        settings: {
          slidesToShow: 3, // Tampilkan 3 slide
        },
      },
      {
        breakpoint: 768, // Untuk layar dengan lebar <= 768px
        settings: {
          slidesToShow: 2, // Tampilkan 2 slide di layar mobile
        },
      },
      {
        breakpoint: 480, // Untuk layar dengan lebar <= 480px
        settings: {
          slidesToShow: 2, // Tampilkan 1 slide di layar yang sangat kecil
        },
      },
    ],
  };

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });

    genreMovies().then((response) => {
      setGenres(response.genres);
    });
  }, []);
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .slice(0, 2)
      .join(', ');
  };

  return (
    <>
      <div className="mx-[-6px]">
        <Slider {...settings}>
          {popularMovies.map((movie, index) => (
            <div
              key={index}
              className=""
            >
              <Link to={`/movies/detail-movies/${movie.id}`}>
                <CardHorizontal
                  poster={`${baseImageUrl}/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  title={movie.title}
                  release={movie.release_date}
                  rating={movie.vote_average.toFixed(1)}
                  genre={getGenreNames(movie.genre_ids)}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PopularMoviesSlider;
