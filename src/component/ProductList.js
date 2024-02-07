import { Product } from "./Product";
import { INITIAL_PRODUCT_LIST } from "../App";
import { useState, useEffect } from "react";

export function ProductList() {
  const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST);

  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")

  useEffect(() => {
    const storedProductList = JSON.parse(localStorage.getItem("productList"))
    if (storedProductList) {
      setProductList(storedProductList)
    }
  }, [])//called only once


  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList))
  }, [productList])//called every time when productList is updated

  const handleAddProduct = () => {
    const newProduct = {
      name,
      poster,
      price,
      rating,
      summary,
    }
    // copy productList and add new product
    setProductList([...productList, newProduct])
    //clear input after adding products
    setName("")
    setPoster("")
    setPrice("")
    setRating("")
    setSummary("")
  }

  return (
    <div>
      <div className="add-products">
        <input type="text" placeholder="Name" value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type="text" placeholder="Poster" value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />
        <input type="text" placeholder="Price" value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input type="text" placeholder="Rating" value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <input type="text" placeholder="Summary" value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />

        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={index} />
        ))}
      </div>
    </div>

  );
}

// Add Products => 7:15
// Input => 5 (name, poster, price, summary, rating )
// button => add products