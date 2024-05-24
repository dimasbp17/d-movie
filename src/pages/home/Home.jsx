import React from 'react';
import CardMovies from '../../components/CardMovies';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="grid gap-2 px-10 md:grid-cols-6">
                <CardMovies />
                <CardMovies />
                <CardMovies />
                <CardMovies />
                <CardMovies />
                <CardMovies />
            </div>
        </>
    );
};

export default Home;
