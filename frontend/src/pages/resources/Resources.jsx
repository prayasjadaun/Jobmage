import React from 'react';
import SliderCard from './slidercard/SliderCard';
import Courses from './books/courses';
import Books from './books/Books';
import './resources.css';

function Resources() {
  return (
    <div className='resources'>
      <div className="banners">
        <SliderCard />
      </div>

      <div className="courses">
        <Courses />
      </div>

      <div className="books">
        <Books />
      </div>
    </div>
  );
}

export default Resources;
