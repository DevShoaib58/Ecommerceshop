import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Home"
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Contact from "./Contact";
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct:/id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>

  );
};

export default App;
