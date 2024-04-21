import React from 'react'
import SliderCard from './slidercard/SliderCard'
import sliderData from './slidercard/SliderData'
import Card from './card/Card'
import CardData from './card/CardData'
import './resources.css'
import Books from './books/Books'
function Resources() {
  return (
    <div className='resources'>
      <div className="banners">
      <SliderCard images={sliderData} />
      </div>
      
      <div className="courses">
      <h2 className='resources-head'>Top Featured courses</h2>
      <Card cardData={CardData}/>
      </div>
      
      <div className="books">
      <h2 className='resources-head'>Top Books</h2>
      <Card cardData={Books}/>
      </div>
      
    </div>
  )
}

export default Resources
