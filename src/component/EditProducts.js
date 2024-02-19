import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom"
import { API } from "./global";

export function EditProducts() {
  // AddProduct + productDetails

  const { productId } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    fetch(`${API}/${productId}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((pd) => setProduct(pd))
  }, [])//call only once

  console.log(product)

  return product ? <EditProductForm product={product} /> : "Loading..."

}


function EditProductForm({ product }) {


  const [name, setName] = useState(product.name);
  const [poster, setPoster] = useState(product.poster);
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);
  const [summary, setSummary] = useState(product.summary);
  const navigate = useNavigate()

  const handleEditClick = () => {
    const updatedProduct = {
      name,
      poster,
      price,
      rating,
      summary,
    };

    //1. method - PUT
    //2. body - data  - JSON
    //3. headers- JSON
    fetch(`${API}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(() => navigate("/products"))

    //clear input after adding products
    setName("");
    setPoster("");
    setPrice("");
    setRating("");
    setSummary("");

  }

  return (
    <div className="add-products">

      <TextField id="name" label="Name" variant="outlined" value={name}
        onChange={(event) => setName(event.target.value)} />


      <TextField id="poster" label="Poster" variant="outlined" value={poster}
        onChange={(event) => setPoster(event.target.value)} />

      <TextField id="price" label="Price" variant="outlined" value={price}
        onChange={(event) => setPrice(event.target.value)} />

      <TextField id="rating" label="Rating" variant="outlined" value={rating}
        onChange={(event) => setRating(event.target.value)} />

      <TextField id="summary" label="Summary" variant="outlined" value={summary}
        onChange={(event) => setSummary(event.target.value)} />

      <Button variant="contained" color="success" onClick={handleEditClick}
      >SAVE</Button>
    </div>
  )
}