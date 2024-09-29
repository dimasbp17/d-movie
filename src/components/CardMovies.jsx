import React from 'react';
// import poster from '../../public/assets/poster.png';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

const CardMovies = ({ poster, alt, title, releaseDate, rating, genre }) => {
  return (
    <>
      <div className=" bg-[#333333]">
        <div className="relative flex items-center justify-center">
          <img
            src={poster}
            alt={alt}
            className="inset-0 object-cover h-[300px] w-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 text-white">
          <p className="truncate">{title}</p>
          <div className="flex items-center gap-3 text-xs">
            <FaCalendarAlt className="text-[#FFD700] size-3" />
            <span>{releaseDate}</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <IoStar className="size-3 text-[#FFD700]" />
            <span className="text-xs">{rating} / 10</span>
          </div>
          <div className="text-xs text-gray-300">{genre}</div>
        </div>
      </div>
    </>
  );
};

export default CardMovies;
