import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { getCast, getDetailMovie, getImages } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import CardCast from './_partials/CardCast';
import { Button, Card } from '@material-tailwind/react';
import Loading from '../../components/Loading';
import { FaPlay } from 'react-icons/fa';
import RecomendationsMoviesSlider from '../../components/RecomendationMoviesSlider';
import { MdUpcoming } from 'react-icons/md';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxImagesToShow = 6;

  useEffect(() => {
    setLoading(true);
    getDetailMovie(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });

    getCast(id).then((data) => {
      setCast(data.cast);
      setLoading(false);
    });

    getImages(id).then((data) => {
      setImages(data.backdrops);
      setLoading(false);
    });
  }, [id]);

  // useEffect(() => {
  //   setLoading(true);
  // }, [id]);

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <div className="w-full">
            <div
              className="relative h-screen bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(to top, #121212, rgba(0, 0, 0, 0.2)), url(${baseImageUrl}/original/${movie.backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 w-full "></div>
              <div className="absolute inset-0 flex flex-col items-center ml-10 lg:flex-row">
                <div className="flex-none">
                  <img
                    src={`${baseImageUrl}/w500/${movie.poster_path}`}
                    alt=""
                    className="w-[200px] h-[350px] lg:w-[300px] lg:h-[450px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col lg:ml-10 text-white max-w-[800px] gap-3">
                  <h1 className="text-5xl font-bold">{movie.title}</h1>
                  <div className="flex flex-col gap-2 text-sm lg:items-center lg:flex-row">
                    <div className="flex gap-2">
                      <span>{movie.release_date}</span>|
                      <div>
                        <span>
                          {movie.vote_average
                            ? movie.vote_average.toFixed(1)
                            : 'N/A'}
                        </span>
                        <span className="ml-1">({movie.vote_count})</span> |
                      </div>
                    </div>
                    <div className="space-x-2">
                      {movie.genres?.map((genre) => (
                        <span
                          key={genre.id}
                          className="px-2 py-1 rounded-sm bg-primary"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-kuning">Overview</h1>
                    <span className="text-justify">{movie.overview}</span>
                  </div>
                  <div>
                    <Button
                      className="flex items-center gap-2 capitalize rounded-sm bg-primary"
                      size="sm"
                    >
                      <FaPlay /> Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto text-white">
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-full">
                <h1 className="mb-3 text-2xl font-bold">
                  Companies Production
                </h1>
                <div className="flex w-full gap-5 overflow-x-scroll scrollbar-hide">
                  {movie.production_companies?.map(
                    (company) =>
                      company.logo_path && (
                        <Card className="p-3 rounded-md min-w-fit">
                          <img
                            key={company.id}
                            src={`${baseImageUrl}/w185/${company.logo_path}`}
                            alt={company.name}
                            className="object-cover w-full h-10"
                          />
                        </Card>
                      )
                  )}
                </div>
              </div>

              <div className="my-10 col-span-full lg:col-span-full">
                <div className="grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-6">
                  <div>
                    <h2 className="text-lg font-bold">Status</h2>
                    <h2 className="text-yellow-500">{movie.status}</h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Duration</h2>
                    <h2 className="text-yellow-500">
                      {convertMinutesToHours(movie.runtime)}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Budget</h2>
                    <h2 className="text-yellow-500">
                      $ {movie.budget?.toLocaleString()}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Revenue</h2>
                    <h2 className="text-yellow-500">
                      $ {movie.revenue?.toLocaleString()}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Popularity</h2>
                    <h2 className="text-yellow-500">{movie.popularity}</h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Spoken Language</h2>
                    <h2 className="text-yellow-500">
                      {movie.spoken_languages?.map((lang) => (
                        <span>{lang.name}</span>
                      ))}
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" col-span-full">
                <div>
                  <h1 className="mb-3 text-2xl font-bold">Top Cast</h1>
                  <div className="flex w-full max-w-full gap-3 overflow-x-scroll">
                    {cast.map(
                      (cast) =>
                        cast.profile_path && (
                          <Link
                            to={'/'}
                            key={cast.id}
                          >
                            <CardCast
                              image={`${baseImageUrl}/w185/${cast.profile_path}`}
                              name={cast.name}
                              character={cast.character}
                            />
                          </Link>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 col-span-full">
                <h1 className="mb-3 text-2xl font-bold">Media</h1>
                <div className="grid grid-cols-12">
                  <div className="col-span-full">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                      {images.slice(0, maxImagesToShow).map((image) => (
                        <img
                          src={`${baseImageUrl}/original/${image.file_path}`}
                          alt=""
                          className="object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-20">
              <div className="flex items-center justify-between my-5">
                <p className="flex items-center gap-2 text-base font-bold text-white md:text-2xl">
                  <MdUpcoming /> Recomendations Movies
                </p>
                <Link to={`/movies/recommendations-movies/${movie.id}`}>
                  <Button
                    size="sm"
                    className="text-white capitalize rounded-none bg-primary"
                  >
                    View All
                  </Button>
                </Link>
              </div>
              <div>
                <RecomendationsMoviesSlider />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMovie;
