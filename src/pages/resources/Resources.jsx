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
      <h2 resources-head>Top Featured</h2>
      <div className="courses">
      <Card cardData={CardData}/>
      </div>
      <h2 className='resources-head'>Top Books</h2>
      <div className="books">
      <Card cardData={Books}/>
      </div>
      
    </div>
  )
}

export default Resources
