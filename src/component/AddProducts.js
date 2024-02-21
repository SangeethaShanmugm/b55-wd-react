import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
// Add Products => 7:15
// Input => 5 (name, poster, price, summary, rating )
// button => add products


const productValidationSchema = yup.object({
  name: yup.string()
    .required("Why not fill this name?"),
  poster: yup.string()
    .min(20, "Need a longer Poster")
    .required("Why not fill this poster?"),
  price: yup.string()
    .min(1, "Need a longer price")
    .required("Why not fill this price?"),
  rating: yup.number()
    .min(1, "Need rating above 1")
    .max(5, "Need rating below 5")
    .required("Why not fill this rating?"),
  summary: yup.string()
    .min(20, "Need a longer summary")
    .required("Why not fill this summary?"),
});


export function AddProducts() {
  const [productList, setProductList] = useState([]);

  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [price, setPrice] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");

  const formik = useFormik({
    initialValues: { name: "", poster: "", price: "", rating: "", summary: "" },
    validationSchema: productValidationSchema,
    onSubmit: (newProduct) => {
      console.log("onSubmit", newProduct);
      handleAddProduct(newProduct)
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedProductList = JSON.parse(localStorage.getItem("productList"));
    if (storedProductList) {
      setProductList(storedProductList);
    }
  }, []); //called only once

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]); //called every time when productList is updated

  const handleAddProduct = (newProduct) => {
    console.log("CreateProduct", newProduct)
    // const newProduct = {
    //   name,
    //   poster,
    //   price,
    //   rating,
    //   summary,
    // };

    // copy productList and add new product
    // setProductList([...productList, newProduct]);
    //1. method - POST
    //2. body - data  - JSON
    //3. headers- JSON
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/products"));

    // //clear input after adding products
    // setName("");
    // setPoster("");
    // setPrice("");
    // setRating("");
    // setSummary("");
  };

  return (
    <form className="add-products" onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

      <TextField
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}

      <TextField
        id="price"
        name="price"
        label="Price"
        variant="outlined"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.price && formik.errors.price ? formik.errors.price : ""}

      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}

      <TextField
        id="summary"
        name="summary"
        label="Summary"
        variant="outlined"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}

      <Button type="submit" variant="contained"
        onClick={handleAddProduct}
      >
        Add Product
      </Button>
    </form>
  );
}
