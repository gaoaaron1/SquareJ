import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar"; 
import Shop from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart"; 
import { ShopContextProvider } from './context/shop-context';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import Home from './pages/home/home';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar loginStatus={loginStatus} loggedIn={loggedIn}/>

          {/* Navigation routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setLoginStatus={setLoginStatus} setLoggedIn={setLoggedIn}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
