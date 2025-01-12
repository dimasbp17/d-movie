import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

const CardHorizontal = ({ poster, alt, title, release, rating, genre }) => {
  return (
    <>
      <div className="bg-[#333333] transition-bg hover:bg-gradient-to-t duration-500 hover:from-[#333333] hover:to-[#FFD700]">
        <div className="relative">
          <img
            src={poster}
            alt={alt}
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 text-white">
          <p className="truncate">{title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[10px] md:text-[11px]">
              <FaCalendarAlt className="text-[#FFD700] size-[10px]" />
              <span>{release}</span>
            </div>
            <div className="flex items-center gap-1 text-white">
              <IoStar className="size-3 text-[#FFD700]" />
              <span className="text-[10px] md:text-[11px]">{rating} / 10</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-400">{genre}</div>
        </div>
      </div>
    </>
  );
};

export default CardHorizontal;
