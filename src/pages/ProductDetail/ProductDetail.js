import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import LayOut from '../../components/Layout/LayOut';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';
function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
   setLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
        setLoading(false)
         console.log(res.data);
      }).catch((err) => {
        console.log(err);
       setLoading(false)
      })
  }, [])
  return (
    <LayOut>
      {isLoading? (<Loader/>):(<ProductCard
      product={product}
      flex = {true}
      renderDesc={true}/>)}
      
    </LayOut>
  )
}

export default ProductDetail
