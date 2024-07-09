import React, { useEffect, useState } from 'react'
import classes from "../Results/results.module.css"
import LayOut from '../../components/Layout/LayOut';
import { useParams } from "react-router-dom";
import { productUrl } from '../../Api/endPoint';
import axios from "axios"
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const { categoryName } = useParams();
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setLoading(false)
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }, []);

  return (
    <LayOut>
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category / {categoryName}</p>
      <hr />
      {isLoading? (<Loader/>):( <div className={classes.products_container}>
      {results?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          renderDesc={false}
          renderAdd={true}
        />)
      
        )}
        
      </div>)}
     
    
    </section>
  </LayOut>
  )
}

export default Results
/**
 1,The useParams hook is really handy because it allows you to create dynamic, flexible URLs in your application. Instead of having a separate page for every single product, you can have one ProductDetails page that can display any product based on the ID in the URL.
 2, useEffectachinn yemntekemew lk pagu load siyareg endiseraln yemnfelgew neger sinor new*/
