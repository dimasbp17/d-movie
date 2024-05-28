import React, { useState } from 'react';
import Search from './Search';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="w-full text-white bg-[#181818]  md:px-20 font-poppins md:py-5 p-4 shadow-xl shadow-gray-500">
                <div>
                    <button
                        className="items-end justify-end block ms-auto md:hidden"
                        onClick={toogleNavbar}
                    >
                        {isOpen ? <XMarkIcon className="w-6 h-6 text-white" /> : <Bars3Icon className="w-6 h-6 text-white" />}
                    </button>
                </div>
                <div className={`md:flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center justify-center gap-5 md:flex md:flex-row">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-[#5AB2FF]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/categories"
                                className="order-1 md:order-1"
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <div className="order-5 md:order-3">
                                <Search />
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/movies"
                                className="md:order-4"
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/series"
                                className="md:order-5"
                            >
                                Series
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
