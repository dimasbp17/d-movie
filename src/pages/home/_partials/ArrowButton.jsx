import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const ArrowButton = ({ type, onClick }) => {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-gray-500/40 text-black border shadow-lg p-2 ${
        type === 'next' ? '-right-4' : '-left-4'
      }`}
      onClick={onClick}
    >
      {type === 'next' ? (
        <IoChevronForward className="size-4" />
      ) : (
        <IoChevronBack className="size-4" />
      )}
    </button>
  );
};

export default ArrowButton;
