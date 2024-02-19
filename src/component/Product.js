import { useState } from "react";
import { Counter } from "../Counter";
import { useNavigate } from "react-router-dom"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';


export function Product({ product, id, deleteButton }) {

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
        <p style={ratingStyle}> ⭐{product.rating}</p>
      </div>

      <IconButton aria-label="toggleDesc" color="primary"
        onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      {/* <button >Toggle Description</button> */}


      <IconButton aria-label="info" color="primary"
        onClick={() => navigate(`/products/${id}`)}>
        <InfoIcon />
      </IconButton>

      {/* <button >Info</button> */}

      {/* conditional styling */}
      {/* <p style={summaryStyle} className="product-summary">{product.summary}</p> */}
      {show ? <p className="product-summary">{product.summary}</p> : null}
      <div className="product-spec">
        <h4>Price: {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h4>
        <Button variant="contained">Add To Cart</Button>

      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Counter />
        {deleteButton}
      </div>
    </div>
  );
}
