import React from 'react';

const Search = () => {
    return (
        <>
            <div className="">
                <input
                    type="search"
                    className="rounded-full w-full h-10 lg:h-12 lg:w-[416px] text-black focus:outline-none px-5"
                    placeholder="Search movies..."
                />
            </div>
        </>
    );
};

export default Search;
