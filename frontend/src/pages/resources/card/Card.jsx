import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './card.css';

const Card = ({ items }) => {
  const handleApplyClick = (link) => {
    const formattedLink = formatLink(link);
    window.open(formattedLink, "_blank");
  };

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
      <Slider className="cards" {...settings}>
        {items.map(item => (
          <div key={item._id} className="r-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button className="button" onClick={() => handleApplyClick(item.apply)}>
              Get
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
