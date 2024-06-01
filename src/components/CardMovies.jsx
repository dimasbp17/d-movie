import React from 'react';
import john from '../../public/assets/john.png';
import { StarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

const CardMovies = () => {
    return (
        <>
            <div className="w-full bg-[#181818] bg-transparent rounded-lg">
                <div className="relative flex items-start justify-start">
                    <img
                        src={john}
                        alt=""
                        className="object-cover w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 py-2 text-white">
                    <p className="font-medium truncate">John Wick The King of Stunmant</p>
                    <div className="flex gap-3 text-xs">
                        <span>
                            <CalendarDaysIcon class="size-4 text-white" />
                        </span>
                        <span>20-04-2020</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white">
                        <StarIcon class="size-4" />
                        <span className="text-xs">5.5</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardMovies;
