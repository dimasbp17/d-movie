import React from 'react';
import john from '../../public/assets/john.png';
import { StarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

const CardMovies = () => {
    return (
        <>
            <div className="w-52 bg-[#181818] bg-transparent rounded-lg">
                <div className="relative flex items-center justify-center">
                    <img
                        src={john}
                        alt=""
                        className="inset-0 object-cover w-52"
                    />
                </div>
                <div className="flex flex-col gap-2 py-2 text-white">
                    <p className="font-medium truncate">John Wick The King of Stunmant</p>
                    <div className="flex gap-3 text-xs">
                        <span>
                            <CalendarDaysIcon className="text-white size-4" />
                        </span>
                        <span>20-04-2020</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white">
                        <StarIcon className="size-4" />
                        <span className="text-xs">5.5</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardMovies;
