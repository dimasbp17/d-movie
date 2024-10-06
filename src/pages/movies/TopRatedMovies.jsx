import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { genreMovies, getTopRatedMovies } from '../../services/api';
import CardMovies from '../../components/CardMovies';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTopRatedMovies(currentPage).then((data) => {
      setTopRatedMovies(data.results);
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
          <h1 className="my-10 text-2xl font-bold text-white font-poppins">
            Top Rated Movies
          </h1>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {topRatedMovies.map((movie, index) => (
              <div key={index}>
                <Link to={`/movies/detail-movies/${movie.id}`}>
                  <CardMovies
                    poster={`${baseImageUrl}/w500/${movie.poster_path}`}
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

export default TopRatedMovies;
