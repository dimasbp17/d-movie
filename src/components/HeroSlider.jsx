import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardMovies from './CardMovies';
import img from '../../public/assets/slider.jpg';
import avatar from '../../public/assets/avatar.png';

const HeroSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <>
            <Carousel
                responsive={responsive}
                showDots={true}
                autoPlaySpeed={5000}
                infinite={true}
                autoPlay={false}
            >
                <div>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute flex flex-col">
                            <p className="px-20 text-4xl font-bold text-white">Avatar: The Way of Water</p>
                        </div>

                        <img
                            src={avatar}
                            alt=""
                            className="w-full h-[400px] md:h-[744px] object-cover"
                        />
                    </div>
                </div>
                <div>
                    <img
                        src={avatar}
                        alt=""
                        className="w-full h-[400px] md:h-[744px] object-cover"
                    />
                </div>
                <div>
                    <img
                        src={img}
                        alt=""
                        className="w-full h-[400px] md:h-[744px] object-cover"
                    />
                </div>
            </Carousel>
            ;
        </>
    );
};

export default HeroSlider;
