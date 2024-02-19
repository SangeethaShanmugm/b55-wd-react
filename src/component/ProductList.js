import { useState, useEffect } from "react"
import { Product } from "./Product";
import { INITIAL_PRODUCT_LIST } from "../App";
import { API } from "./global";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function ProductList() {
  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    fetch(`${API}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((pds) => setProductList(pds))
  }

  useEffect(() => getProducts(), [])//call only once

  console.log(productList)
  return (
    <div>
      <div className="product-list">
        {productList.map((pd) => (
          <Product key={pd.id} product={pd} id={pd.id}
            deleteButton={
              <IconButton aria-label="deletBtn" color="secondary"
                onClick={() => {
                  fetch(`${API}/${pd.id}`, {
                    method: "DELETE"
                  })
                    .then(() => getProducts())
                }}>
                <DeleteIcon />
              </IconButton>

            } />
        ))}
      </div>
    </div>

  );
}




