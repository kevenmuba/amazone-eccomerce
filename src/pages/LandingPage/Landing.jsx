import React from 'react'
import LayOut from '../../components/Layout/LayOut'
import CaraouselRender from '../../components/carousel/CarouselRender'
import Category from '../../components/catagories/Category'
import Product from '../../components/Product/Product'


function Landing() {
  return (
    <LayOut>
      <CaraouselRender/>
      <Category/>
      <Product/>
    </LayOut>
  )
}

export default Landing
