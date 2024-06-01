import React from 'react';

const Search = () => {
    return (
        <>
            <div className="">
                <input
                    type="search"
                    className="w-full h-10 px-3 text-xs text-black rounded-sm lg:h-8 lg:w-52 focus:outline-none"
                    placeholder="Search movies..."
                />
            </div>
        </>
    );
};

export default Search;
