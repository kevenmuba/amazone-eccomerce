import React from 'react'
import LayOut from '../../components/Layout/LayOut'
import CaraouselRender from '../../components/carousel/CarouselRender'
import Category from '../../components/catagories/Category'


function Landing() {
  return (
    <LayOut>
      <CaraouselRender/>
      <Category/>
    </LayOut>
  )
}

export default Landing
