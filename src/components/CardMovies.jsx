import React from 'react';
import john from '../../public/assets/john.png';
import { StarIcon } from '@heroicons/react/24/solid';

const CardMovies = () => {
    return (
        <>
            <div className="w-full bg-[#181818] bg-transparent">
                <div className="relative flex items-start justify-start">
                    <img
                        src={john}
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="p-2 text-white">
                    <p className="font-bold">John Wick The King of Stunmant</p>
                    <p className="text-xs">
                        <span>Release : </span>
                        <span>20-04-2020</span>
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                        <span>Rating </span>
                        <StarIcon class="size-4 text-yellow-500" />
                        <span className="text-xs">5.5</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardMovies;
