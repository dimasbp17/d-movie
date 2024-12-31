import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i > currentPage - 3 && i < currentPage + 5 && pageNumbers.length < 5) {
      pageNumbers.push(i);
    }
  }
  return (
    <>
      <div className="flex justify-center w-full font-poppins">
        <span className="absolute text-white">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex items-center justify-center mt-8 space-x-2">
          <IconButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-black capitalize bg-[#FFD93D] disabled:bg-gray-400"
            size="sm"
          >
            <MdArrowBackIos />
          </IconButton>

          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mx-2 size-8 border rounded-md ${
                number === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black'
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          ))}

          <IconButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            size="sm"
            className="text-black capitalize bg-[#FFD93D] disabled:bg-gray-400"
          >
            <MdArrowForwardIos />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Pagination;
