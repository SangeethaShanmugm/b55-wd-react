import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import { API } from "./global";
// Add Products => 7:15
// Input => 5 (name, poster, price, summary, rating )
// button => add products

export function AddProducts() {
  const [productList, setProductList] = useState([]);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    const storedProductList = JSON.parse(localStorage.getItem("productList"));
    if (storedProductList) {
      setProductList(storedProductList);
    }
  }, []); //called only once


  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]); //called every time when productList is updated

  const handleAddProduct = () => {
    const newProduct = {
      name,
      poster,
      price,
      rating,
      summary,
    };

    // copy productList and add new product
    // setProductList([...productList, newProduct]);
    //1. method - POST
    //2. body - data  - JSON
    //3. headers- JSON
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(newProduct),
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

  };

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

      <Button variant="contained" onClick={handleAddProduct}>Add Product</Button>
    </div>
  );
}
