import axios from 'axios';

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const genreMovies = async () => {
  try {
    const genre = await axios.get(
      `${baseUrl}/genre/movie/list?api_key=${apiKey}`
    );
    return genre.data;
  } catch (error) {
    console.error('Error fetching genre movie:', error);
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const popularMovies = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`
    );
    return popularMovies.data;
    // return { ...data, results: data.results };
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const topRatedMovies = await axios.get(
      `${baseUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`
    );
    return topRatedMovies.data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

export const getNowPlaying = async (page = 1) => {
  try {
    const nowPlaying = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}&page=${page}`
    );
    return nowPlaying.data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const upcoming = await axios.get(
      `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=${page}`
    );
    return upcoming.data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

export const getDiscoverMovies = async (id) => {
  try {
    const discover = await axios.get(
      `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}`
    );
    return discover.data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

export const getDetailMovie = async (id) => {
  try {
    const detail = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
    return detail.data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

export const getCast = async (id) => {
  try {
    const cast = await axios.get(
      `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`
    );
    return cast.data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};
