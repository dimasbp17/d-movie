import React, { useState } from 'react';
import Search from './Search';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="w-full text-white bg-[#222831] md:px-20 font-poppins md:py-5 p-4">
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
                            <button className="">Home</button>
                        </li>
                        <li>
                            <button className="order-1 md:order-1">Categories</button>
                        </li>
                        <li>
                            <div className="order-5 md:order-3">
                                <Search />
                            </div>
                        </li>
                        <li>
                            <button className="md:order-4">Movies</button>
                        </li>
                        <li>
                            <button className="md:order-5">Series</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
