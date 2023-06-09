import React from 'react'
import { PRODUCTS } from "../../products"
import { Product } from "./product";
import "./shop.css";
import { useState } from "react";

//Import icons
import { ShoppingCart } from 'phosphor-react';

export default function Shop() {

  {/*Query state is used to type on search bar */}
  const [query, setQuery] = useState("");

  {/*Filter products based on the search query */}
  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="Shop">

      {/* Title for the page */}
      <div className="shopTitle">
        <h1> Grocery Shop </h1>
      </div>

      {/* Search Bar */}
      <div className = "searchBar">

      <input type="text" placeholder="Search.." name="search" onChange={e => setQuery(e.target.value)} />
      <button type="submit"><i class="fa fa-search"></i></button>
      </div>


       {/* Drop down menu */} 
       <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div>
      </div>       


      <div className="products"> {PRODUCTS.map((product) => (
        <Product key={product.id} data={product} query={query} />
      ))}
      </div>

    </div>
  )
}
