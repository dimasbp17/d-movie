import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import avatar from '../../../public/assets/avatar.png';
import { genreMovies, getDetailMovie } from '../../services/api';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    getDetailMovie(id).then((data) => {
      setDetailMovie(data);
      console.log(data);
    });
  }, [id]);
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="w-full">
          <div className="relative">
            <img
              src={`${baseImageUrl}/${detailMovie.backdrop_path}`}
              alt=""
              className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 w-full bg-black/70"></div>
          </div>
        </div>
        <div className="container mx-auto text-white">{detailMovie.title}</div>
      </div>
    </>
  );
};

export default DetailMovie;
