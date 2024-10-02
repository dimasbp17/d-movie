import { Card } from '@material-tailwind/react';
import React from 'react';
import gambar from '../../../../public/assets/avatar.png';

const CardCast = ({ image, alt, name, character }) => {
  return (
    <>
      <div className="max-w-full rounded-none min-w-[150px] bg-transparent text-white">
        <div>
          <img
            src={image}
            alt={alt}
            className="object-cover w-full size-[150px] rounded-3xl object-top"
          />
        </div>
        <div className="p-2 text-sm text-center">
          <h5 className="font-bold">{name}</h5>
          <h5 className="">{character}</h5>
        </div>
      </div>
    </>
  );
};

export default CardCast;
