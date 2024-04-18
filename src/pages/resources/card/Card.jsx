// Card.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './card.css';


const Card = ({cardData}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-container">
      
      <Slider className='cards' {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="card">
            
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
