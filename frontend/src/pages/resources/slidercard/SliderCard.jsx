import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import './slider.css';

const SliderCard = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/sliderData');
        setSlides(response.data);
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };
    fetchSlides();
  }, []);

  const formatLink = (link) => {
    // Check if link starts with http:// or https://
    if (!/^https?:\/\//i.test(link)) {
      // If not, add https:// as the default protocol
      return `https://${link}`;
    }
    // Otherwise, return the link as is
    return link;
  };

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
        {slides.map(({ _id, image, link }) => (
          <div key={_id} className="slider-card-container">
            <a href={formatLink(link)} target="_blank" rel="noopener noreferrer" className='slider-link'>
              <img src={image} alt={`Slide ${_id}`} className="slider-card-image" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
