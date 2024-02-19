import "./App.css";
import profile from "./profile1.jpeg"
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom"
import { AddColor } from "./AddColor"
import { UserList } from "./UserList"
import { ProductList } from "./component/ProductList";
import { Home } from "./component/Home";
import { ProductDetails } from "./component/ProductDetails";
import { useState, useEffect } from "react"
import { NotFoundPage } from "./component/NotFoundPage";
import { AddProducts } from "./component/AddProducts";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExampleContext from "./component/context/ExampleContext";
import TicTacToe from "./component/TicTacToe";
import LifeCycleA from "./component/class/LifeCycleA";

export const INITIAL_PRODUCT_LIST = [
  {
    name: " iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
    rating: 3,
    summary:
      "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
  },
  {
    name: "iPhone 15 Pro (128 GB) ",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
    rating: 3.5,
    summary:
      " iPhone 15 Pro has Link strong and light aerospace-grade titanium design with Link textured matte-glass back. It also features Link Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
  },
  {
    name: "Samsung Galaxy S23 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: 4.7,
    summary:
      "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
  },
  {
    name: "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
    rating: 5.0,
    summary:
      "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on Link phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
  },
  {
    name: "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    rating: 4.8,
    summary:
      "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you.",
  },
  {
    name: " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    rating: 4.9,
    summary:
      "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
  },
  {
    name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    poster: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    price: "₹22,999",
    rating: 4.5,
    summary:
      "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
  },
  {
    name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    poster: "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    price: "₹27,141",
    rating: 4.3,
    summary:
      "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
  },
  {
    name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    poster: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    price: "₹84,990",
    rating: 5.0,
    summary:
      "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.",
  },
  {
    name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    poster: "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    price: "₹1,10,790",
    rating: 4.9,
    summary:
      " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD",
  },
];


function App() {
  // lifting the state up => lifted from child to parent
  const [productList, setProductList] = useState([]);
  const [mode, setMode] = useState("light")
  const navigate = useNavigate()

  //1. creating - createContext  ✅
  //2. Publisher - provider - context.Provider ✅
  //3. Subscriber - useContext - useContext(context)

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/products")}>ProductList</Button>
          <Button color="inherit" onClick={() => navigate("/products/add")}>AddProduct</Button>
          <Button color="inherit" onClick={() => navigate("/add-color")}>AddColor</Button>
          <Button color="inherit" onClick={() => navigate("/profile")}>UserList</Button>
          <Button color="inherit" onClick={() => navigate("/context")}>Context</Button>
          <Button color="inherit" onClick={() => navigate("/tic-tac-toe")}>TicTacToe</Button>
          <Button color="inherit" onClick={() => navigate("/class")}>Class</Button>

          <Button color="inherit"
            startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "dark" : "light"} Mode</Button>
        </Toolbar>
      </AppBar>
      <div className="App">
        {/* <nav>
          <ul>
            Link change page without refresh
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">ProductList</Link></li>
            <li><Link to="/products/add">AddProduct</Link></li>

            <li><Link to="/add-color">AddColor</Link></li>
            <li><Link to="/profile">UserList</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />

          <Route path="/products/add" element={<AddProducts productList={productList} setProductList={setProductList} />} />

          <Route path="/items" element={<Navigate replace to="/products" />} />

          <Route path="/add-color" element={<AddColor />} />
          <Route path="/profile" element={<UserList />} />
          <Route path="/context" element={<ExampleContext />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/class" element={<LifeCycleA />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}



export default App;


//Task - 15 mins
// /products/add => <AddProducts />
//Add products => Product Added => /products (ProductList Page)