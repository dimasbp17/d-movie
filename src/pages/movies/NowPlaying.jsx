import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { genreMovies, getNowPlaying } from '../../services/api';
import CardMovies from '../../components/CardMovies';
import Pagination from '../../components/Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { formatDate } from '../../utils/dateUtils';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [dateRange, setDateRange] = useState({});
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setLoading(true);
    getNowPlaying(currentPage).then((data) => {
      setNowPlaying(data.results);
      setTotalPages(data.total_pages);
      setDateRange(data.dates);
      setLoading(false);
    });

    genreMovies().then((response) => {
      setGenres(response.genres);
    });
  }, [currentPage]);

  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ');
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container p-4 mx-auto md:p-0">
          <h1 className="flex items-center gap-2 mt-10 text-2xl font-bold text-white font-poppins">
            <RiSlideshow3Fill /> Now Showing Movies
          </h1>
          {dateRange && (
            <p className="my-5 text-white">
              Showing movies from{' '}
              <span className="text-[#FFD93D]">{dateRange.minimum}</span> to{' '}
              <span className="text-[#FFD93D]">{dateRange.maximum}</span>
            </p>
          )}
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {nowPlaying.map((movie, index) => (
              <div key={index}>
                <Link to={`/movies/detail-movies/${movie.id}`}>
                  <CardMovies
                    poster={`${baseImageUrl}/w500/${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                    releaseDate={formatDate(movie.release_date)}
                    rating={movie.vote_average.toFixed(1)}
                    genre={getGenreNames(movie.genre_ids)}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="my-5">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NowPlaying;
