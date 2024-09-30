import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const GenreList = ({ genres, onSelectGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(28);

  const handleSelectGenre = (id) => {
    setSelectedGenre(id); // Simpan genre yang dipilih di state
    onSelectGenre(id); // Panggil callback untuk memproses genre yang dipilih
  };
  return (
    <>
      <div className="w-full max-w-full space-x-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        {genres.map((genre) => (
          <button
            className={`capitalize border rounded-full mx-2 px-4 py-3 ${
              selectedGenre === genre.id
                ? 'bg-primary text-white border-primary' // Warna merah dengan teks putih jika dipilih
                : 'border-primary text-primary' // Warna default jika tidak dipilih
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
