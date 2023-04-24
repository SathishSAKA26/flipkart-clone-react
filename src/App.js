import React, { useEffect } from "react";
// import all pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
// import routers
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import navbar component
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import supabase from "./supabase";
// import slice
import { setUser } from "./slices/userSlices";

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    dispatch(setUser(data.session.user));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
