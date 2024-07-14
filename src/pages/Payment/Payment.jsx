import React, { useContext, useState } from 'react'
import classes from './payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard'
import LayOut from '../../components/Layout/LayOut';
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import {axiosInstance } from '../../Api/axios'
import { ClipLoader } from 'react-spinners';
import { db } from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/action.type';
function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCardError] = useState();
  // stripe errorun yemiyasayewun bevariable set lemareg new
  const [processing,setProcessing] = useState(false);
  const navigate = useNavigate()
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
  const handlePayment = async (e) => {
    e.preventDefault();
     //back end || functions ----> contact to the client secret 
    try {
      setProcessing(true)
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`
      })

        console.log(response.data);
     const clientSecret = response.data?.clientSecret
   //  console.log(clientSecret);
  
  
   //2,client side (react side confirmation) using stripe

     const { paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      }
    )
   // console.log(paymentIntent);
   try {
    await db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

    //the basket should be empty after purchase and Items set to the database 
    // console.log("Order document successfully written to Firestore."); 
    dispatch({ type: Type.EMPTY_BASKET })
   //  console.log("Order document successfully written to Firestore.");
  }  catch (error) {
    console.error("Error writing order document to Firestore:", error);
  }
   
    setProcessing(false)
    navigate("/orders", { state: { msg: "Here is Your new order" } })
    } catch(error){
      console.log(error);
      setProcessing(false)
    }
    
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
                    {
                      processing ? (
                        <div className={classes.loading}>
                          <ClipLoader color='grey' size={12} />
                          <p>Please Wait...</p>
                        </div>

                      ) : "Pay Now"
                    }
                   
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

