import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/LandingPage/Landing'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <>
    <Routes >
      <Route path = '/' element={<Landing/>}/>
      <Route path = '/orders' element={<Orders/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      <Route path = '/category/:categoryName' element={<Results/>}/>
      <Route path = '/products/:productId' element={<ProductDetail/>}/>
      
    

    </Routes>
      
    </>
  )
}

export default Routing
