import React, { useState } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"; 
import Shop from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart"; 
import { ShopContextProvider } from './context/shop-context';
import Register from './pages/register/register';
import Login from './pages/login/login';


function App() {


  return (
    <div className="App">
      <ShopContextProvider>
        <Router>

          <Navbar />

          {/*Navigation routes*/}
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>


        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
