import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export function ProductDetails({ productList }) {
  const { productId } = useParams();
  const navigate = useNavigate()
  console.log(productList[1])

  const product = productList[productId]
  console.log(product)

  return (
    <div>
      <div className="product-spec">
        <h5 className="product-name">{product.name}</h5>
        <p> ⭐{product.rating}</p>
      </div>
      <p className="product-summary">{product.summary}</p>
      <h4>Price: {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h4>
      <Button variant="contained" startIcon={<ArrowLeftIcon />}
        onClick={() => navigate(-1)}
      >BACK</Button>
    </div>
  );
}



