import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArrowButton = ({ type, onClick }) => {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-white text-black border shadow-lg p-2 ${
        type === 'next' ? '-right-4' : '-left-4'
      }`}
      onClick={onClick}
    >
      {type === 'next' ? (
        <IoChevronForward className="size-4" />
      ) : (
        <IoChevronBack className="size-4" />
      )}
    </button>
  );
};

const SliderCard = () => {
  const settings = {
    dots: true, // Menampilkan titik navigasi di bawah slider
    infinite: true, // Slide berjalan terus tanpa berhenti di slide terakhir
    speed: 500, // Kecepatan transisi dalam milidetik
    slidesToShow: 5, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang digeser saat navigasi
    autoplay: true, // Slide akan berpindah otomatis
    autoplaySpeed: 3000, // Interval waktu otomatis dalam milidetik
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="prev" />,
    lazyLoad: true,
    // centerMode: true,
    // centerPadding: '20px',
  };
  return (
    <>
      <Slider {...settings}>
        <div></div>
      </Slider>
    </>
  );
};

export default SliderCard;
