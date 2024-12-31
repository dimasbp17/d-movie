import React, { useState } from 'react';

const GenreList = ({ genres, onSelectGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(28);

  const handleSelectGenre = (id) => {
    setSelectedGenre(id);
    onSelectGenre(id);
  };
  return (
    <>
      <div className="w-full max-w-full space-x-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        {genres.map((genre) => (
          <button
            className={`capitalize border rounded-full mx-2 px-4 py-2 ${
              selectedGenre === genre.id
                ? 'bg-primary text-white border-primary'
                : 'border-none text-white bg-[#333333]'
            }`}
            onClick={() => handleSelectGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default GenreList;
