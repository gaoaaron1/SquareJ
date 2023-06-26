import React, { useState } from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export default function Shop() {
  const [query, setQuery] = useState("");

  function Card(props) {
    return (
      <div className="card" style={{ "width:":"18rem", "height" : "40rem" }}>
        <Product key={props.data.id} data={props.data} query={props.query} />
      </div>
      
    );
  }

  // Filter products based on the query
  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );  

  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1> Grocery Shop </h1>
      </div>

      <div className="searchBar">
        <input 
        type="text" 
        placeholder="Search.." 
        name="search" 
        value={query}
        onChange={e => setQuery(e.target.value)} 
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/*
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
  */}
      <div className="products">
        {/*<Card data={PRODUCTS[0]} query={query} /> */}
        {filteredProducts.map((product) => (
          <Card key={product.id} data={product} query={query} />
        ))}
      </div>
    </div>
  );
}
