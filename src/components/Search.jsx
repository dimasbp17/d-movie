import React, { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { searchMovies } from '../services/api';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false); // Set loading to false initially
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState(null);

  const dropdown = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown]);

  const handleSearch = async (e) => {
    const queryValue = e.target.value;
    setQuery(queryValue); // Update query state
    if (queryValue.length > 0) {
      setLoading(true);
      setError(null);
      try {
        const results = await searchMovies(queryValue); // Use queryValue for search
        setSuggestions(results.length > 0 ? results : []);
        setShowDropdown(true); // Correct usage of setShowDropdown
      } catch (error) {
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  const handleSelectMovie = () => {
    setQuery(''); // Clear query input after selection
    setSuggestions([]); // Clear suggestions
    setShowDropdown(false); // Hide dropdown
  };

  return (
    <div className="relative">
      <input
        type="search"
        className="w-full px-3 text-xs text-black bg-gray-100 border border-white h-7 lg:h-10 lg:w-80 focus:outline-none"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-primary">
        <IoMdSearch className="text-white size-5" />
      </div>
      {showDropdown && (
        <ul
          ref={dropdown}
          className="absolute z-50 w-full mt-2 overflow-y-auto shadow-lg bg-white/100 max-h-80"
        >
          {loading ? (
            <li className="flex justify-center p-2 text-gray-800">
              Loading...
            </li>
          ) : suggestions.length > 0 ? (
            suggestions.map((movie) => (
              <li
                key={movie.id}
                className="border-b"
              >
                <Link
                  to={`/movies/detail-movies/${movie.id}`}
                  onClick={handleSelectMovie}
                  className="block p-2 hover:bg-gray-200"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      className="object-cover w-12 h-16 mr-2"
                    />
                    <div className="block">
                      <h6 className="text-black">{movie.title}</h6>
                      <h6 className="text-sm text-black">
                        {movie.release_date}
                      </h6>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="flex justify-center p-2 text-gray-800">
              No movies found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
