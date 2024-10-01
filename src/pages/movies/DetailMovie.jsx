import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { getDetailMovie } from '../../services/api';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDetailMovie(id).then((data) => {
      setMovie(data);
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
            <div className="absolute inset-0 flex items-center ml-10">
              <div className="flex-none">
                <img
                  src={`${baseImageUrl}/${movie.poster_path}`}
                  alt=""
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col ml-10 text-white max-w-[800px] gap-2">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                  <span>{movie.release_date}</span>|
                  <div>
                    <span>
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : 'N/A'}
                    </span>
                    <span className="ml-1">({movie.vote_count})</span>
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
                <span className="text-justify">{movie.overview}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-white">
          <div>
            sasa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo libero atque voluptas labore illo, nesciunt nemo ducimus
            quia nostrum fuga, laboriosam eum nam praesentium repellendus?
            Debitis molestias sed deserunt cum enim maiores, pariatur dolorem
            dicta, et harum cupiditate. Illum nemo laborum similique voluptates
            sequi a veniam dolorum at alias commodi omnis quam, facilis neque
            molestias ea repellendus molestiae consectetur voluptas beatae quas
            eum? Blanditiis laborum error, voluptatibus magnam placeat provident
            amet itaque facere minima repellat quae numquam facilis tempora
            eligendi minus nemo alias tenetur. Aliquid, veritatis? Distinctio,
            mollitia nostrum? Recusandae laboriosam assumenda non voluptatem,
            magnam doloribus quis fugit minus culpa?
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
