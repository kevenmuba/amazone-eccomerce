import React, { useContext } from 'react'
import classes from "./Product.module.css"
import { Link } from "react-router-dom";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating'
import { Type } from '../../Utility/action.type';
import { DataContext } from '../DataProvider/DataProvider';
function ProductCard({product,flex, renderDesc,renderAdd}) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
   console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, title, id, rating, price, description
      }
    })
  }
  return (
    
    <div className={`${classes.card__container} ${flex ? classes.product_flexed : ''}`}>
     
    <Link to={`/products/${id}`}>
      <img src={image} alt="" className={classes.img_container} />
    </Link>

    <div>
      <h3 className="classes.buk">{title}</h3>
      {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
      <div className={classes.rating}>
        {/* rating */}
        {<Rating value={rating?.rate} precision={0.1} />}
        {/* count  */}
        <small>{rating?.count}2</small>
      </div>

      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>
       <br />
       {renderAdd &&  <button className={classes.button} onClick={addToCart} >
          add to cart
        </button> }
      
      

    </div>
  </div>
  )
}

export default ProductCard
/*
{renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>} */