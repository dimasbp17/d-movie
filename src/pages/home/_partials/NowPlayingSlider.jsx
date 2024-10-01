import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowButton from './ArrowButton';
import { genreMovies, getNowPlaying } from '../../../services/api';
import CardMovies from '../../../components/CardMovies';
import { Link } from 'react-router-dom';

const NowPlayingSlider = ({ items }) => {
  const settings = {
    dots: false, // Menampilkan titik navigasi di bawah slider
    infinite: true, // Slide berjalan terus tanpa berhenti di slide terakhir
    speed: 500, // Kecepatan transisi dalam milidetik
    slidesToShow: 5, // Jumlah slide yang ditampilkan sekaligus
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

  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getNowPlaying().then((data) => {
      setNowPlaying(data.results);
      console.log(data.results);
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
          {nowPlaying.map((movie, index) => (
            <div
              key={index}
              className=""
            >
              <Link to={`/movies/detail-movies/${movie.id}`}>
                <CardMovies
                  poster={`${baseImageUrl}/${movie.poster_path}`}
                  alt={movie.title}
                  title={movie.title}
                  releaseDate={movie.release_date}
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

export default NowPlayingSlider;
