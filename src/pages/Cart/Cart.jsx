import React, { useContext } from 'react'
import { DataContext } from '../../components/DataProvider/DataProvider';
import classes from './cart.module.css'
import ProductCard from '../../components/Product/ProductCard';
import { Type } from '../../Utility/action.type';
import LayOut from '../../components/Layout/LayOut';
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat"
import { Link } from 'react-router-dom';

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
   console.log(basket);
  const total = basket.reduce((amount, item) => {
    return item.price*item.amount  + amount
  }, 0)
  // ke 0 jemro amountu mejemriya yeneberew and item.price adiss yetechemerewun new
   console.log(total);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <LayOut>
       <section className={classes.container} >
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length == 0 ? (<p>Opps ! No item in your cart</p>) : (
              basket?.map((item, i) => {
                return <section  key={item.id} className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={() => increment(item)}><IoIosArrowUp size={20} /></button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={() => decrement(item.id)}> <IoIosArrowDown size={20} /></button>
                  </div>
                </section>
              })
            )
          }
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  )
}

export default Cart
