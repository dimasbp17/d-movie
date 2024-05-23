import React from 'react';
import john from '../../public/assets/john.png';
import { StarIcon } from '@heroicons/react/24/solid';

const CardMovies = () => {
    return (
        <>
            <div className="bg-black rounded-md w-fit h">
                <div className="relative flex items-start justify-start">
                    <img
                        src={john}
                        alt=""
                        className="h-56 rounded-md w-44"
                    />
                    <div className="absolute px-3 py-1 bg-black opacity-75">
                        <p className="flex items-center gap-1 text-yellow-500">
                            <StarIcon class="size-4 text-yellow-500" />
                            <span className="text-sm">5.5</span>
                        </p>
                    </div>
                </div>
                <div className="p-2 text-white">
                    <p className="font-bold">John Wick</p>
                    <p className="text-xs italic">
                        <span>Release : </span>
                        <span>20-04-2020</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CardMovies;
