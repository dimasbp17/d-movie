import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { genreMovies, getNowPlaying } from '../../services/api';
import CardMovies from '../../components/CardMovies';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateRange, setDateRange] = useState({});
  const [loading, setLoading] = useState(true);

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
      setCurrentPage(newPage);
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
          <h1 className="mt-10 text-2xl font-bold text-white font-poppins">
            Now Showing Movies
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
                <Link to={'/'}>
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
