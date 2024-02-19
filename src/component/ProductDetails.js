import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useState, useEffect } from "react";
import { API } from "./global";

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate()

  const [product, setProduct] = useState({});


  useEffect(() => {
    fetch(`${API}/${productId}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((pd) => setProduct(pd))
  }, [])//call only once




  // console.log(productList[1])

  // const product = productList[productId]
  // console.log(product)

  return (
    <div>
      <div className="product-spec">
        <h5 className="product-name">{product.name}</h5>
        <p> ⭐{product.rating}</p>
      </div>
      <p className="product-summary">{product.summary}</p>
      <h4>Price:{product.price}
        {/* {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })} */}
      </h4>
      <Button variant="contained" startIcon={<ArrowLeftIcon />}
        onClick={() => navigate(-1)}
      >BACK</Button>
    </div>
  );
}



