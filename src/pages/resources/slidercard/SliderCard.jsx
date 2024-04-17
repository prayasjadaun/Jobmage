import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const SliderCard = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className="slider-card">
      <Slider {...settings}>
        {images.map(({ id, image }) => (
          <div key={id} className="slider-card-container">
            <img src={image} alt={`Slide ${id}`} className="slider-card-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;