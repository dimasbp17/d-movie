import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import CardSlider from '../../components/slider/card-slider/CardSlider';
import HeroSlider from '../../components/slider/hero-slider/HeroSlider';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios';

const Movies = () => {
    useEffect(() => {
        const showdata = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');

                // setData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        showdata();
    }, []);

    return (
        <>
            <div className="bg-black font-poppins">
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>

                <div className="px-4 md:px-20">
                    <div>
                        <div className="flex items-center justify-between my-5">
                            <p className="text-2xl font-bold text-white">Popular Movies</p>
                            <Link
                                to={'/popularmovies'}
                                className="px-5 py-1 font-medium text-white bg-[#FF0000] hover:bg-red-500 rounded-sm duration-300"
                            >
                                View All
                            </Link>
                        </div>
                        <div>
                            <CardSlider />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between my-5">
                            <p className="text-2xl font-bold text-white">Currently Playing</p>
                            <Link
                                to={'/popularmovies'}
                                className="px-5 py-1 font-medium text-white bg-[#FF0000] hover:bg-red-500 rounded-sm duration-300"
                            >
                                View All
                            </Link>
                        </div>
                        <div>
                            <CardSlider />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Movies;
