import React from 'react'
import { PRODUCTS } from "../../products"
import { Product } from "./product";
import "./shop.css";

export default function Shop() {
  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1> Grocery Shop </h1>
      </div>

      <div className="products"> {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
      </div>

    </div>
  )
}
