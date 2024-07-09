import React from 'react'
import classes from "./Product.module.css"
import { Link } from "react-router-dom";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
function ProductCard({product}) {
  const { image, title, id, rating, price, description } = product;
  return (
    
    <div className={classes.card__container}>
     
    <Link to={`/products/${id}`}>
      <img src={image} alt="" className={classes.img_container} />
    </Link>

    <div>
      <h3 className="classes.buk">{title}</h3>
      <div className={classes.rating}>
        {/* rating */}
        {/*<Rating value={rating?.rate} precision={0.1} />*/}
        {/* count  */}
        <small>{rating?.count}2</small>
      </div>

      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>
       <br />
       <button className={classes.button} >
          add to cart
        </button>
      

    </div>
  </div>
  )
}

export default ProductCard
/*
{renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>} */