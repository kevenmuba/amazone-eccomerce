import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/LandingPage/Landing'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Auth from './pages/Auth/Auth'

function Routing() {
  return (
    <>
    <Routes >
      <Route path = '/' element={<Landing/>}/>
      <Route path = '/category/:categoryName' element={<Results/>}/>
      <Route path = '/products/:productId' element={<ProductDetail/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      <Route path = '/orders' element={<Orders/>}/>
      <Route path = '/auth' element={<Auth/>}/>
      
    

    </Routes>
      
    </>
  )
}

export default Routing
