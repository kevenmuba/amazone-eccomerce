import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/LandingPage/Landing'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51PWfQBIN9IuGZY2Zg2TdwzUPoLOJQO7QzamGeZvm0LhMQvPtOnD0FiHEbW1AoySk4UpLccMSQS4SE8UlWDSpcQQ600on4bsbN1');

function Routing() {
  
  return (
    <>
    <Routes >
      <Route path = '/' element={<Landing/>}/>
      <Route path = '/category/:categoryName' element={<Results/>}/>
      <Route path = '/products/:productId' element={<ProductDetail/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      <Route path = '/orders' element={<Orders/>}/>
      <Route path = '/payments' element={<Elements stripe={stripePromise}>
              <Payment />
            </Elements>}/>
      <Route path = '/auth' element={<Auth/>}/>
      
      
    

    </Routes>
      
    </>
  )
}

export default Routing
