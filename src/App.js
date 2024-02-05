import "./App.css";
import { Counter } from "./Counter";
import profile from "./profile1.jpeg"

function App() {


  return (
    <div className="App">
      <Product />
    </div>
  );

}

function Product() {

  const product = {
    name: "Apple iPhone 15 Pro (128 GB) - Natural Titanium",
    price: 130990,
    rating: 5,
    category: "mobile",
    poster: "https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg",
    summary: "iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
  }

  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h5 className="product-name">{product.name}</h5>
        <p> ⭐{product.rating}</p>
      </div>
      <p className="product-summary">{product.summary}</p>
      <div className="product-spec">
        <h6>{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h6>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default App;
