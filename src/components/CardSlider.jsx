import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardMovies from './CardMovies';

const CardSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <>
            <Carousel
                responsive={responsive}
                showDots={false}
                autoPlaySpeed={3000}
                autoPlay={true}
                infinite={true}
                swipeable={true}
            >
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
                <div className="mx-1 md:mx-2">
                    <CardMovies />
                </div>
            </Carousel>
            ;
        </>
    );
};

export default CardSlider;
