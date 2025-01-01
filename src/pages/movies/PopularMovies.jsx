import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { genreMovies, getPopularMovies } from '../../services/api';
import CardMovies from '../../components/CardMovies';
import Pagination from '../../components/Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { FaFire } from 'react-icons/fa';
import { formatDate } from '../../utils/dateUtils';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setLoading(true);
    getPopularMovies(currentPage).then((data) => {
      setPopularMovies(data.results);
      setTotalPages(data.total_pages);
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
      <div className="container p-4 mx-auto md:p-0">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1 className="flex items-center gap-2 my-10 text-base font-bold text-white md:text-2xl">
              <FaFire /> Popular Movies
            </h1>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
              {popularMovies.map((movie, index) => (
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
          </>
        )}
      </div>
    </>
  );
};

export default PopularMovies;
