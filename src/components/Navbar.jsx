import React, { useState } from 'react';
import Search from './Search';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import movies from '../../public/assets/dmovies.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('Home');

    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (menuName) => {
        setActive(menuName);
    };
    const isActiveMenu = (menuName) => {
        return active === menuName ? 'text-[#FF0000]' : 'hover:text-[#FF0000] duration-300';
    };

    return (
        <>
            <div className="w-full p-4 text-white bg-black shadow-xl md:px-20 font-poppins md:py-5 shadow-gray-500">
                <div>
                    <button
                        className="items-end justify-end block ms-auto md:hidden"
                        onClick={toogleNavbar}
                    >
                        {isOpen ? <XMarkIcon className="w-6 h-6 text-white" /> : <Bars3Icon className="w-6 h-6 text-white" />}
                    </button>
                </div>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to={'/'}>
                        <img
                            src={movies}
                            alt=""
                            className="hidden w-36 md:block"
                        />
                    </Link>
                    <ul className="flex flex-col items-center justify-center gap-10 md:flex md:flex-row ms-auto">
                        <li>
                            <Link
                                to="/"
                                className={`${isActiveMenu('Home')}`}
                                onClick={() => {
                                    handleMenuClick('Home');
                                }}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/movies"
                                className={`${isActiveMenu('Movies')}`}
                                onClick={() => {
                                    handleMenuClick('Movies');
                                }}
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/series"
                                className={`${isActiveMenu('Series')}`}
                                onClick={() => {
                                    handleMenuClick('Series');
                                }}
                            >
                                Series
                            </Link>
                        </li>
                        <li>
                            <div className="order-5 md:order-3">
                                <Search />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
