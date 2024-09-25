import axios from 'axios';

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const getMovieList = async () => {
  try {
    const popularMovies = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`
    );
    console.log(popularMovies.data.results);
  } catch (error) {
    console.error('Error fetching movie list:', error);
  }
};

// export const getNowPlaying = async () => {
//   try {
//     const nowPlaying = await axios.get(
//       `${baseUrl}/movie/now_playing?api_key=${apiKey}`
//     );
//     console.log(nowPlaying.data.results);
//   } catch (error) {
//     console.error('Error fetching movie list:', error);
//   }
// };
