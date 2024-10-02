import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { getCast, getDetailMovie } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import CardCast from './_partials/CardCast';
import { Card } from '@material-tailwind/react';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getDetailMovie(id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  useEffect(() => {
    getCast(id).then((data) => {
      setCast(data.cast);
    });
  }, [id]);

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="relative">
        <div className="w-full">
          <div
            className="relative h-screen bg-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(to top, #121212, rgba(0, 0, 0, 0.2)), url(${baseImageUrl}/${movie.backdrop_path})`,
            }}
          >
            {/* <img
              src={`${baseImageUrl}/${movie.backdrop_path}`}
              alt=""
              className="object-cover w-full h-screen bg-gradient-to-t from-black to-transparent"
            /> */}
            <div className="absolute inset-0 w-full "></div>
            <div className="absolute inset-0 flex flex-col items-center ml-10 lg:flex-row">
              <div className="flex-none">
                <img
                  src={`${baseImageUrl}/${movie.poster_path}`}
                  alt=""
                  className="w-[300px] h-[450px] object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col ml-10 text-white max-w-[800px] gap-3">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                  <span>{movie.release_date}</span>|
                  <div>
                    <span>
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : 'N/A'}
                    </span>
                    <span className="ml-1">({movie.vote_count})</span> |
                  </div>
                  {movie.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-2 py-1 rounded-sm bg-primary"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div>
                  <h1 className="text-lg font-bold text-kuning">Overview</h1>
                  <span className="text-justify">{movie.overview}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-white">
          <div className="grid grid-cols-12 p-4">
            <div className="h-10 col-span-full lg:col-span-10">
              <div className="mb-5">
                <h1 className="mb-3 text-2xl font-bold">
                  Companies Production
                </h1>
                <div className="flex gap-5">
                  {movie.production_companies?.map(
                    (company) =>
                      company.logo_path && (
                        <Card className="p-2 rounded-none">
                          <img
                            key={company.id}
                            src={`${baseImageUrl}/${company.logo_path}`}
                            alt={company.name}
                            className="w-auto h-10"
                          />
                        </Card>
                      )
                  )}
                </div>
              </div>
              <div>
                <h1 className="mb-3 text-2xl font-bold">Top Cast</h1>
                <div className="flex w-full max-w-full gap-3 overflow-x-scroll scrollbar-hide scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-700">
                  {cast.map(
                    (cast) =>
                      cast.profile_path && (
                        <Link
                          to={'/'}
                          key={cast.id}
                        >
                          <CardCast
                            image={`${baseImageUrl}/${cast.profile_path}`}
                            name={cast.name}
                            character={cast.character}
                          />
                        </Link>
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="h-10 ml-5 space-y-3 col-span-full lg:col-span-2">
              <div>
                <h2 className="text-lg font-bold">Status</h2>
                <h2 className="text-gray-400">{movie.status}</h2>
              </div>
              <div>
                <h2 className="text-lg font-bold">Budget</h2>
                <h2 className="text-gray-400">
                  $ {movie.budget?.toLocaleString()}
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-bold">Revenue</h2>
                <h2 className="text-gray-400">
                  $ {movie.revenue?.toLocaleString()}
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-bold">Spoken Language</h2>
                <h2 className="text-gray-400">
                  {movie.spoken_languages?.map((lang) => (
                    <span>{lang.name}</span>
                  ))}
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-bold">Popularity</h2>
                <h2 className="text-gray-400">{movie.popularity}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
