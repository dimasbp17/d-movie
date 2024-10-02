import { Card } from '@material-tailwind/react';
import React from 'react';
import gambar from '../../../../public/assets/avatar.png';

const CardCast = ({ image, alt, name, character }) => {
  return (
    <>
      <Card className="max-w-full rounded-none min-w-[150px] h-auto bg-[#333333] text-white">
        <div>
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-[200px]"
          />
        </div>
        <div className="p-2">
          <h5 className="font-bold">{name}</h5>
          <h5 className="text-sm">{character}</h5>
        </div>
      </Card>
    </>
  );
};

export default CardCast;
