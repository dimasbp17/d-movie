import React from 'react';
import Navbar from '../../components/Navbar';
import CardSlider from '../../components/CardSlider';
import HeroSlider from '../../components/HeroSlider';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="bg-[#222831] font-poppins">
                <div>
                    <Navbar />
                </div>
                <div>
                    <HeroSlider />
                </div>
                <div className="px-4 md:px-10">
                    <div>
                        <div className="flex items-center justify-between my-5">
                            <p className="text-xl font-semibold text-white">POPULAR MOVIES</p>
                            <Link
                                to={'/popularmovies'}
                                className="px-5 py-1 font-semibold text-black bg-yellow-500 rounded-sm"
                            >
                                Other
                            </Link>
                        </div>
                        <div>
                            <CardSlider />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between my-5">
                            <p className="text-xl font-semibold text-white">CURRENTLY PLAYING</p>
                            <Link
                                to={'/popularmovies'}
                                className="px-5 py-1 font-semibold text-black bg-yellow-500 rounded-sm"
                            >
                                Other
                            </Link>
                        </div>
                        <div>
                            <CardSlider />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
