import React, { useContext, useState } from 'react'
import classes from './payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard'
import LayOut from '../../components/Layout/LayOut';
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCardError] = useState();
  // stripe errorun yemiyasayewun bevariable set lemareg new
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  //console.log(totalItem)
  const handleChange = (e) => {
    // console.log(e)
    e?.error?.message ? setCardError(e?.error?.message) : (setCardError(""))
  }

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const handlePayment = (e) => {
    e.preventDefault();
     //back end || functions ----> contact to the client secret 
  


     //client side (react side confirmation) using stripe


      //After the confirmation ---->  Oder firestore database save , clear basket
  }
  
  return (
    <LayOut>
      <section className={classes.payment}>
       {/* header */}
       <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      
  
      {/* address */}
<div className={classes.flex}>
 <h3>Delivery Address</h3>
 <div>
   <div>{user?.email}</div>
   <div>123 React Lane</div>
   <div>Ethiopia, AA</div>
 </div>
</div>
<hr />
{/* product */}
<div className={classes.flex}>
 <h3>Review items and Delivery</h3>
 <div>
   {
     basket?.map((item) => <ProductCard product={item} flex={true} key={item.id} />)
   }
    </div>
   </div>
    <hr /> 
    <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment__details}>
            <form onSubmit={handlePayment} >
                {/* error */}
                {carderror && <small style={{ color: "red" }}>{carderror}</small>}
                {/* card element */}
                <CardElement onChange={handleChange}  size={20} />

                {/* price */}
                {
                  
                  <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>  <CurrencyFormat amount={total} />
                    </span>
                  </div>
                 { 
                  <button type='submit' >
                    {/*
                      processing ? (
                        <div className={classes.loading}>
                          <ClipLoader color='grey' size={12} />
                          <p>Please Wait...</p>
                        </div>

                      ) : "Pay Now"
                    */}
                   Pay Now
                  </button>}
                </div>
                   
                }
                
              </form>


            </div>
            </div>
          </div>

      </section>
    </LayOut>
  )
}

export default Payment

