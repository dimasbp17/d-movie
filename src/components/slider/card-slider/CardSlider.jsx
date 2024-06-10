// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import CardMovies from './CardMovies';

// const CardSlider = () => {
//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 5,
//             slidesToSlide: 1, // optional, default to 1.
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2,
//             slidesToSlide: 2, // optional, default to 1.
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 2,
//             slidesToSlide: 1, // optional, default to 1.
//         },
//     };
//     return (
//         <>
//             <Carousel
//                 responsive={responsive}
//                 showDots={false}
//                 autoPlaySpeed={3000}
//                 autoPlay={true}
//                 infinite={true}
//                 swipeable={true}
//             >
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//                 <div className="mx-1 md:mx-2">
//                     <CardMovies />
//                 </div>
//             </Carousel>
//             ;
//         </>
//     );
// };

// export default CardSlider;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardMovies from '../../CardMovies';
import ArrowButton from './ArrowButton';

const CardSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <ArrowButton type="next" />,
        prevArrow: <ArrowButton type="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
                <div>
                    <CardMovies />
                </div>
            </Slider>
        </div>
    );
};

export default CardSlider;
