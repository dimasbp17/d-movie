import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

const CardMovies = ({ poster, alt, title, releaseDate, rating, genre }) => {
  return (
    <>
      <div className="bg-[#333333] transition-bg hover:bg-gradient-to-t duration-300 hover:from-[#333333] hover:to-[#FFD700]">
        <div className="relative flex items-center justify-center">
          <img
            src={poster}
            alt={alt}
            className="inset-0 object-cover lg:h-[300px] w-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 text-white">
          <p className="truncate">{title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs">
              <FaCalendarAlt className="text-[#FFD700] size-3" />
              <span className="text-[10px] lg:text-xs">{releaseDate}</span>
            </div>
            <div className="flex items-center gap-1 text-white">
              <IoStar className="size-3 text-[#FFD700]" />
              <span className="text-[10px] lg:text-xs">{rating} / 10</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-400">{genre}</div>
        </div>
      </div>
    </>
  );
};

export default CardMovies;
