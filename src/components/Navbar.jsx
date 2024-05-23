import React from 'react';
import Search from './Search';

const Navbar = () => {
    return (
        <>
            <div className="w-full text-white bg-[#151515] px-20 font-poppins py-5">
                <div className="flex items-center justify-center gap-5">
                    <p className="border-b border-white">Home</p>
                    <p>Categories</p>
                    <Search />
                    <p>Movie</p>
                    <p>Series</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;
