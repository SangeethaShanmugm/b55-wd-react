import { useState } from "react";
import { Counter } from "../Counter";
import { useNavigate } from "react-router-dom"

export function Product({ product, id }) {

  const [show, setShow] = useState(true);
  const navigate = useNavigate()

  const ratingStyle = {
    color: product.rating >= 4.5 ? "green" : "red",
    fontSize: "20px"
  };
  //true  => block => visible
  //false => none => hide
  const summaryStyle = {
    display: show ? "block" : "none"
  };


  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h5 className="product-name">{product.name} - {id} </h5>
        <h6 style={ratingStyle}> ⭐{product.rating}</h6>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Description</button>

      <button onClick={() => navigate(`/products/${id}`)}>Info</button>

      {/* conditional styling */}
      {/* <p style={summaryStyle} className="product-summary">{product.summary}</p> */}
      {show ? <p className="product-summary">{product.summary}</p> : null}
      <div className="product-spec">
        <h6>{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h6>
        <button>Add To Cart</button>
      </div>
      <Counter />
    </div>
  );
}
