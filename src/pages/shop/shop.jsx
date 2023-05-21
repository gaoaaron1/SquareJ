import React from 'react'
import { PRODUCTS } from "../../products"
import { Product } from "./product";
import "./shop.css";
import { useState } from "react";

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
        <div className="searchBar">
        <form action="">
            <input type="text" placeholder="Search..." onChange={e => setQuery(e.target.value)} />
        </form>
        </div>


      <div className="products"> {PRODUCTS.map((product) => (
        <Product key={product.id} data={product} query={query} />
      ))}
      </div>

    </div>
  )
}
